import { useEffect, useState } from 'react'
import BrowseItems from '../browseItems/BrowseItems'
import Cart from '../cart/Cart';
import { Link } from 'react-router';
import style from "./shop.module.css";

function Shop() {
  const storedCart = (JSON.parse(localStorage.getItem("cart")));

  const [cart, setCart] = useState((storedCart !== null) ? storedCart : []);
  const [showCart, setShowCart] = useState(false);

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
        <nav className={style.navBar}>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button onClick={() => setShowCart(false)}>Shop</button>
            <div className={style.cartBtnContainer}>
                <button onClick={() => setShowCart(true)}>Cart</button>
                {(cart.length > 0) && <span>{cart.length}</span>}
            </div>
        </nav>
        {showCart && 
            <Cart 
                cartData={cart}
                deleteFromCart={deleteFromCart}
                setCartItemQuantity={setCartItemQuantity}
            />
        }
        {!showCart &&
            <BrowseItems addToCart={addToCart}/>
        }
    </div>
  );
}

export default Shop;