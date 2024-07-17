import 'animate.css';

// Images
import encuadernado from '../images/icons/encuadernado.png'
import plastificado from '../images/icons/plastificado.png'
import barniz from '../images/icons/barniz.png'
import doblez from '../images/icons/doblez.png'

function Acabados() {
    return (
        <main className="flex justify-center items-center mb-28">
            <section className="text-center">
                <header className="text-center mb-14">
                    <div className="inline-block border-l-4 border-red-700">
                        <h6 className='text-base text-slate-500 pl-3'>Más de 35 años de experiencia</h6>
                    </div>
                    <h1 className='text-6xl my-4'>Acabados</h1>
                </header>

                <article>
                    {/* Create a rectangle with rounded corners and a shadow effect in a grey color */}
                    <div className="flex items-center justify-between bg-gray-100 rounded-lg shadow-lg p-4 mb-5">
                        <img src={encuadernado} alt="Icon" className="w-1/12 rounded-lg mr-4" />
                        <p className="text-2xl flex-grow text-center">Encuadernados:
                            <br />
                            Hot Melt / Grapa / Glueing en frio
                        </p>
                    </div>
                    <div className="flex items-center justify-between bg-gray-100 rounded-lg shadow-lg p-4 mb-5">
                        <img src={plastificado} alt="Icon" className="w-1/12 rounded-lg mr-4" />
                        <p className="text-2xl flex-grow text-center">Plastificado:
                            <br />
                            Mate / Brillante
                        </p>
                    </div>
                    <div className="flex items-center justify-between bg-gray-100 rounded-lg shadow-lg p-4 mb-5">
                        <img src={barniz} alt="Icon" className="w-1/12 rounded-lg mr-4" />
                        <p className="text-2xl flex-grow text-center">Barniz:
                            <br />
                            UV a registro y al 100%
                        </p>
                    </div>
                    <div className="flex items-center justify-between bg-gray-100 rounded-lg shadow-lg p-4">
                        <img src={doblez} alt="Icon" className="w-1/12 rounded-lg mr-4" />
                        <p className="text-2xl flex-grow text-center">Doblez</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Acabados;