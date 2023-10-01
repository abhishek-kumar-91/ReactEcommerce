import Footer from "./components/Footer"
import Header from "./components/Header"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Cart from "./pages/Cart"
import { Provider } from "react-redux"
import store from "./store/store"
import ProductDetails from './pages/ProductDetails'
import CheckoutPage from "./pages/CheckoutPage"
function App() {
  
  return (
    <>
    <Provider store={store} >
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/products" element={ <Products />} />
        <Route path="/categories" element={ <Categories />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/productDetails/:id" element={ <ProductDetails/>} />
        <Route path="/checkoutpage" element={ <CheckoutPage/>} />
      </Routes>
      <Footer />
     
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
