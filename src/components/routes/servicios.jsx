import { Link } from 'react-router-dom';

function Servicios() {
    const services = [
        {
            badge: 'Impresión',
            badgeColor: 'blue',
            title: 'Impresión, Acabado y Encuadernado',
            description: 'Hacemos revistas, catálogos, manuales de productos, libros de texto, y muchos otros formatos.',
            details: 'Desde materiales educativos hasta contenido promocional, nos adaptamos a diversos proyectos, asegurando siempre la calidad y eficacia en la comunicación del mensaje deseado.',
            featured: true,
        },
        {
            badge: 'Impresión',
            badgeColor: 'blue',
            title: 'Maquila de Impresión',
            description: 'Contamos con una prensa de tamaño 8 oficios / 4 colores.',
            details: 'Pre-entintado directo a prensa (Densitómetro X-Rite). Tiempos de entrega competitivos.',
        },
        {
            badge: 'Emplacado',
            badgeColor: 'purple',
            title: 'Servicio de Placas UV',
            description: 'Tecnología de impresión UV para diseños únicos sobre una amplia variedad de materiales.',
            details: 'Contamos con CTP, todas las medidas de placas.',
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-hero py-12 lg:py-20">
            <div className="section-container">
                {/* Header */}
                <header className="text-center mb-12 lg:mb-16">
                    <h1 className="section-header mb-6">
                        Toma el <mark className="px-3 py-1 text-white bg-blue-600 rounded-lg">control</mark> de tus proyectos
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Nuestra experiencia se extiende a una diversa gama de publicaciones tanto impresas
                        como digitales, adaptadas meticulosamente para cumplir con los requerimientos específicos
                        de cada cliente. Nos distinguimos por ofrecer plazos de entrega altamente eficientes.
                    </p>
                </header>

                {/* Featured Service */}
                <div className="mb-8">
                    {services.filter(s => s.featured).map((service, index) => (
                        <div key={index} className="card p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                <div className="flex-1">
                                    <span className={`inline-flex items-center gap-1 px-3 py-1 bg-${service.badgeColor}-100 text-${service.badgeColor}-700 text-xs font-medium rounded-full mb-4`}>
                                        <i className="bx bx-printer"></i>
                                        {service.badge}
                                    </span>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-blue-600 font-medium mb-3">
                                        {service.description}
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        {service.details}
                                    </p>
                                    <Link to="/pedido" className="btn-primary">
                                        Contáctanos
                                        <i className="bx bx-right-arrow-alt bx-sm ml-2"></i>
                                    </Link>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-blue-100 rounded-2xl flex items-center justify-center">
                                        <i className="bx bx-book-open text-blue-600" style={{ fontSize: '4rem' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {services.filter(s => !s.featured).map((service, index) => (
                        <div key={index} className="card p-6 lg:p-8 group hover:shadow-xl">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 bg-${service.badgeColor}-100 text-${service.badgeColor}-700 text-xs font-medium rounded-full mb-4`}>
                                <i className={`bx ${service.badgeColor === 'blue' ? 'bx-printer' : 'bx-layer'}`}></i>
                                {service.badge}
                            </span>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {service.description} {service.details}
                            </p>
                            <Link
                                to="/pedido"
                                className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all"
                            >
                                Contáctanos
                                <i className="bx bx-right-arrow-alt"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Servicios;