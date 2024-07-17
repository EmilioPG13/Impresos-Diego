import './styles/index.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage';
import IntroPage from './components/IntroPage';
import Gallery from './components/Gallery';
import Acabados from './components/Acabados';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* <DarkModeProvider> */}
        <Header />
        <LandingPage />
        <IntroPage />
        <Gallery />
        <Acabados />
        <Footer />
      {/* </DarkModeProvider> */}
    </div>
  );
}

export default App
