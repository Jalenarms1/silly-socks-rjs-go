import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductContextProvider } from './context/ProductsContext.tsx'
import { CartContextProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <App />

      </CartContextProvider>

    </ProductContextProvider>
  </StrictMode>,
)
