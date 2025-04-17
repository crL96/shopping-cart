import { useNavigate } from "react-router";
import style from "./cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../App";


function Cart() {

    const { cart, setCart } = useContext(CartContext);
   
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

    if (cart == null || cart.length === 0) {
        return (
        <div>
            <p>Empty cart...</p>
            <p>Go back to the store to add something</p>
        </div>
    );
    }

    return (
        <div className={style.cartPage}>
            <CartItemsList
                cart={cart}
                deleteFromCart={deleteFromCart}
                setCartItemQuantity={setCartItemQuantity}
            />
            <OrderSummary cart={cart} />
        </div>
    );
}

function OrderSummary({ cart }) {
    const navigate = useNavigate();

    function handleCheckout() {
        navigate("/checkout");
    }

    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        orderTotal = orderTotal + cart[i].total;
    }

    return (
        <div className={style.orderSummary}>
            <h2>Order Summary</h2>
            <p>Total: ${Math.round(orderTotal * 100) / 100}</p>
            <p>Number of items: {cart.length}</p>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

function CartItemsList({ cart, deleteFromCart, setCartItemQuantity }) {
    return (
        <div className={style.cartItemsList}>
            {cart.map((item) => {
                return (
                    <CartItem
                        item={item}
                        key={item.id}
                        deleteFromCart={deleteFromCart}
                        setCartItemQuantity={setCartItemQuantity}
                    />
                );
            })}
        </div>
    );
}

function CartItem({ item, deleteFromCart, setCartItemQuantity }) {
    function handleDeleteFromCart() {
        deleteFromCart(item.id);
    }

    function handleQuantityChange(e) {
        setCartItemQuantity(item.id, +e.target.value);
    }

    return (
        <div className={style.cartItem}>
            <div>
                <img src={item.imageUrl} alt="" />
            </div>
            <div>
                <h3>{item.title}</h3>
                <label>
                    Quantity:{" "}
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={handleQuantityChange}
                        min={1}
                    />
                </label>
                <p>Total Price: {item.total}</p>
                <button onClick={handleDeleteFromCart}>Delete</button>
            </div>
        </div>
    );
}

export default Cart;