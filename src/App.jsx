import './styles/index.css'
import Header from './components/Header'

function App() {
  return (
    <div className="bg-stone-100 min-h-screen">
      {/* <DarkModeProvider> */}
        <Header />
      {/* </DarkModeProvider> */}
    </div>
  );
}

export default App
