import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import IntroPage from './components/IntroPage';
import Gallery from './components/Gallery';
import Acabados from './components/Acabados';
import Footer from './components/Footer';
import AppRoutes from './components/routes/index';

function App() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* <DarkModeProvider> */}
      <Router>
        <Header />
        <AppRoutes />
        <LandingPage />
        <IntroPage />
        <Gallery />
        <Acabados />
        <Footer />
      </Router>
      {/* </DarkModeProvider> */}
    </div>
  );
}

export default App;