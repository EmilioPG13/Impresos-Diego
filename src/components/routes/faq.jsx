import manWorking from '../../images/people/manWorking.jpg';

function FAQ() {
    return (
        <>
            <h1 className="m-6 flex items-center text-5xl font-extrabold dark:text-gray-500">Preguntas Frequentes<span className="bg-blue-400 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">FAQ</span></h1>
            <br />
            <div role="status" className="mr-12 h-auto max-w-lg ms-auto p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700">
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
            <br />
        </>
    );
}

export default FAQ;