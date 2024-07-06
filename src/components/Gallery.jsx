import 'animate.css';

function Gallery() {
    return (
        <main>
            <header className="flex flex-col items-center justify-center text-center mb-12">
                <h6 className='text-base text-slate-500 border-l-4 border-red-700 pl-3'>Más de 35 años de experiencia</h6>
                <h1 className='text-6xl my-4'>Nuestros trabajos</h1>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-16">
                <div style={{ animationDelay: '0.5s' }}>
                    <img className="h-auto max-w-full rounded-lg animate__animated animate__fadeIn" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                </div>
                <div style={{ animationDelay: '1s' }}>
                    <img className="h-auto max-w-full rounded-lg animate__animated animate__fadeIn" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                </div>
                <div style={{ animationDelay: '1.5s' }}>
                    <img className="h-auto max-w-full rounded-lg animate__animated animate__fadeIn" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                </div>
                <div style={{ animationDelay: '2s' }}>
                    <img className="h-auto max-w-full rounded-lg animate__animated animate__fadeIn" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                </div>
                <div style={{ animationDelay: '2.5s' }}>
                    <img className="h-auto max-w-full rounded-lg animate__animated animate__fadeIn" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                </div>
                <div style={{ animationDelay: '3s' }}>
                    <img className="h-auto max-w-full rounded-lg animate__animated animate__fadeIn" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                </div>
            </div>
        </main>



    );
}

export default Gallery;