import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'animate.css';

const IntroPage = ({ handleLinkClick }) => {
    return (
        <main className="min-h-[calc(100vh-80px)] bg-gradient-hero">
            {/* Hero Section */}
            <section className="section-container py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Experience Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-l-4 border-red-600 rounded-r-full mb-6">
                            <i className="bx bx-badge-check text-red-600"></i>
                            <span className="text-sm font-medium text-gray-700">
                                Más de 35 años de experiencia
                            </span>
                        </div>

                        {/* Hero Heading */}
                        <h1 className="section-header mb-6">
                            <span className="block">Calidad</span>
                            <span className="text-gradient">Poblana</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl lg:max-w-none">
                            Somos una imprenta en Puebla con más de 35 años de experiencia.
                            Hacemos revistas, catálogos, trípticos y muchos otros formatos.
                            Con clientes en varios estados de la República, nos mantenemos
                            como una opción confiable, vigente y de alta calidad.
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-3 mb-10 text-left max-w-md mx-auto lg:mx-0">
                            {[
                                'Conocimiento del mercado',
                                'Dominio técnico en la impresión Offset',
                                'Flexibilidad en la oferta de servicios',
                                'Adaptabilidad en diversos formatos de impresión'
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
                                    <i className="bx bx-check-circle text-blue-500 bx-sm mt-0.5 flex-shrink-0"></i>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/nosotros"
                                onClick={() => handleLinkClick('Nosotros')}
                                className="btn-primary"
                            >
                                <i className="bx bx-info-circle bx-sm mr-2"></i>
                                Conoce más
                            </Link>
                            <Link
                                to="/pedido"
                                onClick={() => handleLinkClick('Pedido')}
                                className="btn-secondary"
                            >
                                <i className="bx bx-file bx-sm mr-2"></i>
                                Solicitar cotización
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Video */}
                    <div className="flex-1 w-full max-w-2xl lg:max-w-none">
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 blur-xl"></div>

                            {/* Video Container */}
                            <div className="relative card p-2 sm:p-3">
                                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/6heOBw1sGHs"
                                        title="Impresos Diego - Video promocional"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>

                            {/* Floating Stats Card */}
                            <div className="hidden sm:flex absolute -bottom-6 -left-6 card-glass p-4 flex-col items-center animate-float">
                                <span className="text-3xl font-bold text-gradient">35+</span>
                                <span className="text-sm text-gray-600">Años de experiencia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="section-container pb-12 lg:pb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {[
                        { icon: 'bxs-printer', label: 'Impresión Offset', value: 'Alta Calidad' },
                        { icon: 'bxs-truck', label: 'Entrega', value: '5-7 días' },
                        { icon: 'bxs-map', label: 'Cobertura', value: 'Nacional' },
                        { icon: 'bxs-shield-alt-2', label: 'Garantía', value: '100%' },
                    ].map((stat, index) => (
                        <div key={index} className="card p-4 lg:p-6 text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-3">
                                <i className={`bx ${stat.icon} bx-md`}></i>
                            </div>
                            <p className="text-lg lg:text-xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

IntroPage.propTypes = {
    handleLinkClick: PropTypes.func.isRequired,
};

export default IntroPage;