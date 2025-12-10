import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './styles/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './components/routes/index';

function App() {
  const [selectedLink, setSelectedLink] = useState('Inicio');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Router>
        <Header selectedLink={selectedLink} handleLinkClick={handleLinkClick} />
        <main className="flex-1">
          <Routes>
            <Route path="/*" element={<AppRoutes handleLinkClick={handleLinkClick} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;