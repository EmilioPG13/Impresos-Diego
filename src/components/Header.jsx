import logo from '../images/ID-logo.png';
import tiktok from '../images/tiktok.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import search from '../images/search-icon.png';


function Header() {
    return (
        <header className="w-full relative border-t-8 border-blue-300">
            {/* Parent container for left and right sides */}
            <div className='flex justify-between items-center w-full'>
                {/* Left side of the header */}
                <div className='flex mb-1'>
                    <a><img src={logo} className="w-20 h-20 m-3" alt="Logo" /></a>
                    <ul className='display: flex m-9 ml-16 gap-10'>
                        <li><a href="#" className="text-sky text-base">Inicio</a></li>
                        <li><a href="#" className="text-sky text-base">Nosotros</a></li>
                        <li><a href="#" className="text-sky text-base">Servicios</a></li>
                        <li><a href="#" className="text-sky text-base">Galeria</a></li>
                        <li><a href="#" className="text-sky text-base">Contacto</a></li>
                        <li><a href="#" className="text-sky text-base">Preguntas frecuentes</a></li>
                    </ul>
                </div>

                {/* Right side of the header */}
                <section>
                    <div className='flex justify-between'>
                        <div className='flex justify-end space-x-4 m-5'>
                            <a href='https://www.tiktok.com/@idmx.printhouse?_t=8nUzmUyoKur&_r=1' className='text-lg'>
                                <img src={tiktok} className="w-9 h-9" />
                            </a>
                            <a href='https://www.instagram.com/impresosdiego?igsh=MXZpcnM1aTJoNTNpMQ==' className='text-lg'>
                                <img src={instagram} className="w-9 h-9" />
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=61560933800832&mibextid=LQQJ4d' className='text-lg'>
                                <img src={facebook} className="w-9 h-9" />
                            </a>
                        </div>

                        <div className='flex flex-col space-y-0 m-2 mr-6 mb-5 border-r-2 border-gray-300 pr-6'>
                            <p className='text-gray-500 text-sm'>Horario de atencion</p>
                            <p className='text-sm'>9:00am a 6:00pm</p>
                            <p className='text-sm'>222 248 8993</p>
                        </div>

                        <div>
                            <a className='flex justify-end'>
                                <img src={search} className="w-7 h-7 my-5 mr-9" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
}

export default Header;