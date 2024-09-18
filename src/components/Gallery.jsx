import { useEffect } from 'react';
//Libraries
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'flowbite/dist/flowbite.css';

// Images
import productImage1 from '../images/product/Grapa.jpg';
import productImage2 from '../images/product/Hot-Melt.jpg';
import productImage3 from '../images/product/manteletas-de-papel-para-restaurantes.jpg';
import productImage4 from '../images/product/Polipticos.jpg';
import productImage5 from '../images/product/Tríptico.jpg';
import productImage6 from '../images/product/Printer.jpg';


function Gallery() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);


    return (
        <main>
            <header className="flex flex-col items-center justify-center text-center mb-12">
                <h6 className='text-base text-slate-500 border-l-4 border-red-700 pl-3'>Más de 35 años de experiencia</h6>
                <h1 className='text-6xl my-4'>Nuestros trabajos</h1>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-16">
                <div className="relative w-full h-40 md:h-64" data-aos='fade-in' data-aos-delay='250' data-aos-once='true'>
                    <img className="w-full h-full object-cover rounded-lg" src={productImage1} alt="" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <span className="text-white text-lg">Revistas a grapa</span>
                    </div>
                </div>
                <div className="relative w-full h-40 md:h-64" data-aos='fade-in' data-aos-delay='250' data-aos-once='true'>
                    <img className="w-full h-full object-cover rounded-lg" src={productImage2} alt="" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <span className="text-white text-lg">Libros/Revistas Hot-melt</span>
                    </div>
                </div>
                <div className="relative w-full h-40 md:h-64" data-aos='fade-in' data-aos-delay='250' data-aos-once='true'>
                    <img className="w-full h-full object-cover rounded-lg" src={productImage3} alt="" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <span className="text-white text-lg">Manteletas</span>
                    </div>
                </div>
                <div className="relative w-full h-40 md:h-64" data-aos='fade-in' data-aos-delay='250' data-aos-once='true'>
                    <img className="w-full h-full object-cover rounded-lg" src={productImage4} alt="" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <span className="text-white text-lg">Polípticos</span>
                    </div>
                </div>
                <div className="relative w-full h-40 md:h-64" data-aos='fade-in' data-aos-delay='250' data-aos-once='true'>
                    <img className="w-full h-full object-cover rounded-lg" src={productImage5} alt="" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <span className="text-white text-lg">Trípticos</span>
                    </div>
                </div>
                <div className="relative w-full h-40 md:h-64" data-aos='fade-in' data-aos-delay='250' data-aos-once='true'>
                    <img className="w-full h-full object-cover rounded-lg" src={productImage6} alt="" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <span className="text-white text-lg">Impresos Diego©</span>
                    </div>
                </div>
            </div>
        </main>



    );
}

export default Gallery;