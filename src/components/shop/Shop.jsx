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
            <div className={style.header}>
                <img src="/src/assets/images/logo.png" alt="" />
                <h1>Store4</h1>
            </div>
            <div className={style.links}>
                <Link to="/">Home</Link>
                <a onClick={() => setShowCart(false)}>Shop</a>
                <div className={style.cartBtnContainer}>
                    <a onClick={() => setShowCart(true)}>Cart</a>
                    {(cart.length > 0) && <span>{cart.length}</span>}
                </div>
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