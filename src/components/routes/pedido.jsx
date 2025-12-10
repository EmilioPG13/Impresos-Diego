import InputMask from 'react-input-mask';
import { useState } from 'react';

function Pedido() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        company: '',
        service: '',
        quantity: '',
        email: '',
        message: '',
        agreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('¡Gracias por tu solicitud! Te contactaremos pronto.');
    };

    const serviceOptions = [
        { value: '', label: 'Elige una opción' },
        { value: 'hotmelt', label: 'Libros/Revistas Hot-melt' },
        { value: 'grapa', label: 'Revistas a Grapa' },
        { value: 'tripticos', label: 'Trípticos' },
        { value: 'polipticos', label: 'Polípticos' },
        { value: 'manteletas', label: 'Manteletas' },
        { value: 'otro', label: 'Otro (especificar en mensaje)' },
    ];

    return (
        <section className="min-h-screen bg-gradient-hero py-12 lg:py-20">
            <div className="section-container">
                {/* Header */}
                <header className="max-w-3xl mb-12">
                    <h1 className="section-header mb-6">
                        Cotiza tu proyecto de impresión
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Si estás buscando imprimir revistas o catálogos para tu negocio, institución o proyecto,
                        estás en el lugar correcto. Solo deja tus datos aquí y te enviaremos un presupuesto en 72 horas.
                    </p>
                    <p className="text-gradient font-medium">
                        Ten en cuenta que solo nos encargamos de la impresión, no del diseño.
                        Cuantos más datos y especificaciones proporciones, más acertado será el precio aproximado.
                    </p>
                </header>

                {/* Form */}
                <div className="card p-6 sm:p-8 lg:p-10 max-w-4xl">
                    <form onSubmit={handleSubmit}>
                        {/* Personal Info Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nombre *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="Juan"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Apellidos *
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="Pérez"
                                    required
                                />
                            </div>
                        </div>

                        {/* Contact Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Número de teléfono *
                                </label>
                                <InputMask
                                    mask="(999)-999-9999"
                                    maskChar={null}
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="(xxx)-xxx-xxxx"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                    Empresa (opcional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="Nombre de la empresa"
                                />
                            </div>
                        </div>

                        {/* Service Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                    Trabajo a solicitar *
                                </label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="input-field appearance-none pr-10"
                                        required
                                    >
                                        {serviceOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <i className="bx bx-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                                    Cantidad (mínimo 300) *
                                </label>
                                <input
                                    id="quantity"
                                    name="quantity"
                                    type="number"
                                    min="300"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="300"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Correo electrónico *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="juan@ejemplo.com"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Información adicional
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="input-field resize-none"
                                placeholder="Describe tu proyecto, especificaciones, medidas, acabados deseados, etc."
                            />
                            <div className="flex items-center gap-3 mt-2">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <i className="bx bx-paperclip"></i>
                                    Adjuntar archivo
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <i className="bx bx-image"></i>
                                    Subir imagen
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3 mb-8">
                            <input
                                id="agreed"
                                name="agreed"
                                type="checkbox"
                                checked={formData.agreed}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                required
                            />
                            <label htmlFor="agreed" className="text-sm text-gray-600">
                                Estoy de acuerdo con los{' '}
                                <a href="#" className="text-blue-600 hover:underline">
                                    términos y condiciones
                                </a>
                                {' '}y la{' '}
                                <a href="#" className="text-blue-600 hover:underline">
                                    política de privacidad
                                </a>.
                            </label>
                        </div>

                        {/* Submit */}
                        <button type="submit" className="btn-primary w-full sm:w-auto">
                            <i className="bx bx-send bx-sm mr-2"></i>
                            Enviar solicitud
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Pedido;