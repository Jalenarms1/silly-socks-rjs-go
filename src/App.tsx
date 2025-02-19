import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ShopView from './Shop/ShopView'
import { CartProvider } from './context/useCartContext'
import Cart from './Cart/Cart'
import OrderView from './Orders/OrderView'
import ProductView from './Shop/ProductView'
import SavedProductsView from './Saved/SavedProductsView'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    document.title = "Silly Socks and More"
  }, [])

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ShopView />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/cart/success' element={<Cart isSuccess={true}/>} />
            <Route path='/order/:orderId' element={<OrderView />} />
            <Route path='/saved' element={<SavedProductsView />} />
            <Route path='/products/:productId' element={<ProductView />} />


          </Routes>
        </Router>

      </CartProvider>
    </>
  )
}

export default App
