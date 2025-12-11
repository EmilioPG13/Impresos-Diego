import { useEffect } from 'react';

function Terminos() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-stone-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
                <div className="section-container">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Términos y Condiciones
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información General</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Bienvenido a Impresos Diego. Al utilizar nuestros servicios, usted acepta estar sujeto
                            a los siguientes términos y condiciones. Le recomendamos leer detenidamente este documento
                            antes de realizar cualquier pedido o solicitar nuestros servicios de impresión.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Impresos Diego es una empresa mexicana con más de 35 años de experiencia en el sector
                            de la impresión, ubicada en Puebla, México.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Servicios</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Ofrecemos servicios de impresión que incluyen, pero no se limitan a:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 ml-4">
                            <li>Impresión de revistas y catálogos</li>
                            <li>Trípticos y folletos</li>
                            <li>Tarjetas de presentación</li>
                            <li>Material publicitario</li>
                            <li>Impresiones personalizadas</li>
                            <li>Acabados especiales (barniz, laminado, suajes, etc.)</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cotizaciones y Precios</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Todas las cotizaciones son válidas por un período de 15 días naturales a partir de
                            su emisión. Los precios están sujetos a cambios sin previo aviso debido a variaciones
                            en el costo de materiales o tipo de cambio.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Los precios cotizados no incluyen IVA a menos que se especifique lo contrario.
                            El cliente recibirá factura fiscal si así lo solicita.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Proceso de Pedido</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Para iniciar un trabajo de impresión, el cliente debe:
                        </p>
                        <ol className="list-decimal list-inside text-gray-600 mt-4 space-y-2 ml-4">
                            <li>Solicitar una cotización proporcionando las especificaciones del proyecto</li>
                            <li>Aprobar la cotización por escrito (correo electrónico o WhatsApp)</li>
                            <li>Realizar el anticipo correspondiente (generalmente 50% del total)</li>
                            <li>Enviar los archivos en formato adecuado para impresión</li>
                            <li>Aprobar la prueba digital o física según corresponda</li>
                        </ol>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Archivos y Materiales</h2>
                        <p className="text-gray-600 leading-relaxed">
                            El cliente es responsable de proporcionar archivos en alta resolución (mínimo 300 DPI)
                            y en formato adecuado (PDF, AI, PSD, TIFF). Los archivos deben incluir 3mm de sangrado
                            y las tipografías convertidas a curvas.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Impresos Diego no se hace responsable por errores en el contenido, ortografía o diseño
                            proporcionados por el cliente una vez que este haya aprobado la prueba.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Tiempos de Entrega</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Los tiempos de entrega se estiman al momento de la cotización y comienzan a correr
                            una vez recibido el anticipo y los archivos finales aprobados. Los tiempos pueden
                            variar según la complejidad del trabajo y la disponibilidad de materiales.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            No nos hacemos responsables por retrasos causados por modificaciones solicitadas
                            por el cliente después de iniciada la producción.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Pagos</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Aceptamos pagos mediante:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2 ml-4">
                            <li>Transferencia bancaria</li>
                            <li>Depósito en efectivo</li>
                            <li>Pago en efectivo en nuestras instalaciones</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            El pedido será entregado una vez liquidado el saldo total. Los pedidos no recogidos
                            en un plazo de 30 días podrán generar cargos de almacenamiento.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Garantía y Reclamaciones</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Garantizamos la calidad de nuestro trabajo. Cualquier reclamación debe realizarse
                            dentro de las 48 horas siguientes a la recepción del pedido. Las reclamaciones
                            deben ir acompañadas de evidencia fotográfica del problema.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            La garantía no cubre diferencias menores de color entre la pantalla y el material
                            impreso, ni daños causados por el mal manejo del producto después de la entrega.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Propiedad Intelectual</h2>
                        <p className="text-gray-600 leading-relaxed">
                            El cliente declara tener los derechos de uso sobre todo el material proporcionado
                            para impresión. Impresos Diego no se hace responsable por violaciones de derechos
                            de autor o propiedad intelectual derivadas del contenido proporcionado por el cliente.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificaciones</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier
                            momento. Las modificaciones entrarán en vigor inmediatamente después de su
                            publicación en este sitio web.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Para cualquier duda o aclaración sobre estos términos, puede contactarnos:
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

export default Terminos;
