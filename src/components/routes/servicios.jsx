
function Servicios() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="text-center mb-2"> {/* Reduced bottom margin */}
                    <h1 className="mb-4 pt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Toma el <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">control</mark> de tus proyectos.
                    </h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 max-w-screen-lg  mx-auto">
                        Nuestra experiencia se extiende a una diversa gama de publicaciones tanto impresas como digitales, adaptadas meticulosamente para cumplir con los requerimientos específicos de cada cliente. Nos distinguimos por ofrecer plazos de entrega altamente eficientes.
                    </p>
                </div>
                <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-4"> {/* Reduced top padding */}
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                        <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                            Impresión
                        </a>
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Impresión, Acabado y Encuadernado</h1>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                            <span className="text-blue-500">
                                Hacemos revistas, catálogos, manuales de productos, libros de texto, y muchos otros formatos.
                            </span>
                            Desde materiales educativos hasta contenido promocional, nos adaptamos a diversos proyectos, asegurando siempre la calidad y eficacia en la comunicación del mensaje deseado.
                        </p>
                        <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Contactanos
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                                Impresión
                            </a>
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Maquila de Impresión</h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Contamos con una prensa de tamaño 8 oficios / 4 colores.
                                Pre-entintado directo a prensa (Densitómetro X-Rite)
                                Tiempos de entrega competitivos
                            </p>
                            <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Contactanos
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                Emplacado
                            </a>
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Servicio de Placas UV</h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Con la tecnología de impresión UV, es posible imprimir diseños únicos, imágenes, texto y texturas directamente sobre una amplia variedad de materiales u objetos. <br /> Contamos con CTP, todas las medidas de placas.</p>
                            <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Contactanos
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Servicios;