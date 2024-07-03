import './styles/index.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage';
import IntroPage from './components/IntroPage';

function App() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* <DarkModeProvider> */}
        <Header />
        <LandingPage />
        <IntroPage />
      {/* </DarkModeProvider> */}
    </div>
  );
}

export default App
