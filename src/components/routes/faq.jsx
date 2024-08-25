import { useState } from 'react';
import manWorking from '../../images/people/manWorking.jpg';
import PropTypes from 'prop-types';
// Icons
import whatsapp from '../../images/icons/whatsapp.svg';
import phone from '../../images/icons/phone.svg';

const Accordion = ({ items }) => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (item) => {
        setOpenItem(openItem === item ? null : item);
    };

    return (
        <div id="accordion-open" data-accordion="open" className="ml-5 w-1/2 p-4">
            {items.map((item, index) => (
                <div key={index}>
                    <h2 id={`accordion-open-heading-${index + 1}`}>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                            onClick={() => toggleItem(index)}
                            aria-expanded={openItem === index}
                            aria-controls={`accordion-open-body-${index + 1}`}
                        >
                            <span className="flex items-center">
                                <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                </svg>
                                {item.title}
                            </span>
                            <svg data-accordion-icon className={`w-3 h-3 ${openItem === index ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id={`accordion-open-body-${index + 1}`} className={`${openItem === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300`} aria-labelledby={`accordion-open-heading-${index + 1}`}>
                        <div className="p-5 border border-gray-200 bg-sky-950">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

function FAQ() {
    const faqItems = [
        {
            title: '¿Que es la impresion off-set?',
            content: (
                <>
                    <p className="mb-2 text-gray-300 dark:text-gray-400">La impresión offset, usada para producir grandes volúmenes de materiales impresos, transfiere una imagen de una placa de aluminio a un rodillo de goma y luego al papel o cartón.</p>
                    <p className="text-gray-300 dark:text-gray-400">Es un <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">método indirecto, </a> ya que la imagen de la placa pasa primero al rodillo antes de depositarse en el sustrato.</p>
                </>
            ),
        },
        {
            title: '¿Cuál es el tiempo de entrega?',
            content: (
                <>
                    <p className="mb-2 text-gray-300 dark:text-gray-400">Una vez recibidos y aprobados los archivos los tiempos de entrega son de 5 a 7 días hábiles.
                    </p>
                    <p className="text-gray-300 dark:text-gray-400"> De ser necesario se tendrán que hacer las correcciones que nuestro equipo de diseño haya solicitado.</p>
                </>
            ),
        },
        {
            title: '¿Cuál es el proceso de entrega?',
            content: (
                <>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <span href="#" className="inline-flex items-center text-sm font-medium text-gray-300 md:ms-2 dark:text-gray-400">
                                    Recepcion de<br />archivos
                                </span>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-300 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span href="#" className="ms-1 text-sm font-medium text-gray-300 md:ms-2 dark:text-gray-400">Preparacion<br />de placas</span>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-300 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-300 md:ms-2 dark:text-gray-400">Proceso de<br />impresion</span>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-300 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-300 md:ms-2 dark:text-gray-400">Terminado y<br />acabado</span>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-300 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-300 md:ms-2 dark:text-gray-400">Entrega</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </>
            ),
        },
        {
            title: '¿Cómo debe ser el pago?',
            content: (
                <>
                    <p className="mb-2 text-gray-300 dark:text-gray-400">Se debe dar un adelanto del 50% para poder iniciar el trabajo, y el restante se finiquita antes de la entrega.</p>
                </>
            ),
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <h1 className="p-9 flex items-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Preguntas Frequentes
                <span className="bg-blue-400 text-blue-800 text-2xl font-bold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">FAQ</span>
            </h1>
            <br />
            <div className="flex justify-center items-center">
                <Accordion items={faqItems} />
                <div role="status" className="w-1/2 mr-16 h-auto max-w-lg ms-auto p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-80 mb-4 bg-gray-300 rounded dark:bg-gray-700 overflow-hidden">
                        <img className="w-full h-full object-cover" src={manWorking} alt="image description" />
                    </div>
                    <div className="text-xl font-bold h-2.5 w-auto mb-4 dark:text-gray-600">
                        ¿Tienes alguna pregunta en especifico?
                    </div>
                    <br />
                    <div className="flex items-center mt-4">
                        <button type="button" className="flex items-center justify-between text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Te contactamos
                            <img src={phone} className='h-5 w-5 ml-2' />
                        </button>
                        <button type="button" className="flex items-center justify-between text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Contactanos
                            <img src={whatsapp} className='h-6 w-6 ml-2' />
                        </button>
                    </div>
                </div>
            </div>
            <br />
        </section>
    );
}

export default FAQ;