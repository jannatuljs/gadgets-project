import { createBrowserRouter } from 'react-router-dom'
 
import Layouts from '../layouts/Layouts'
import Home from '../pages/Home'
import Statistics from '../pages/Statistics'
import Dashboard from '../pages/Dashboard'
import ProductDetail from '../components/ProductDetail'
import Cards from '../components/Cards'
import WishLists from '../pages/WishLists'
import Carts from '../pages/Carts'
import ErrorPage from '../pages/ErrorPage'
 
 

 
const routes= createBrowserRouter([
    {
      path:'/',
      element:<Layouts/>,
      errorElement: <ErrorPage />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        
        {
          path: "/category",
          element: <Cards />,
          loader: () => fetch("../products.json"),
        },
        
        {
       path:'/Product/:product_id',
       element:<ProductDetail/>,
       loader: () => fetch ('../../public/products.json')
        },
         
        {
          path:'/Statistics',
          element:  <Statistics/>,
          loader: () => fetch("../products.json"),
        },
        {
          path: "/dashboard/wishlist",
          element: <WishLists/>,
        },
        {
          path: "/dashboard ",
          element: <Carts/>,
        },
        {
          path: "/dashboard/cart",
          element: <Carts/>,
        },
        {
          path:'/Dashboard',
          element:  <Dashboard/>,
        },
       
        
      ],
    },
  ]);

  export default routes