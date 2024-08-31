
import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  Shop  from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import Cart from './Pages/Cart'
import bag_banner from './Components/Assets/banner_bags.png'
import scarf_banner from './Components/Assets/banner_scarf&topi.png'
import tops_banner from './Components/Assets/banner_tops.png'


function App() {
  return (
    <div> 
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/bags' element={<ShopCategory banner = {bag_banner} category="bags"/>}/>
        <Route path='/scarf and beanie' element={<ShopCategory banner = {scarf_banner} category="scarf and beanie"/>}/>
        <Route path='/tops' element={<ShopCategory banner = {tops_banner} category="tops"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path="/product/:productId" element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>  
        <Route path='/Login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
