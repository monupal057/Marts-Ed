import {createBrowserRouter,Outlet,RouterProvider,ScrollRestoration} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home'
import Cart from './pages/Cart';
import Login from "./pages/Login";
import Page from "./pages/Page";  
import Blog from "./pages/Blog";  
import Shop from "./pages/Shop";  
import { productsData } from "./api/Api";
import Product from "./components/Product";

 const Layout = () => {
   return (
     <div>
       <Header/>
       <ScrollRestoration />
       <Outlet/>
       <Footer/>

     </div>
   )
 }

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/page",
        element: <Page />,  // Add these routes
      },
      {
        path: "/blog",
        element: <Blog />,  // Add these routes
      },
      {
        path: "/shop",
        element: <Shop />,  // Add these routes
      }
     
    ],
  },
]);


 function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router} />
      {/* <Header/> 
      <Home/> */}
      {/* <Router>
      <Layout/> 
      </Router> */}
      
      {/* <Footer/> */}
    </div>
  )
}      
export default App;


   