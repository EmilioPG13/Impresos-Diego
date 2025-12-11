import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './styles/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './components/routes/index';
import WhatsAppButton from './components/WhatsAppButton';
import AccessibilityMenu, { AccessibilityProvider } from './components/AccessibilityMenu';

function App() {
  const [selectedLink, setSelectedLink] = useState('Inicio');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <AccessibilityProvider>
      <div className="min-h-screen flex flex-col bg-stone-50">
        {/* Skip to content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
        >
          Saltar al contenido principal
        </a>

        <Router>
          <Header selectedLink={selectedLink} handleLinkClick={handleLinkClick} />
          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/*" element={<AppRoutes handleLinkClick={handleLinkClick} />} />
            </Routes>
          </main>
          <Footer />

          {/* Floating WhatsApp button - inside Router for location awareness */}
          <WhatsAppButton />
        </Router>

        {/* Accessibility menu - outside Router, always visible */}
        <AccessibilityMenu />
      </div>
    </AccessibilityProvider>
  );
}

export default App;
