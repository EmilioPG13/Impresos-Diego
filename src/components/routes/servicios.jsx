import { Link } from 'react-router-dom';

// SVG Icons as components
const PrinterIcon = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
    </svg>
);

const LayerIcon = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
);

function Servicios() {
    const services = [
        {
            badge: 'Impresión',
            badgeClasses: 'bg-blue-100 text-blue-700',
            Icon: PrinterIcon,
            title: 'Impresión, Acabado y Encuadernado',
            description: 'Hacemos revistas, catálogos, manuales de productos, libros de texto, y muchos otros formatos.',
            details: 'Desde materiales educativos hasta contenido promocional, nos adaptamos a diversos proyectos, asegurando siempre la calidad y eficacia en la comunicación del mensaje deseado.',
            featured: true,
        },
        {
            badge: 'Impresión',
            badgeClasses: 'bg-blue-100 text-blue-700',
            Icon: PrinterIcon,
            title: 'Maquila de Impresión',
            description: 'Contamos con una prensa de tamaño 8 oficios / 4 colores.',
            details: 'Pre-entintado directo a prensa (Densitómetro X-Rite). Tiempos de entrega competitivos.',
        },
        {
            badge: 'Emplacado',
            badgeClasses: 'bg-purple-100 text-purple-700',
            Icon: LayerIcon,
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
                                    <span className={`inline-flex items-center gap-1 px-3 py-1 ${service.badgeClasses} text-xs font-medium rounded-full mb-4`}>
                                        <service.Icon />
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
                                    <Link to="/pedido" className="btn-primary inline-flex items-center">
                                        Contáctanos
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-blue-100 rounded-2xl flex items-center justify-center">
                                        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                                        </svg>
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
                            <span className={`inline-flex items-center gap-1 px-3 py-1 ${service.badgeClasses} text-xs font-medium rounded-full mb-4`}>
                                <service.Icon />
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
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Servicios;