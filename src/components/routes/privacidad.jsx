import { useEffect } from 'react';

function Privacidad() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
                <div className="section-container">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Política de Privacidad
                    </h1>
                    <p className="text-gray-300">
                        Última actualización: Diciembre 2024
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="section-container py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
                        <p className="text-gray-600 leading-relaxed">
                            En Impresos Diego, respetamos su privacidad y nos comprometemos a proteger
                            sus datos personales. Esta política de privacidad describe cómo recopilamos,
                            usamos y protegemos su información cuando utiliza nuestro sitio web o
                            servicios de impresión.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Esta política cumple con la Ley Federal de Protección de Datos Personales
                            en Posesión de los Particulares (LFPDPPP) de México.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Responsable del Tratamiento</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Impresos Diego, con domicilio en Puebla, México, es el responsable del
                            tratamiento de sus datos personales.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Datos que Recopilamos</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Podemos recopilar los siguientes tipos de información:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 ml-4">
                            <li><strong>Datos de identificación:</strong> Nombre, empresa, cargo</li>
                            <li><strong>Datos de contacto:</strong> Correo electrónico, número telefónico, dirección</li>
                            <li><strong>Datos de facturación:</strong> RFC, razón social, domicilio fiscal</li>
                            <li><strong>Información del proyecto:</strong> Especificaciones de impresión, archivos, diseños</li>
                            <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalidades del Tratamiento</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Utilizamos sus datos personales para las siguientes finalidades:
                        </p>
                        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Finalidades Primarias:</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Procesar y gestionar sus pedidos de impresión</li>
                            <li>Elaborar cotizaciones personalizadas</li>
                            <li>Comunicarnos con usted sobre el estado de sus pedidos</li>
                            <li>Emitir facturas y comprobantes fiscales</li>
                            <li>Atender sus consultas y solicitudes</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Finalidades Secundarias:</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Enviar información sobre promociones y nuevos servicios</li>
                            <li>Realizar encuestas de satisfacción</li>
                            <li>Mejorar nuestros servicios y experiencia de usuario</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Si no desea que sus datos sean utilizados para finalidades secundarias,
                            puede comunicárnoslo al momento de proporcionar sus datos.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Transferencia de Datos</h2>
                        <p className="text-gray-600 leading-relaxed">
                            No compartimos, vendemos ni alquilamos sus datos personales a terceros para
                            fines de marketing. Podemos compartir información con:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 ml-4">
                            <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                            <li>Autoridades competentes cuando la ley lo requiera</li>
                            <li>Servicios de paquetería para la entrega de pedidos</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies y Tecnologías Similares</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su
                            experiencia de navegación. Estas tecnologías nos permiten:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 ml-4">
                            <li>Recordar sus preferencias de navegación</li>
                            <li>Analizar el uso del sitio web mediante Google Analytics</li>
                            <li>Optimizar el rendimiento y funcionalidad del sitio</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Puede configurar su navegador para rechazar cookies, aunque esto podría
                            afectar algunas funcionalidades del sitio.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Seguridad de los Datos</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Implementamos medidas de seguridad técnicas, administrativas y físicas
                            diseñadas para proteger sus datos personales contra el acceso no autorizado,
                            pérdida, alteración o destrucción. Estas medidas incluyen:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 ml-4">
                            <li>Conexiones seguras (HTTPS) en nuestro sitio web</li>
                            <li>Acceso restringido a datos personales solo a personal autorizado</li>
                            <li>Respaldos periódicos de información</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Derechos ARCO</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Usted tiene derecho a:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 ml-4">
                            <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                            <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos</li>
                            <li><strong>Oposición:</strong> Oponerse al uso de sus datos para ciertos fines</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Para ejercer estos derechos, envíe una solicitud a través de nuestros
                            canales de contacto indicando claramente su petición.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Conservación de Datos</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Conservamos sus datos personales únicamente durante el tiempo necesario
                            para cumplir con las finalidades descritas en esta política, o según lo
                            requiera la legislación aplicable. Los datos de facturación se conservan
                            por el período que establece la ley fiscal mexicana.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cambios a esta Política</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Nos reservamos el derecho de modificar esta política de privacidad en
                            cualquier momento. Las modificaciones serán publicadas en esta página
                            con la fecha de última actualización. Le recomendamos revisar
                            periódicamente esta política.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Si tiene preguntas sobre esta política de privacidad o sobre el tratamiento
                            de sus datos personales, puede contactarnos:
                        </p>
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <p className="text-gray-700">
                                <strong>Teléfono:</strong> 222 248 8993
                            </p>
                            <p className="text-gray-700 mt-2">
                                <strong>WhatsApp:</strong> 222 248 8993
                            </p>
                            <p className="text-gray-700 mt-2">
                                <strong>Ubicación:</strong> Puebla, México
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default Privacidad;
