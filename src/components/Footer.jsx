import Logo from '../images/icons/ID-logo.png'

function Footer () {
    return (
    <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Compañia</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">Acerca de</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Centro de Marca</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Centro de ayuda</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Chat WhatsApp</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.tiktok.com/@idmx.printhouse?_t=8nUzmUyoKur&_r=1" className="hover:underline">Tik-tok</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.facebook.com/profile.php?id=61560933800832&mibextid=LQQJ4d" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="/contacto" className="hover:underline">Contactanos</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Politica de privacidad</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licencias</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terminos &amp; Condiciones</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={Logo} alt="Company Logo" className='w-32 pt-8' />
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;