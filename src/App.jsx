import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage';
import IntroPage from './components/IntroPage';
import Gallery from './components/Gallery';
import Acabados from './components/Acabados';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-stone-50 min-h-screen">
        {/* <DarkModeProvider> */}
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
          <IntroPage />
          <Gallery />
          <Acabados />
        <Footer />
        {/* </DarkModeProvider> */}
      </div>
    </BrowserRouter>
  );
}

export default App
