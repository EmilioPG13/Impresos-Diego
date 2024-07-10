import { useEffect} from 'react';
//Libraries
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'flowbite/dist/flowbite.css';


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
                <div data-aos='fade-in' data-aos-delay='250'>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                </div>
                <div data-aos='fade-in' data-aos-delay='500'>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                </div>
                <div data-aos='fade-in' data-aos-delay='750'>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                </div>
                <div data-aos='fade-in' data-aos-delay='1000'>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                </div>
                <div data-aos='fade-in' data-aos-delay='1250'>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                </div>
                <div data-aos='fade-in' data-aos-delay='2000'>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                </div>
            </div>
        </main>



    );
}

export default Gallery;