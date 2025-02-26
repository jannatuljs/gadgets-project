import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import CartProvider from './components/Context/CartContext'
import WishListProvider from './components/Context/WishlistContext'
 
 

 
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <WishListProvider>
      <CartProvider>
      <RouterProvider router= {routes}/>
      </CartProvider>
      </WishListProvider>
  </StrictMode>
)
