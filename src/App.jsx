import './styles/index.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="bg-stone-100 min-h-screen">
      {/* <DarkModeProvider> */}
        <Header />
        <LandingPage />
      {/* </DarkModeProvider> */}
    </div>
  );
}

export default App
