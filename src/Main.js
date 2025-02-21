import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import Login from './pages/Login';
import Signup from './pages/Signup';


function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="Privacy" element={<Privacy />} />
          <Route path="Faq" element={<Faq />} />
        </Route>
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
