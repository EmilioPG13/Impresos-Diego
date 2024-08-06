import { useState } from 'react';
import manWorking from '../../images/people/manWorking.jpg';

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
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
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
                    <div id={`accordion-open-body-${index + 1}`} className={`${openItem === index ? '' : 'hidden'}`} aria-labelledby={`accordion-open-heading-${index + 1}`}>
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
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
                    <p className="mb-2 text-gray-500 dark:text-gray-400">La impresión offset, usada para producir grandes volúmenes de materiales impresos, transfiere una imagen de una placa de aluminio a un rodillo de goma y luego al papel o cartón.</p>
                    <p className="text-gray-500 dark:text-gray-400">Es un <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">método indirecto, </a> ya que la imagen de la placa pasa primero al rodillo antes de depositarse en el sustrato.</p>
                </>
            ),
        },
        {
            title: '¿Por qué es mejor la impresion offset que la digital?',
            content: (
                <>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </>
            ),
        },
        {
            title: '¿Cuál es el proceso de entrega?',
            content: (
                <>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <>
            <h1 className="m-9 flex items-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                Preguntas Frequentes
                <span className="bg-blue-400 text-blue-800 text-2xl font-bold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">FAQ</span>
            </h1>
            <br />
            <div className="flex justify-center items-center">
                <Accordion items={faqItems} />
                <div role="status" className="w-1/2 mr-12 h-auto max-w-lg ms-auto p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700 overflow-hidden">
                        <img className="w-full h-full object-cover" src={manWorking} alt="image description" />
                    </div>
                    <div className="text-xl font-bold dark:text-gray-600 h-2.5 w-auto">
                        ¿Tienes alguna pregunta en especifico?
                    </div>
                    <br />
                    <div className="flex items-center mt-4">
                        <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Contactanos</button>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default FAQ;