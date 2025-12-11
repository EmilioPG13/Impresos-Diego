import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MobileMenu from './MobileMenu';
// Logo image
import logo from '../images/icons/ID-logo.png';

const Header = ({ handleLinkClick }) => {
    // States to manage search bar and hamburger menu
    const [showSearch, setShowSearch] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Dark mode state - initialize from localStorage or system preference
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Sync dark mode with DOM and localStorage
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Toggle dark mode
    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    // Get current location to highlight active nav item
    const location = useLocation();

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
        { path: '/', label: 'Inicio' },
        { path: '/servicios', label: 'Servicios' },
        { path: '/nosotros', label: 'Nosotros' },
        { path: '/pedido', label: 'Haz tu pedido' },
        { path: '/faq', label: 'FAQ' },
    ];

    // Check if a nav item is active based on current path
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

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
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            className={`nav-link text-sm xl:text-base ${isActive(item.path) ? 'text-blue-600 active' : ''}`}
                                            onClick={() => handleLinkClick(item.label)}
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
                        <div className="hidden md:flex flex-col items-end pr-3 border-r border-gray-200 text-right leading-tight">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wide">Horario</p>
                            <p className="text-xs text-gray-600">9:00am - 6:00pm</p>
                            <a href="tel:2222488993" className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-0.5">
                                <i className="bx bx-phone text-sm"></i>
                                222 248 8993
                            </a>
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={toggleSearchBar}
                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Buscar"
                        >
                            <i className="bx bx-search text-xl text-gray-600"></i>
                        </button>

                        {/* Dark Mode Toggle Button */}
                        <button
                            onClick={toggleDarkMode}
                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                        >
                            {isDarkMode ? (
                                /* Sun icon - shown in dark mode, click for light */
                                <svg className="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 2v2"></path>
                                    <path d="M12 20v2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="M2 12h2"></path>
                                    <path d="M20 12h2"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </svg>
                            ) : (
                                /* Moon icon - shown in light mode, click for dark */
                                <svg className="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg>
                            )}
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
            {/* Mobile Menu Component */}
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={toggleMenu}
                handleLinkClick={handleLinkClick}
            />
        </header>
    );
};

Header.propTypes = {
    handleLinkClick: PropTypes.func.isRequired,
};

export default Header;