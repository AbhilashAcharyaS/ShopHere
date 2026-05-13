import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Login from "./pages/Login"
// import Cart from "./pages/Cart"
// import Collection from "./pages/Collection"
// import Orders from "./pages/Orders"
// import Product from "./pages/Product"
// import PlaceOrder from "./pages/PlaceOrder"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer, toast } from 'react-toastify';
import Verify from "./pages/Verify"
import { lazy, Suspense } from "react"
// import 'react-toastify/dist/ReactToastify.css'

function App() {

  const About= lazy(()=>import("./pages/About"));
  const Contact= lazy(()=>import("./pages/Contact"));
  const Login= lazy(()=>import("./pages/Login"))
  const Cart= lazy(()=>import("./pages/Cart"))
  const Collection= lazy(()=>import("./pages/Collection"))
  const Orders= lazy(()=>import("./pages/Orders"))
  const Product= lazy(()=>import("./pages/Product"))
  const PlaceOrder= lazy(()=>import("./pages/PlaceOrder"))

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        {/* <Route path="/about" element={<About/>}></Route> */}
        <Route path="/about" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <About/>
          </Suspense>
        } ></Route>

        {/* <Route path="/contact" element={<Contact/>}></Route> */}
        <Route path="/contact" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact/>
          </Suspense>
        }>
        </Route>

        {/* <Route path="/login" element={<Login/>}></Route> */}
        <Route path="/login" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login/>
          </Suspense>
        }></Route>

        {/* <Route path="/contact" element={<Cart/>}></Route> */}
        <Route path="/cart" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart/>
          </Suspense>
        }></Route>

        {/* <Route path="/collection" element={<Collection/>}></Route> */}
        <Route path="/collection" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Collection/>
          </Suspense>
        }></Route>

        {/* <Route path="/Orders" element={<Orders/>}></Route> */}
        <Route path="/Orders" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Orders/>
          </Suspense>
        }></Route>

        {/* <Route path="/product/:productId" element={<Product/>}></Route> */}
        <Route path="/product/:productId" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Product/>
          </Suspense>
        }></Route>

        {/* <Route path="/place-order" element={<PlaceOrder/>}></Route> */}
        <Route path="/place-order" element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <PlaceOrder/>
          </Suspense>
        }></Route>

        <Route path="/verify" element={<Verify/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
