import { useEffect, useState } from 'react'
import BrowseItems from '../browseItems/BrowseItems'

function Shop() {
  const storedCart = (JSON.parse(localStorage.getItem("cart")));

  const [cart, setCart] = useState((storedCart !== null) ? storedCart : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function setCartItemQuantity(id, value) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            const newCart = cart;
            newCart[i].quantity = value;
            newCart[i].total = newCart[i].quantity * newCart[i].price;
            setCart([ ...newCart ]);
            return;
        }
    }
    }

  function deleteFromCart(id) {
    const newCart = [];
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id != id) {
            newCart.push(cart[i]);
        }
    }
    setCart([ ...newCart ]);
  }

  function addToCart(id, title, price, quantity, imageUrl) {
    // if item already exists in cart, add quantity
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            const newCart = cart;
            newCart[i].quantity += quantity;
            newCart[i].total = newCart[i].quantity * newCart[i].price;
            setCart([ ...newCart ]);
            return;
        }
    }
    setCart([ ...cart, {
      id,  
      title,
      price,
      quantity,
      imageUrl,
      total: (price * quantity)
    }])
  }

  return (
    <div>
      <BrowseItems addToCart={addToCart}/>
    </div>
  );
}

export default Shop;