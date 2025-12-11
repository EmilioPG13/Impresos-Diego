// Vercel Serverless Function - Lead Submission API
// This endpoint receives form data and stores it in Neon PostgreSQL

import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

// Service labels for email formatting
const serviceLabels = {
    hotmelt: 'Libros/Revistas Hot-melt',
    grapa: 'Revistas a Grapa',
    tripticos: 'Trípticos',
    polipticos: 'Polípticos',
    manteletas: 'Manteletas',
    otro: 'Otro',
};

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // CORS headers for frontend
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { firstName, lastName, email, phone, company, service, quantity, message } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !service || !quantity) {
            return res.status(400).json({
                error: 'Faltan campos requeridos',
                details: 'Por favor complete todos los campos obligatorios.'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Email inválido',
                details: 'Por favor ingrese un correo electrónico válido.'
            });
        }

        // Validate quantity
        if (parseInt(quantity) < 300) {
            return res.status(400).json({
                error: 'Cantidad inválida',
                details: 'La cantidad mínima es 300 unidades.'
            });
        }

        // Connect to Neon PostgreSQL
        const sql = neon(process.env.DATABASE_URL);

        // Insert lead into database
        const result = await sql`
            INSERT INTO leads (first_name, last_name, email, phone, company, service, quantity, message)
            VALUES (${firstName}, ${lastName}, ${email}, ${phone}, ${company || null}, ${service}, ${parseInt(quantity)}, ${message || null})
            RETURNING id, created_at
        `;

        const lead = result[0];

        // Send email notification via Resend
        if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);

                await resend.emails.send({
                    from: 'Impresos Diego <onboarding@resend.dev>',
                    to: process.env.NOTIFICATION_EMAIL,
                    subject: `🆕 Nueva cotización: ${serviceLabels[service] || service} - ${firstName} ${lastName}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 10px 10px 0 0;">
                                <h1 style="color: white; margin: 0;">📋 Nueva Solicitud de Cotización</h1>
                            </div>
                            <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0;">
                                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Datos del Cliente</h2>
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Nombre:</strong></td>
                                        <td style="padding: 8px 0; color: #1e293b;">${firstName} ${lastName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                                        <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}">${email}</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b;"><strong>Teléfono:</strong></td>
                                        <td style="padding: 8px 0; color: #1e293b;"><a href="tel:${phone}">${phone}</a></td>
                                    </tr>
                                    ${company ? `
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b;"><strong>Empresa:</strong></td>
                                        <td style="padding: 8px 0; color: #1e293b;">${company}</td>
                                    </tr>
                                    ` : ''}
                                </table>

                                <h2 style="color: #1e293b; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px; margin-top: 20px;">Detalles del Proyecto</h2>
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Servicio:</strong></td>
                                        <td style="padding: 8px 0; color: #1e293b;">${serviceLabels[service] || service}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b;"><strong>Cantidad:</strong></td>
                                        <td style="padding: 8px 0; color: #1e293b;">${quantity} unidades</td>
                                    </tr>
                                </table>

                                ${message ? `
                                <h2 style="color: #1e293b; border-bottom: 2px solid #10b981; padding-bottom: 10px; margin-top: 20px;">Mensaje Adicional</h2>
                                <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                                    <p style="color: #475569; margin: 0; white-space: pre-wrap;">${message}</p>
                                </div>
                                ` : ''}

                                <div style="margin-top: 25px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
                                    <p style="color: #92400e; margin: 0; font-size: 14px;">
                                        ⏰ <strong>Recuerda:</strong> El cliente espera una respuesta en 72 horas.
                                    </p>
                                </div>
                            </div>
                            <div style="background: #1e293b; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
                                <p style="color: #94a3b8; margin: 0; font-size: 12px;">
                                    Lead ID: #${lead.id} | Recibido: ${new Date(lead.created_at).toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}
                                </p>
                            </div>
                        </div>
                    `,
                });
            } catch (emailError) {
                // Log email error but don't fail the request
                console.error('Email notification failed:', emailError);
            }
        }

        return res.status(200).json({
            success: true,
            message: '¡Solicitud recibida! Te contactaremos pronto.',
            leadId: lead.id
        });

    } catch (error) {
        console.error('Lead submission error:', error);
        return res.status(500).json({
            error: 'Error del servidor',
            details: 'Hubo un problema al procesar tu solicitud. Por favor intenta de nuevo.'
        });
    }
}
