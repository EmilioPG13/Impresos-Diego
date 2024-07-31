import { Route, Routes } from 'react-router-dom';
import LandingPage from '../LandingPage';
import IntroPage from '../IntroPage';
import Gallery from '../Gallery';
import Acabados from '../Acabados';
import Contacto from '../routes/contacto';
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
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
    );
};

export default AppRoutes;