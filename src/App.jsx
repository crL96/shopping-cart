import './App.css'
import { Link } from 'react-router';
import homePageImg from "./assets/images/homePageImg.png";
import { createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import { useState, useEffect } from 'react';
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
  const storedCart = (JSON.parse(localStorage.getItem("cart")));

  const [cart, setCart] = useState((storedCart !== null) ? storedCart : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <>
        <NavBar cartItemsNr={cart.length} />
        <HomePage />
      </>,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: 
      <>
        <NavBar cartItemsNr={cart.length} />
        <Shop cart={cart} setCart={setCart} />
      </>,
    },
    {
      path: "checkout",
      element: 
      <>
        <NavBar cartItemsNr={cart.length} />
        <CheckOutPage />
      </>,
    },
    {
      path: "cart",
      element: 
      <>
        <NavBar cartItemsNr={cart.length} />
        <Cart cartData={cart} setCart={setCart} />
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
