
import './App.css';
import { Route, Routes } from "react-router-dom";
import About from './Commponents/About/About';
import Header from './Commponents/header/Header';
import Footer from './Commponents/footer/Footer';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Cart from './Commponents/cart/Cart';
import ProductInfo from './Commponents/Products/ProductInfo';
import Longin from './pages/contact/Login';


function App() {
  return (
    <>
   <Header></Header>
 
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="Contact"  element={<Contact/>} />
        <Route path="logIn"  element={<Longin/>} />
        <Route path="Cart"  element={<Cart/>} />
        <Route path="productInfo"  element={<ProductInfo/>} />
      </Routes>
   <Footer></Footer>
    </>
  );
}

export default App;
