import './styles/index.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage';
import IntroPage from './components/IntroPage';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* <DarkModeProvider> */}
        <Header />
        <LandingPage />
        <IntroPage />
        <Gallery />
      {/* </DarkModeProvider> */}
    </div>
  );
}

export default App
