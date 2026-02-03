import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Collection from "./pages/Collection"
import Orders from "./pages/Orders"
import Product from "./pages/Product"
import PlaceOrder from "./pages/PlaceOrder"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/collection" element={<Collection/>}></Route>
        <Route path="/Orders" element={<Orders/>}></Route>
        <Route path="/product/:productId" element={<Product/>}></Route>
        <Route path="/place-order" element={<PlaceOrder/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
