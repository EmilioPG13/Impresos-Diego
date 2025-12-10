import { Link } from 'react-router-dom';
import Logo from '../images/icons/ID-logo.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        recursos: [
            { label: 'WhatsApp', href: 'https://wa.me/522222488993', icon: 'bxl-whatsapp' },
            { label: 'Contáctanos', href: '/pedido', isLink: true, icon: 'bx-envelope' },
        ],
        redes: [
            { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100067784121082', icon: 'bxl-facebook-circle' },
            { label: 'Instagram', href: 'https://www.instagram.com/impresosdiego/', icon: 'bxl-instagram-alt' },
            { label: 'TikTok', href: 'https://www.tiktok.com/@impresos_diego', icon: 'bxl-tiktok' },
        ],
        legal: [
            { label: 'Política de Privacidad', href: '#' },
            { label: 'Términos y Condiciones', href: '#' },
        ],
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="section-container py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-4">
                            <img
                                src={Logo}
                                className="h-16 w-16 object-contain bg-white rounded-xl p-2"
                                alt="Impresos Diego Logo"
                            />
                        </Link>
                        <p className="text-sm text-gray-400 mb-4 max-w-xs">
                            Más de 35 años imprimiendo calidad. Tu imprenta de confianza en Puebla.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <i className="bx bx-map text-blue-400"></i>
                            <span>Puebla, México</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-2">
                            <i className="bx bx-phone text-blue-400"></i>
                            <a href="tel:2222488993" className="hover:text-white transition-colors">
                                222 248 8993
                            </a>
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Recursos
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.recursos.map((link, index) => (
                                <li key={index}>
                                    {link.isLink ? (
                                        <Link
                                            to={link.href}
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <i className={`bx ${link.icon}`}></i>
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <i className={`bxl ${link.icon}`}></i>
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Síguenos
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.redes.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <i className={`bxl ${link.icon}`}></i>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="section-container py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © {currentYear} Impresos Diego™. Todos los derechos reservados.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=100067784121082"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                                aria-label="Facebook"
                            >
                                <i className="bxl bxl-facebook-circle"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/impresosdiego/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all"
                                aria-label="Instagram"
                            >
                                <i className="bxl bxl-instagram-alt"></i>
                            </a>
                            <a
                                href="https://www.tiktok.com/@impresos_diego"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-pink-600 hover:text-white transition-all"
                                aria-label="TikTok"
                            >
                                <i className="bxl bxl-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;