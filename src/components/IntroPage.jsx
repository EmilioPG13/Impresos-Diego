import 'flowbite';
import 'animate.css';
import abstract from '../images/icons/pattern.png';

function IntroPage() {
    const eyeImage = new URL('../images/things/eye.JPG', import.meta.url).href;

    return (
        <main className='m-24 ml-64 w-full'>
            {/* Left side of the page */}
            <section>
                <header>
                    <h6 className='text-base text-slate-500 border-l-4 border-red-700 pl-3'> Más de 35 años de experiencia</h6>
                    <h1 className='text-6xl my-4'>Calidad Poblana</h1>
                </header>

                <article className='mt-20 mb-20 text-2xl'>
                    <p>Somos una imprenta con base en Puebla que se </p>
                    <p>especializa en soluciones de impresión Offset.</p>
                    <p>Ofrecemos una variedad de servicios, que incluyen</p>
                    <p> la impresión de revistas, catálogos, libros de texto,</p>
                    <p>manteletas, folletos, entre otros formatos.</p>
                </article>

                <nav>
                    <ul className='list-disc pl-4 text-lg'>
                        <li>Conocimiento del mercado</li>
                        <li>Dominio Tecnico en la impresion Offset</li>
                        <li>Flexibilidad en la oferta de servicios</li>
                        <li>Adaptabilidad al cliente en diversos formatos de impresion</li>
                    </ul>
                </nav>

                <footer className='mt-12'>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-slate-600 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-100 rounded-md group-hover:bg-opacity-0">
                            Conoce más
                        </span>
                    </button>
                </footer>
            </section>

            {/* RightSide of the page */}
            <aside>
                <figure>
                    <img src={abstract} alt="Abstract image" className='w-28 h-28' />
                </figure>

                <figure className="aspect-w-16 aspect-h-9 mt-4">
                    <iframe
                        className="w-1/4 h-96"
                        src="https://www.youtube.com/embed/pNZb7CXUjs0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </figure>

                <figure>
                    <img src={eyeImage} alt="Eye image" className='w-80 h-80' />
                </figure>
            </aside>
        </main>
    )
}

export default IntroPage;