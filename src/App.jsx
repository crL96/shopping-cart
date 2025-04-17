import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { useState, useEffect, createContext } from 'react';
import routes from './routes/routes.jsx';

export const CartContext = createContext({ cart: [], setCart: null});

function App() {
  const storedCart = (JSON.parse(localStorage.getItem("cart")));

  const [cart, setCart] = useState((storedCart !== null) ? storedCart : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const router = createBrowserRouter(routes);

  return (
    <div className='app'>
      <CartContext.Provider value={{cart, setCart}}>
        <RouterProvider router={router} />
      </CartContext.Provider>
    </div>
  );
}

export default App
