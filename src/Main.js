import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import Login from './pages/Login';
import ItemsBox from './pages/ItemsBox.js';
import Signup from './pages/Signup';
import Additem from './pages/Additem';
import Boards from './pages/Boards';
import ItemsDetail from './pages/ItemsDetail';


function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="Privacy" element={<Privacy />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="ItemsBox" >
            <Route index element={<ItemsBox />} />
            <Route path="ItemsDetail" element={<ItemsDetail />} />
          </Route>
          <Route path="Additem" element={<Additem />} />  
          <Route path="Boards" element={<Boards />} />
        </Route>
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
