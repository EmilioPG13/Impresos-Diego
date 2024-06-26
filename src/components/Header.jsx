import { useState } from 'react';
//Images and icons
import logo from '../images/ID-logo.png';
import tiktok from '../images/tiktok.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import search from '../images/search-icon.png';


function Header() {
    // States to manage search bar, menu focus
    const [showSearch, setShowSearch] = useState(false);
    const [selectedLink, setSelectedLink] = useState('Inicio'); // [1

    // Function to toggle the search bar
    const toggleSearchBar = () => {
        setShowSearch(prevShowSearch => !prevShowSearch);
    };

    // Function to update the selected link
    const handleLinkClick = (linkName) => {
        setSelectedLink(linkName);
    };

    return (
        <header className="w-full relative border-t-4 border-blue-300">
            {/* Parent container for left and right sides */}
            <div className='flex justify-between items-center'>
                {/* Left side of the header */}
                <div className='flex mb-1'>
                    <a onClick={() => handleLinkClick('Inicio')} style={{ cursor: 'pointer' }}>
                        <img src={logo} className="w-20 h-20 m-3" alt="Logo" />
                    </a>
                    <ul className='flex m-9 ml-16 gap-10'>
                        <li>
                            <a href="#" className={`text-sky text-base ${selectedLink === 'Inicio' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Inicio')}>Inicio</a>
                        </li>
                        <li>
                            <a href="#" className={`text-sky text-base ${selectedLink === 'Nosotros' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Nosotros')}>Nosotros</a>
                        </li>
                        <li>
                            <a href="#" className={`text-sky text-base ${selectedLink === 'Servicios' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Servicios')}>Servicios</a>
                        </li>
                        <li>
                            <a href="#" className={`text-sky text-base ${selectedLink === 'Galeria' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Galeria')}>Galeria</a>
                        </li>
                        <li>
                            <a href="#" className={`text-sky text-base ${selectedLink === 'Contacto' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Contacto')}>Contacto</a>
                        </li>
                        <li>
                            <a href="#" className={`text-sky text-base ${selectedLink === 'Preguntas frecuentes' ? 'border-b-2 border-blue-500 pb-1' : ''}`} onClick={() => handleLinkClick('Preguntas frecuentes')}>Preguntas frecuentes</a>
                        </li>
                    </ul>
                </div>

                {/* Right side of the header */}
                <section>
                    <div className='flex justify-between'>
                        <div className='flex justify-end space-x-4 m-5'>
                            <a href='https://www.tiktok.com/@idmx.printhouse?_t=8nUzmUyoKur&_r=1' className='text-lg'>
                                <img src={tiktok} className="w-9 h-9 hover:scale-105 hover:bg-fuchsia-400 rounded-full" />
                            </a>
                            <a href='https://www.instagram.com/impresosdiego?igsh=MXZpcnM1aTJoNTNpMQ==' className='text-lg'>
                                <img src={instagram} className="w-9 h-9 hover:scale-105 hover:bg-rose-400 rounded-full" />
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=61560933800832&mibextid=LQQJ4d' className='text-lg'>
                                <img src={facebook} className="w-9 h-9 hover:scale-105 hover:bg-blue-400 rounded-full" />
                            </a>
                        </div>

                        <div className='flex flex-col space-y-0 m-2 mr-6 mb-5 border-r-2 border-gray-300 pr-6'>
                            <p className='text-gray-500 text-sm'>Horario de atencion</p>
                            <p className='text-sm'>9:00am a 6:00pm</p>
                            <p className='text-sm'>222 248 8993</p>
                        </div>

                        <div className='flex'>
                            <a onClick={toggleSearchBar}>
                                <img src={search} className="w-7 h-7 my-6 mr-6 cursor-pointer" />
                            </a>

                            {/* Render search bar conditionally with transition*/}
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showSearch ? 'max-w-xs' : 'max-w-0'} ml-0 mr-4`}>
                                <input type='text' className={`p-2 my-4 border rounded-full focus:outline-none w-full opacity-0 transition-opacity duration-500 ${showSearch ? 'opacity-100' : 'opacity-0'}`} placeholder='Buscar...' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
}

export default Header;