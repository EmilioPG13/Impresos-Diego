import 'animate.css';
import abstract from '../images/icons/pattern.png';

function IntroPage() {
    const eyeImage = new URL('../images/things/eye.JPG', import.meta.url).href;

    return (
        <main>
            {/* Left side of the page */}
            <section>
                <header>
                    <h6>Más de 35 años de experiencia</h6>
                    <h1>Calidad Poblana</h1>
                </header>
        
                <article>
                    <p>Somos una imprenta con base en Puebla que se especializa en soluciones de impresión Offset. Ofrecemos una variedad de servicios, que incluyen la impresión de revistas, catálogos, libros de texto, manteletas, folletos, entre otros formatos.</p>
                </article>
        
                <nav>
                    <ul>
                        <li>Conocimiento del mercado</li>
                        <li>Dominio Tecnico en la impresion Offset</li>
                        <li>Flexibilidad en la oferta de servicios</li>
                        <li>Adaptabilidad al cliente en diversos formatos de impresion</li>
                    </ul>
                </nav>
        
                <footer>
                    <button>Conoce más</button>
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