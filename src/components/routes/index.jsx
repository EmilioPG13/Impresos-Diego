import { Route, Routes } from 'react-router-dom';
import LandingPage from '../LandingPage';
import IntroPage from '../IntroPage';
import Gallery from '../Gallery';
import Acabados from '../Acabados';
import Contacto from '../routes/contacto';
import FAQ from '../routes/faq';
import Servicios from '../routes/servicios';

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
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    );
};

export default AppRoutes;