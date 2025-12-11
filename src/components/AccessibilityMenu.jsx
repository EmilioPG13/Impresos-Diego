import { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// Create context for accessibility settings
export const AccessibilityContext = createContext();

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within AccessibilityProvider');
    }
    return context;
};

export function AccessibilityProvider({ children }) {
    const [settings, setSettings] = useState(() => {
        // Load from localStorage if available
        const saved = localStorage.getItem('accessibilitySettings');
        return saved ? JSON.parse(saved) : {
            highContrast: false,
            largeText: false,
            reduceMotion: false,
            visualAlerts: false, // For deaf users - visual notifications instead of sounds
        };
    });

    useEffect(() => {
        localStorage.setItem('accessibilitySettings', JSON.stringify(settings));

        // Apply settings to document
        const root = document.documentElement;

        if (settings.highContrast) {
            root.classList.add('high-contrast');
        } else {
            root.classList.remove('high-contrast');
        }

        if (settings.largeText) {
            root.classList.add('large-text');
        } else {
            root.classList.remove('large-text');
        }

        if (settings.reduceMotion) {
            root.classList.add('reduce-motion');
        } else {
            root.classList.remove('reduce-motion');
        }

        if (settings.visualAlerts) {
            root.classList.add('visual-alerts');
        } else {
            root.classList.remove('visual-alerts');
        }
    }, [settings]);

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <AccessibilityContext.Provider value={{ settings, toggleSetting }}>
            {children}
        </AccessibilityContext.Provider>
    );
}

AccessibilityProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


function AccessibilityMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { settings, toggleSetting } = useAccessibility();

    const menuItems = [
        {
            key: 'visualAlerts',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            label: 'Alertas visuales',
            description: 'Notificaciones visuales en lugar de sonidos',
        },
        {
            key: 'highContrast',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
            label: 'Alto contraste',
            description: 'Mejora la visibilidad de los elementos',
        },
        {
            key: 'largeText',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            ),
            label: 'Texto grande',
            description: 'Aumenta el tamaño del texto',
        },
        {
            key: 'reduceMotion',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            ),
            label: 'Reducir movimiento',
            description: 'Desactiva animaciones',
        },
    ];

    return (
        <div className="fixed bottom-6 left-6 z-50">
            {/* Menu Panel */}
            <div
                className={`
                    absolute bottom-16 left-0
                    bg-white rounded-xl shadow-2xl
                    border border-gray-200
                    transition-all duration-300 ease-out
                    ${isOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }
                `}
                role="menu"
                aria-label="Opciones de accesibilidad"
            >
                <div className="p-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 text-lg">Accesibilidad</h3>
                    <p className="text-sm text-gray-500">Personaliza tu experiencia</p>
                </div>
                <div className="p-2 min-w-72">
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => toggleSetting(item.key)}
                            className={`
                                w-full flex items-center gap-3 p-3 rounded-lg
                                transition-colors duration-200
                                text-left
                                ${settings[item.key]
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'hover:bg-gray-50 text-gray-700'
                                }
                            `}
                            role="menuitemcheckbox"
                            aria-checked={settings[item.key]}
                        >
                            <span className={`
                                p-2 rounded-lg
                                ${settings[item.key] ? 'bg-blue-100' : 'bg-gray-100'}
                            `}>
                                {item.icon}
                            </span>
                            <div className="flex-1">
                                <div className="font-medium text-sm">{item.label}</div>
                                <div className="text-xs text-gray-500">{item.description}</div>
                            </div>
                            {/* Toggle indicator */}
                            <div className={`
                                w-10 h-6 rounded-full transition-colors duration-200
                                flex items-center px-1
                                ${settings[item.key] ? 'bg-blue-500' : 'bg-gray-300'}
                            `}>
                                <div className={`
                                    w-4 h-4 bg-white rounded-full shadow
                                    transition-transform duration-200
                                    ${settings[item.key] ? 'translate-x-4' : 'translate-x-0'}
                                `} />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir menú de accesibilidad"
                aria-expanded={isOpen}
                className={`
                    w-14 h-14 rounded-full shadow-lg
                    flex items-center justify-center
                    transition-all duration-300
                    focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2
                    ${isOpen
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }
                `}
            >
                {/* Universal Accessibility Icon */}
                <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                </svg>
            </button>
        </div>
    );
}

export default AccessibilityMenu;
