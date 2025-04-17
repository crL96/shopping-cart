import './App.css'
import { Link } from 'react-router';
import homePageImg from "./assets/images/homePageImg.png";
import { createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import Shop from './components/shop/Shop.jsx';
import CheckOutPage from './components/checkOutPage/CheckOutPage.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import NavBar from "./components/navBar/NavBar.jsx";
import Cart from './components/cart/Cart.jsx';



function HomePage() {
  return (
    <div className='homePage'>
      <img src={homePageImg} alt="Store4" />
      <Link to="shop">Go To Store!</Link>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
        <NavBar />
        <HomePage />
      </>,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: 
      <>
        <NavBar />
        <Shop />
      </>,
    },
    {
      path: "checkout",
      element: 
      <>
        <NavBar />
        <CheckOutPage />
      </>,
    },
    {
      path: "cart",
      element: 
      <>
        <NavBar />
        <Cart />
      </>
    },
  ]);



  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
