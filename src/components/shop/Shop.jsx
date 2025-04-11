import { useState } from 'react'
import BrowseItems from '../browseItems/BrowseItems'
import Cart from '../cart/Cart';

function Shop() {
  const [cart, setCart] = useState([]);

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
        <Cart cartData={cart} deleteFromCart={deleteFromCart}/>
        <BrowseItems addToCart={addToCart}/>
    </div>
  );
}

export default Shop;