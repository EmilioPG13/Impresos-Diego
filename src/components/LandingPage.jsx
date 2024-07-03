import frontpageImg from '../images/frontpage-img.png'; // Adjust the path as necessary

function LandingPage() {
    return (
        <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${frontpageImg})`}}> 
            <div className="flex flex-col items-center justify-center h-full w-full bg-black bg-opacity-50">
                <p className="text-white text-lg">Más de 35 años de experiencia</p>
                <h1 className="text-white text-8xl font-bold">Impresos Diego</h1>
            </div>
        </div>
    )
}

export default LandingPage;