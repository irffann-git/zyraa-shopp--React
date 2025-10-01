import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './Components/MyNavbar';
import Navbar1 from './Components/Navbar1';
import Home from './Pages/Home';
import About from './Pages/About';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Contact from './Pages/Contact';
import Gym from './Pages/Gym';
import Running from './Pages/Running';
import Travel from './Pages/Travel';
import Jersey from './Pages/Jersey';
import Error from './Components/Error';
import Woodland from './Pages/Woodland';
import LF from './Pages/LF';
import Nike from './Pages/Nike';
import Adidas from './Pages/Adidas';
import Footer from './Components/Footer';
import { FavoriteProvider } from './Components/FavoriteContext';
import FavoritePage from './Components/FavoritePage';
import { CartProvider } from './Components/CartContext';
import CartPage from './Components/CartPage';
import ScrollToTop from "./Components/ScrollToTop";
import Splash from './Pages/Splash'; 
import { AuthProvider} from "./Components/LogSignContext";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000); 
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splash />; 
  }



  return (
    <AuthProvider>
    <CartProvider>
      <FavoriteProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar1 />
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/About' element={<About />} />
            <Route path='/Men' element={<Men />} />
            <Route path='/Women' element={<Women />} />
            <Route path='/Gym' element={<Gym />} />
            <Route path='/Kids' element={<Kids />} />
            <Route path='/Travel' element={<Travel />} />
            <Route path='/Running' element={<Running />} />
            <Route path='/Woodland' element={<Woodland />} />
            <Route path='/Nike' element={<Nike />} />
            <Route path='/Adidas' element={<Adidas />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path='/LF' element={<LF />} />
            <Route path='/Jersey' element={<Jersey />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Favorite' element={<FavoritePage />} />
            <Route path='/Cart' element={<CartPage />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FavoriteProvider>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
