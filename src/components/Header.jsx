import logo from '../images/ID-logo.png';

function Header() {
    return (
        <header className="w-full relative">
            <div className='flex mb-1'>
                {/* Adjusted image size for better visibility */}
                <img src={logo} className="w-20 h-20 ml-3" alt="Logo" />
                <ul className="outline outline-blue-600">
                    {/* Consider using <Link> or <NavLink> from react-router-dom if you're using React Router */}
                    <li><a href="#" className="text-white text-2xl font-bold">Inicio</a></li>
                    <li><a href="#" className="text-white text-2xl font-bold">Nosotros</a></li>
                    <li><a href="#" className="text-white text-2xl font-bold">Servicios</a></li>
                    <li><a href="#" className="text-white text-2xl font-bold">Galeria</a></li>
                    <li><a href="#" className="text-white text-2xl font-bold">Contacto</a></li>
                    <li><a href="#" className="text-white text-2xl font-bold">Preguntas frecuentes</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;