import './App.css';
import Navbar from './Components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory  banner={men_banner} category="mens"/>}></Route>
        <Route path='/womens' element={<ShopCategory  banner={women_banner} category="womens"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}></Route>

  <Route path="product" element={<Product></Product>}>
    <Route path=':productID' elemnt={<Product></Product>}></Route>
  </Route>

        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>


    </Routes>
    <Footer></Footer>
      </BrowserRouter>
           

    </div>
  );
}

export default App;
