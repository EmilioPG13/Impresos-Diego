import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './styles/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './components/routes/index';

function App() {
  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkClick = (link) => {
    console.log(`Link clicked: ${link}`); // Debug log
    setSelectedLink(link);
  };

  return (
    <div className="bg-stone-50">
      <Router>
        <Header selectedLink={selectedLink} handleLinkClick={handleLinkClick} />
        <Routes>
          <Route path="/*" element={<AppRoutes handleLinkClick={handleLinkClick} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;