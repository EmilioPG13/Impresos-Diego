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
                        <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
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
                                    className="btn-primary flex-1 justify-center"
                                >
                                    <i className="bx bx-phone bx-sm mr-2"></i>
                                    Te contactamos
                                </a>
                                <a
                                    href="https://wa.me/522222488993"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary flex-1 justify-center !bg-green-600 !text-white hover:!bg-green-700 !border-green-600"
                                >
                                    <i className="bxl bxl-whatsapp bx-sm mr-2"></i>
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