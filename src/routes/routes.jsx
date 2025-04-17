import Shop from '../components/shop/Shop.jsx';
import CheckOutPage from '../components/checkOutPage/CheckOutPage.jsx';
import ErrorPage from '../components/errorPage/ErrorPage.jsx';
import NavBar from "../components/navBar/NavBar.jsx";
import Cart from '../components/cart/Cart.jsx';
import HomePage from '../components/homePage/HomePage.jsx';

const routes = [
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
];

export default routes;