import { Route, Routes } from 'react-router-dom';
import Contacto from '../routes/contacto';
import FAQ from '../routes/faq';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/faq' element={<FAQ />} />
            <Route path='/contacto' element={<Contacto />} />
        </Routes>
    );
};

export default AppRoutes;