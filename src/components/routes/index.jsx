import { Route, Routes } from 'react-router-dom';
import LandingPage from '../LandingPage';
import IntroPage from '../IntroPage';
import Gallery from '../Gallery';
import Acabados from '../Acabados';
import Contacto from '../routes/contacto';
import Servicios from '../routes/servicios';
import Nosotros from '../routes/nosotros';
import FAQ from '../routes/faq';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <LandingPage />
                    <IntroPage />
                    <Gallery />
                    <Acabados />
                </>
            } />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    );
};

export default AppRoutes;