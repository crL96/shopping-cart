import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Shop from './components/shop/Shop.jsx';
import CheckOutPage from './components/checkOutPage/CheckOutPage.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "checkout",
    element: <CheckOutPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
