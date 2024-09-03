import { useState } from 'react';
import { Link } from 'react-router-dom';
//Images and icons
import logo from '../images/icons/ID-logo.png';
import tiktok from '../images/icons/tiktok.png';
import instagram from '../images/icons/instagram.png';
import facebook from '../images/icons/facebook.png';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';


function Header() {
    // States to manage search bar, menu focus, hamburger menu
    const [showSearch, setShowSearch] = useState(false);
    const [selectedLink, setSelectedLink] = useState('Inicio');
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // Function to toggle the search bar
    const toggleSearchBar = () => {
        setShowSearch(prevShowSearch => !prevShowSearch);
    };

    // Function to update the selected link
    const handleLinkClick = (linkName) => {
        setSelectedLink(linkName);
    };

    // Function to toggle the hamburger menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full relative gradient-border-top ">
            {/* Parent container for left and right sides */}
            <div className='flex justify-between items-center py-1'>
                {/* Left side of the header */}
                <div className='flex mb-1'>
                    <h1>
                        <button onClick={() => handleLinkClick('Inicio')} style={{ cursor: 'pointer' }}>
                            <img src={logo} className="w-16 m-5 mb-0 ml-4" alt="Logo" />
                        </button>
                    </h1>

                    {/* Navigation Menu - hidden on small screens, visible on lg screens and up */}
                    <nav className='hidden lg:flex'>
                        <ul className='flex m-8 mb-0 gap-10 lg:gap-5 lg:ml-4 xl:gap-10 xl:ml-10 mx-auto'>
                            <li>
                                <Link to='/' className="text-sky text-base" onClick={() => handleLinkClick('Inicio')}>
                                    Inicio
                                    {selectedLink === 'Inicio' && (
                                        <span className="animate__animated animate__fadeIn border-b-2 border-blue-500 pb-1 block"></span>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link to='/servicios' className="text-sky text-base" onClick={() => handleLinkClick('Servicios')}>
                                    Servicios
                                    {selectedLink === 'Servicios' && (
                                        <span className="animate__animated animate__fadeIn border-b-2 border-blue-500 pb-1 block"></span>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link to='/nosotros' className="text-sky text-base" onClick={() => handleLinkClick('Nosotros')}>
                                    Nosotros
                                    {selectedLink === 'Nosotros' && (
                                        <span className="animate__animated animate__fadeIn border-b-2 border-blue-500 pb-1 block"></span>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link to='/contacto' className="text-sky text-base" onClick={() => handleLinkClick('Contacto')}>
                                    Contacto
                                    {selectedLink === 'Contacto' && (
                                        <span className="animate__animated animate__fadeIn border-b-2 border-blue-500 pb-1 block"></span>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link to='/faq' className="text-sky text-base" onClick={() => handleLinkClick('Preguntas frequentes')}>
                                    FAQ
                                    {selectedLink === 'Preguntas frequentes' && (
                                        <span className="animate__animated animate__fadeIn border-b-2 border-blue-500 pb-1 block"></span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Right side of the header - hidden on small screens */}
                <section>
                    <div className='flex justify-between'>
                        {/* Social Media Icons - Correctly hidden on screens smaller than 768px */}
                        <div className='hidden md:flex justify-end space-x-4 m-6 pt-1'>
                            <a href='https://www.tiktok.com/@idmx.printhouse?_t=8nUzmUyoKur&_r=1' className='text-lg'>
                                <img src={tiktok} className="w-7 h-7 hover:scale-105 hover:bg-fuchsia-400 rounded-full" />
                            </a>
                            <a href='https://www.instagram.com/impresosdiego?igsh=MXZpcnM1aTJoNTNpMQ==' className='text-lg'>
                                <img src={instagram} className="w-7 h-7 hover:scale-105 hover:bg-rose-400 rounded-full" />
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=61560933800832&mibextid=LQQJ4d' className='text-lg'>
                                <img src={facebook} className="w-7 h-7 hover:scale-105 hover:bg-blue-400 rounded-full" />
                            </a>
                        </div>

                        {/* Contact Info - Correctly hidden on screens smaller than 768px */}
                        <div className='hidden md:flex flex-col space-y-0 mt-4 mr-5 pr-4 border-r-2 border-gray-300 h-14'>
                            <p className='text-gray-500 text-xs'>Horario de atencion</p>
                            <p className='text-xs'>9:00am a 6:00pm</p>
                            <p className='text-xs'>222 248 8993</p>
                        </div>

                        {/* These elements are visible on all screen sizes */}
                        <div className='flex'>
                            <button onClick={toggleSearchBar}>
                                <MagnifyingGlassIcon className="w-7 h-7 mb-2 mr-6 mt-3 p-0 cursor-pointer" />
                            </button>

                            {/* Render search bar conditionally with transition */}
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showSearch ? 'max-w-xs' : 'max-w-0'} ml-0 mr-4 pt-5`}>
                                <input type='text' className={`p-2 my-5npm border rounded-full focus:outline-none w-full opacity-0 transition-opacity duration-500 ${showSearch ? 'opacity-100' : 'opacity-0'}`} placeholder='Buscar...' />
                            </div>
                        </div>

                        {/* Hamburger menu - visible on all screen sizes */}
                        <button className='lg:hidden mr-6 pt-1' onClick={toggleMenu}>
                            <Bars3Icon className='w-8 h-8' />
                        </button>
                    </div>
                </section>
            </div>

            {/* Mobile Sliding Menu - shown when isMenuOpen is true */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-slate-400 bg-opacity-80 z-40"></div>
            )}
            <div className={`fixed top-0 left-0 lg:hidden h-full w-2/4 border-t-4 border-blue-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transform transition-transform duration-300 ease-in-out bg-gray-100 z-50`}>
                <div className='flex justify-center mt-6'>
                    <button>
                        <img src={logo} className="h-24 w-24 " alt="Logo" />
                    </button>
                </div>
                <div className='absolute top-0 right-0'>
                    <button onClick={toggleMenu} className='p-2'>
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
                <div className='my-4 mt-8 mx-4 border-t border-blue-400'></div>
                <ul className='flex flex-col items-center space-y-5 mt-9'>
                    <li>
                        <a href="#" className={`text-sky text-lg ${selectedLink === 'Inicio' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Inicio')}>Inicio</a>
                    </li>
                    <li>
                        <a href="#" className={`text-sky text-lg ${selectedLink === 'Servicios' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Servicios')}>Servicios</a>
                    </li>
                    <li>
                        <a href="#" className={`text-sky text-lg ${selectedLink === 'Galeria' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Galeria')}>Nosotros</a>
                    </li>
                    <li>
                        <a href="#" className={`text-sky text-lg ${selectedLink === 'Contacto' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Contacto')}>Contacto</a>
                    </li>
                    <li>
                        <a href="#" className={`text-sky text-lg ${selectedLink === 'Preguntas frecuentes' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Preguntas frecuentes')}>FAQ</a>
                    </li>
                </ul>
                <div className='my-4 mt-8 mx-4 border-t border-blue-400'></div>
                <p className='text-sm flex justify-center'>Siguenos en:</p>
                <div className='flex justify-center space-x-4 m-5'>
                    <a href='https://www.tiktok.com/@idmx.printhouse?_t=8nUzmUyoKur&_r=1' className='text-lg'>
                        <img src={tiktok} className="w-7 h-7 hover:scale-105 hover:bg-fuchsia-400 rounded-full" />
                    </a>
                    <a href='https://www.instagram.com/impresosdiego?igsh=MXZpcnM1aTJoNTNpMQ==' className='text-lg'>
                        <img src={instagram} className="w-7 h-7 hover:scale-105 hover:bg-rose-400 rounded-full" />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=61560933800832&mibextid=LQQJ4d' className='text-lg'>
                        <img src={facebook} className="w-7 h-7 hover:scale-105 hover:bg-blue-400 rounded-full" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;