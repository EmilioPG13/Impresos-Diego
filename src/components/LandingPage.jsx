import frontpageImg from '../images/things/frontpage-img.png';

function LandingPage() {
    return (
        <section
            className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] max-h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${frontpageImg})` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
                <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-2 animate-fade-in-delay">
                    Más de 35 años de experiencia
                </p>
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate__animated animate__fadeInDown">
                    Impresos Diego
                </h1>
            </div>
        </section>
    );
}

export default LandingPage;