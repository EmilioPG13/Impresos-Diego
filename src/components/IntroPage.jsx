import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'flowbite';
import 'animate.css';

const IntroPage = ({ handleLinkClick }) => {
    // const eyeImage = new URL('../images/things/eye.JPG', import.meta.url).href;

    return (
        <main className='flex p-24 pl-64 '>
            {/* Left side of the page */}
            <section className='flex-grow'>
                <header>
                    <h6 className='text-base text-slate-500 border-l-4 border-red-700 pl-3'> Más de 35 años de experiencia</h6>
                    <h1 className='text-6xl my-4'>Calidad Poblana</h1>
                </header>

                <article className='mt-20 mb-20 text-2xl'>
                    <p>
                        Somos una imprenta en Puebla con más de 35 años de experiencia.<br />
                        Hacemos revistas, catálogos, trípticos y muchos otros formatos.<br />
                        Con clientes en varios estados de la República, nos mantenemos<br />
                        como una opción confiable, vigente y de alta calidad en el<br />
                        mercado para dar vida a los proyectos de nuestros clientes.
                    </p>
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
                    <button 
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-cyan-500 hover:to-blue-500 hover:text-white dark:text-slate-600 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                        onClick={() => handleLinkClick('Nosotros')}
                    >
                        <Link 
                            to="/nosotros" 
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-100 rounded-md group-hover:bg-opacity-0"
                        >
                            Conoce más
                        </Link>
                    </button>
                </footer>
            </section>



            {/* RightSide of the page */}
                        <aside className='flex-grow flex flex-col justify-between w-[50rem] h-auto pt-28'>
                <div>
                    <figure className="flex justify-center">
                        <iframe
                            className="w-5/6 h-96"
                            src="https://www.youtube.com/embed/aH_Jw_9sF10"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </figure>
                </div>
            </aside>
        </main>
    );
};

IntroPage.propTypes = {
    handleLinkClick: PropTypes.func.isRequired,
};

export default IntroPage;