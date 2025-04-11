import { useState } from 'react'
import BrowseItems from '../browseItems/BrowseItems'

function Shop() {
  const [cart, setCart] = useState([]);

  function addToCart(id, title, price, quantity, imageUrl) {
    // if item already exists in cart, add quantity
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            const newCart = cart;
            newCart[i].quantity += quantity;
            newCart[i].total = newCart[i].quantity * newCart[i].price;
            setCart(newCart);
            console.log(cart);
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

  return <BrowseItems addToCart={addToCart}/>
}

export default Shop;