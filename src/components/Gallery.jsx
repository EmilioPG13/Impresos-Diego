import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import productImage1 from '../images/product/Grapa.jpg';
import productImage2 from '../images/product/Hot-Melt.jpg';
import productImage3 from '../images/product/manteletas-de-papel-para-restaurantes.jpg';
import productImage4 from '../images/product/Polipticos.jpg';
import productImage5 from '../images/product/Tríptico.jpg';
import productImage6 from '../images/product/Printer.jpg';

const galleryItems = [
    { image: productImage1, title: 'Revistas a grapa', category: 'Encuadernado' },
    { image: productImage2, title: 'Libros/Revistas Hot-melt', category: 'Encuadernado' },
    { image: productImage3, title: 'Manteletas', category: 'Promocional' },
    { image: productImage4, title: 'Polípticos', category: 'Plegados' },
    { image: productImage5, title: 'Trípticos', category: 'Plegados' },
    { image: productImage6, title: 'Impresos Diego©', category: 'Nuestra empresa' },
];

function Gallery() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <section className="py-16 lg:py-24 bg-white">
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
                        Nuestros <span className="text-gradient">trabajos</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Descubre la calidad y variedad de nuestros productos impresos
                    </p>
                </header>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                <span className="text-xs font-medium text-blue-300 uppercase tracking-wider mb-1">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-bold text-white">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Corner Icon */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                <i className="bx bx-expand-alt text-white"></i>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="/servicios"
                        className="btn-primary"
                    >
                        <i className="bx bx-grid-alt bx-sm mr-2"></i>
                        Ver todos los servicios
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Gallery;