import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import LandingPage from '../LandingPage';
import IntroPage from '../IntroPage';
import Gallery from '../Gallery';
import Acabados from '../Acabados';
import Pedido from './pedido';
import Servicios from '../routes/servicios';
import Nosotros from '../routes/nosotros';
import FAQ from '../routes/faq';
import Terminos from './terminos';
import Privacidad from './privacidad';

const AppRoutes = ({ handleLinkClick }) => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <LandingPage />
                    <IntroPage handleLinkClick={handleLinkClick} />
                    <Gallery />
                    <Acabados />
                </>
            } />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/pedido" element={<Pedido />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
    );
};

AppRoutes.propTypes = {
    handleLinkClick: PropTypes.func.isRequired,
};

export default AppRoutes;
