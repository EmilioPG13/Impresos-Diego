import { useState } from 'react';
import PropTypes from 'prop-types';
import manWorking from '../../images/people/manWorking.jpg';

const Accordion = ({ items }) => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="card overflow-hidden"
                >
                    <button
                        type="button"
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => toggleItem(index)}
                        aria-expanded={openItem === index}
                    >
                        <span className="flex items-center gap-3 font-medium text-gray-900">
                            <i className="bx bx-help-circle text-blue-500 bx-sm"></i>
                            {item.title}
                        </span>
                        <i className={`bx ${openItem === index ? 'bx-chevron-up' : 'bx-chevron-down'} text-gray-400 transition-transform duration-200`}></i>
                    </button>

                    <div
                        className={`
                            overflow-hidden transition-all duration-300 ease-out
                            ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                        `}
                    >
                        <div className="px-5 py-4 text-gray-600 border-t border-gray-100 leading-relaxed">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

Accordion.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
    })).isRequired,
};

function FAQ() {
    const faqItems = [
        {
            title: '¿Qué es la impresión offset?',
            content: (
                <p>
                    La impresión offset, usada para producir grandes volúmenes de materiales impresos,
                    transfiere una imagen de una placa de aluminio a un rodillo de goma y luego al papel
                    o cartón. Es un método indirecto, ya que la imagen de la placa pasa primero al rodillo
                    antes de depositarse en el sustrato.
                </p>
            ),
        },
        {
            title: '¿Cuál es el tiempo de entrega?',
            content: (
                <p>
                    Una vez recibidos y aprobados los archivos, los tiempos de entrega son de
                    <strong className="text-blue-600"> 5 a 7 días hábiles</strong>. De ser necesario,
                    se tendrán que hacer las correcciones que nuestro equipo de diseño haya solicitado.
                </p>
            ),
        },
        {
            title: '¿Cuál es el proceso de producción?',
            content: (
                <div className="flex flex-wrap items-center gap-2">
                    {['Recepción de archivos', 'Preparación de placas', 'Proceso de impresión', 'Terminado y acabado', 'Entrega'].map((step, index, arr) => (
                        <span key={index} className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                {step}
                            </span>
                            {index < arr.length - 1 && (
                                <i className="bx bx-right-arrow-alt text-gray-400"></i>
                            )}
                        </span>
                    ))}
                </div>
            ),
        },
        {
            title: '¿Cómo debe ser el pago?',
            content: (
                <p>
                    Se debe dar un <strong className="text-blue-600">adelanto del 50%</strong> para poder iniciar
                    el trabajo, y el restante se finiquita antes de la entrega.
                </p>
            ),
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-hero py-12 lg:py-20">
            <div className="section-container">
                {/* Header */}
                <header className="mb-12">
                    <h1 className="section-header flex flex-wrap items-center gap-3">
                        Preguntas Frecuentes
                        <span className="px-4 py-1 bg-blue-100 text-blue-700 text-xl font-bold rounded-full">
                            FAQ
                        </span>
                    </h1>
                </header>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Accordion */}
                    <div>
                        <Accordion items={faqItems} />
                    </div>

                    {/* Contact Card */}
                    <div className="card overflow-hidden">
                        <div className="aspect-video lg:aspect-auto lg:h-64 overflow-hidden">
                            <img
                                src={manWorking}
                                alt="Equipo de trabajo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                ¿Tienes alguna pregunta en específico?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Nuestro equipo está listo para ayudarte con cualquier duda sobre nuestros servicios.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="tel:2222488993"
                                    className="btn-primary flex-1 justify-center inline-flex items-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    Te contactamos
                                </a>
                                <a
                                    href="https://wa.me/522222488993"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary flex-1 justify-center inline-flex items-center !bg-green-600 !text-white hover:!bg-green-700 !border-green-600"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;