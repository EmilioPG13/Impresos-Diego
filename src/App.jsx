import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './components/routes/index';

function App() {
  return (
    <div className="bg-stone-50">
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;