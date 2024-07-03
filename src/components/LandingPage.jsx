import frontpageImg from '../images/things/frontpage-img.png'; // Adjust the path as necessary

function LandingPage() {
    return (
        <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${frontpageImg})`}}> 
            <div className="flex flex-col items-center justify-center h-full w-full bg-black bg-opacity-50">
                <p className="text-white text-lg animate-fade-in-delay">Más de 35 años de experiencia</p>
                <h1 className="text-white text-8xl font-bold animate__animated animate__fadeInDown">Impresos Diego</h1>
            </div>
        </div>
    )
}

export default LandingPage;