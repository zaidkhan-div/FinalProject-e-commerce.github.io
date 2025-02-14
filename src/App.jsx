import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import ProductsData from './Pages/Products/ProductsData'
import Contact from './Pages/Contact/Contact'
import Checkout from './Pages/Checkout/Checkout'
import Cart from './Pages/Cart/Cart'
import Blogs from './Pages/Blogs/Blogs'
import Faqs from './Pages/Faqs/Faqs'
import Resgister from './Components/Register/Resgister'
import Login from './Components/Login/Login'
import BlogDetail from './Components/Blogs/BlogDetail'
import Protected from './Components/Protected-Routes/Protected'
import ErrorPage from './Pages/ErrorPage.jsx/Error'

// Context
import { ProductsProvider } from './Components/Context/ProductsContext'

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductsProvider>
        <Routes>
          {/* <Protected><Home/></Protected> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Resgister />} />
          {/* <Route path='/' element={<Protected><Home /></Protected>} /> */}
          <Route path='/' element={<Protected><Home /></Protected>} />
          <Route path='about' element={<Protected><About /></Protected>} />
          {/* <Route path='products' element={<ProductsData />} /> */}
          <Route path='products' element={<Protected><ProductsData /></Protected>} />
          <Route path='blogs' element={<Protected><Blogs /></Protected>} />
          <Route path='faqs' element={<Protected><Faqs /></Protected>} />
          <Route path='contact' element={<Protected><Contact /></Protected>} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='cart' element={<Cart />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ProductsProvider>
      <Footer />
    </div>
  )
}

export default App
