import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { PageHome } from './pages/PageHome'
import { PageProduct } from './pages/PageProduct'
import { Cart } from './pages/Cart'

function App() {

  return (
    <Router>
      <Layout>
          {/* <PageHome /> */}
          <Routes>
            <Route path='/product/:productId' element={<PageProduct />} />
            <Route path='/cart' element={<Cart />}  />
            <Route path='*' element={<PageHome />}  />
          </Routes>
      </Layout>
    </Router>
  )
}

export default App
