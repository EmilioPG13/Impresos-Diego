function Acabados() {
    return (
        <main className="flex justify-center items-center">
            <section className="text-center">
                <header className="text-center mb-12">
                    <div className="inline-block border-l-4 border-red-700">
                        <h6 className='text-base text-slate-500 pl-3'>Más de 35 años de experiencia</h6>
                    </div>
                    <h1 className='text-6xl my-4'>Acabados</h1>
                </header>

                <article className="">
                    {/* Crate a rectangle with rounded corners and a shadow effect in a grey color */}
                    <div className="bg-gray-100 rounded-lg shadow-lg p-4 space-y-5 ">
                        <p className="text-2xl mb-4">Ofrecemos una amplia gama de acabados para tus impresos</p>
                        <p className="text-2xl mb-4">Ofrecemos una amplia gama de acabados para tus impresos</p>
                        <p className="text-2xl mb-4">Ofrecemos una amplia gama de acabados para tus impresos</p>
                        <p className="text-2xl">Ofrecemos una amplia gama de acabados para tus impresos</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Acabados;