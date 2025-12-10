import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Logo image
import logo from '../images/icons/ID-logo.png';

const Header = ({ selectedLink, handleLinkClick }) => {
    // States to manage search bar and hamburger menu
    const [showSearch, setShowSearch] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the search bar
    const toggleSearchBar = () => {
        setShowSearch(prevShowSearch => !prevShowSearch);
    };

    // Function to toggle the hamburger menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Navigation items for DRY code
    const navItems = [
        { path: '/', label: 'Inicio', key: 'Inicio' },
        { path: '/servicios', label: 'Servicios', key: 'Servicios' },
        { path: '/nosotros', label: 'Nosotros', key: 'Nosotros' },
        { path: '/pedido', label: 'Haz tu pedido', key: 'Pedido' },
        { path: '/faq', label: 'FAQ', key: 'Preguntas frecuentes' },
    ];

    return (
        <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm gradient-border-top">
            {/* Main header container */}
            <div className="section-container">
                <div className="flex justify-between items-center py-2">
                    {/* Left side - Logo and Navigation */}
                    <div className="flex items-center">
                        {/* Logo */}
                        <Link
                            to="/"
                            onClick={() => handleLinkClick('Inicio')}
                            className="flex-shrink-0"
                        >
                            <img
                                src={logo}
                                className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform hover:scale-105"
                                alt="Impresos Diego Logo"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex ml-8 xl:ml-12">
                            <ul className="flex items-center gap-6 xl:gap-8">
                                {navItems.map((item) => (
                                    <li key={item.key}>
                                        <Link
                                            to={item.path}
                                            className={`nav-link text-sm xl:text-base ${selectedLink === item.key ? 'text-blue-600 active' : ''}`}
                                            onClick={() => handleLinkClick(item.key)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Right side - Contact info, Search, Menu */}
                    <div className="flex items-center gap-4">
                        {/* Contact Info - Hidden on mobile */}
                        <div className="hidden md:flex flex-col items-end pr-4 border-r border-gray-200">
                            <p className="text-xs text-gray-500">Horario de atención</p>
                            <p className="text-sm font-medium text-gray-700">9:00am - 6:00pm</p>
                            <a href="tel:2222488993" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                <i className="bx bx-phone bx-sm"></i>
                                222 248 8993
                            </a>
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={toggleSearchBar}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Buscar"
                        >
                            <i className="bx bx-search bx-md text-gray-600"></i>
                        </button>

                        {/* Animated Search Bar */}
                        <div className={`
                            absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg
                            overflow-hidden transition-all duration-300 ease-out
                            ${showSearch ? 'max-h-20 py-3' : 'max-h-0 py-0'}
                        `}>
                            <div className="section-container">
                                <div className="relative">
                                    <i className="bx bx-search bx-sm absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    <input
                                        type="text"
                                        className="input-field pl-12"
                                        placeholder="¿Qué estás buscando?"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        >
                            <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} bx-md text-gray-700`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden
                    transition-opacity duration-300
                    ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                onClick={toggleMenu}
            />

            {/* Mobile Sliding Menu */}
            <div className={`
                fixed top-0 left-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 lg:hidden
                transform transition-transform duration-300 ease-out
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <img src={logo} className="h-12 w-12 object-contain" alt="Logo" />
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Cerrar menú"
                    >
                        <i className="bx bx-x bx-md text-gray-600"></i>
                    </button>
                </div>

                {/* Menu Navigation */}
                <nav className="p-4">
                    <ul className="space-y-1">
                        {navItems.map((item) => (
                            <li key={item.key}>
                                <Link
                                    to={item.path}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium
                                        transition-all duration-200
                                        ${selectedLink === item.key
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'}
                                    `}
                                    onClick={() => {
                                        handleLinkClick(item.key);
                                        toggleMenu();
                                    }}
                                >
                                    {item.label}
                                    {selectedLink === item.key && (
                                        <i className="bx bx-check-circle bx-sm ml-auto text-blue-600"></i>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Menu Footer - Social Links */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center mb-3">Síguenos en:</p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://www.tiktok.com/@idmx.printhouse"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-500 transition-colors"
                        >
                            <i className="bxl bxl-tiktok bx-sm"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/impresosdiego"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-colors"
                        >
                            <i className="bxl bxl-instagram bx-sm"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61560933800832"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                        >
                            <i className="bxl bxl-facebook-circle bx-sm"></i>
                        </a>
                    </div>

                    {/* Mobile Contact */}
                    <a
                        href="tel:2222488993"
                        className="mt-4 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                    >
                        <i className="bx bx-phone bx-sm"></i>
                        Llamar: 222 248 8993
                    </a>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    selectedLink: PropTypes.string,
    handleLinkClick: PropTypes.func.isRequired,
};

export default Header;