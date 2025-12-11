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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        // Clear error when user starts typing
        if (submitStatus === 'error') {
            setSubmitStatus(null);
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            const response = await fetch('/api/submit-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    service: formData.service,
                    quantity: formData.quantity,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.details || data.error || 'Error al enviar la solicitud');
            }

            // Success!
            setSubmitStatus('success');
            setFormData({
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

            // Scroll to top of form to show success message
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
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

                {/* Success Message */}
                {submitStatus === 'success' && (
                    <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl animate-fade-in">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <i className="bx bx-check text-green-600 text-2xl"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-green-800">¡Solicitud enviada con éxito!</h3>
                                <p className="text-green-700">Te contactaremos en un máximo de 72 horas con tu cotización.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl animate-fade-in">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                <i className="bx bx-error text-red-600 text-2xl"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-red-800">Error al enviar</h3>
                                <p className="text-red-700">{errorMessage}</p>
                            </div>
                        </div>
                    </div>
                )}

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
                        <button
                            type="submit"
                            className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <i className="bx bx-send bx-sm mr-2"></i>
                                    Enviar solicitud
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Pedido;