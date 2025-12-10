// Feature icons for acabados - keeping custom brand imagery
import encuadernado from '../images/icons/encuadernado.png';
import plastificado from '../images/icons/plastificado.png';
import barniz from '../images/icons/barniz.png';
import doblez from '../images/icons/doblez.png';

const acabadosItems = [
    {
        icon: encuadernado,
        title: 'Encuadernados',
        description: 'Hot Melt / Grapa / Glueing en frío',
        blurBg: 'bg-blue-100',
    },
    {
        icon: plastificado,
        title: 'Plastificado',
        description: 'Mate / Brillante',
        blurBg: 'bg-purple-100',
    },
    {
        icon: barniz,
        title: 'Barniz',
        description: 'UV a registro y al 100%',
        blurBg: 'bg-cyan-100',
    },
    {
        icon: doblez,
        title: 'Doblez',
        description: 'Precisión en cada pliegue',
        blurBg: 'bg-emerald-100',
    },
];

function Acabados() {
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="section-container">
                {/* Section Header */}
                <header className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-l-4 border-red-600 rounded-r-full mb-6">
                        <i className="bx bx-badge-check text-red-600"></i>
                        <span className="text-sm font-medium text-gray-700">
                            Más de 35 años de experiencia
                        </span>
                    </div>
                    <h2 className="section-header mb-4">
                        <span className="text-gradient">Acabados</span> profesionales
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos una variedad de acabados para darle el toque final perfecto a tus proyectos
                    </p>
                </header>

                {/* Acabados Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {acabadosItems.map((item, index) => (
                        <div
                            key={index}
                            className="card group p-6 text-center hover:shadow-xl flex flex-col justify-center items-center min-h-[280px]"
                        >
                            {/* Icon Container */}
                            <div className="relative mb-6">
                                <div className={`absolute inset-0 ${item.blurBg} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                                <div className="relative w-20 h-20 mx-auto bg-gray-100 rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">
                                {item.description}
                            </p>

                            {/* Hover Arrow */}
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                                    Más información
                                    <i className="bx bx-right-arrow-alt"></i>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Acabados;