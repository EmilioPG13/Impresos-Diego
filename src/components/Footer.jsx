import Logo from '../images/icons/ID-logo.png'

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <img src={Logo} className="h-20 me-3" alt="Logo" />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Recursos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="" className="hover:underline">WhatsApp</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Contactanos</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Siguenos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/profile.php?id=100067784121082" className="hover:underline ">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/impresosdiego/" className="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@impresos_diego" className="hover:underline">Tik-Tok</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Politica de Privacidad</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terminos &amp; Condiciones</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Licencias</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Impresos Diego™</a>. Todos los derechos reservados.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
                        <a href="https://www.facebook.com/profile.php?id=100067784121082" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target='_blank' rel='noopener noreferrer'>
                            <svg className="w-4 h-4 align-bottom" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.instagram.com/impresosdiego/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target='_blank' rel='noopener noreferrer'>
                            <svg className="w-5 h-5 align-bottom" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="https://www.tiktok.com/@impresos_diego" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target='_blank' rel='noopener noreferrer'>
                            <svg className="w-4 h-4 mt-0.5 align-bottom" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fill="currentColor" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 449.45 515.38">
                                <path fillRule="nonzero" d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z" />
                            </svg>
                            <span className="sr-only">TikTok page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}




export default Footer;