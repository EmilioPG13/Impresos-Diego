import { Link } from 'react-router-dom';

function Nosotros() {
    const stats = [
        { value: '35+', label: 'Años de experiencia' },
        { value: '1000+', label: 'Proyectos completados' },
        { value: '100%', label: 'Clientes satisfechos' },
    ];

    const values = [
        {
            icon: 'bx-check-shield',
            title: 'Calidad',
            description: 'Nos comprometemos con la excelencia en cada proyecto que realizamos.',
        },
        {
            icon: 'bx-time-five',
            title: 'Puntualidad',
            description: 'Respetamos los tiempos de entrega acordados con nuestros clientes.',
        },
        {
            icon: 'bx-cog',
            title: 'Innovación',
            description: 'Utilizamos tecnología de punta en todos nuestros procesos.',
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-hero">
            {/* Hero Section */}
            <div className="section-container py-16 lg:py-24">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="section-header mb-6">
                        Donde todo <span className="text-gradient">comenzó</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 mb-8">
                        Aquí en Impresos Diego nos enfocamos en mercados donde la tecnología,
                        la innovación y el capital pueden desbloquear valor a largo plazo y
                        impulsar el crecimiento económico para nuestros clientes.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="card p-4 lg:p-6">
                                <p className="text-2xl lg:text-4xl font-bold text-gradient mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-sm lg:text-base text-gray-600">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-white py-16 lg:py-24">
                <div className="section-container">
                    <header className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Nuestros valores
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Los principios que guían nuestro trabajo día a día
                        </p>
                    </header>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="card p-6 lg:p-8 text-center group hover:shadow-xl">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <i className={`bx ${value.icon} bx-lg`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="section-container py-16 lg:py-24">
                <div className="card p-8 lg:p-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        ¿Listo para empezar tu proyecto?
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Contáctanos hoy mismo y descubre cómo podemos ayudarte a dar vida a tus ideas impresas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/pedido"
                            className="btn-secondary !bg-white !text-blue-600 hover:!bg-blue-50"
                        >
                            <i className="bx bx-file bx-sm mr-2"></i>
                            Solicitar cotización
                        </Link>
                        <a
                            href="tel:2222488993"
                            className="btn-secondary !bg-transparent !text-white !border-white/30 hover:!bg-white/10"
                        >
                            <i className="bx bx-phone bx-sm mr-2"></i>
                            Llamar ahora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;