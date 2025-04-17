import { useNavigate } from "react-router";
import style from "./cart.module.css";


function Cart({ cartData, setCart }) {
   
    function setCartItemQuantity(id, value) {
        for (let i = 0; i < cartData.length; i++) {
            if (cartData[i].id == id) {
                const newCart = cartData;
                newCart[i].quantity = value;
                newCart[i].total = newCart[i].quantity * newCart[i].price;
                setCart([ ...newCart ]);
                return;
            }
        }
        }
    
      function deleteFromCart(id) {
        const newCart = [];
        for (let i = 0; i < cartData.length; i++) {
            if (cartData[i].id != id) {
                newCart.push(cartData[i]);
            }
        }
        setCart([ ...newCart ]);
      }

    if (cartData == null || cartData.length === 0) {
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
                cartData={cartData}
                deleteFromCart={deleteFromCart}
                setCartItemQuantity={setCartItemQuantity}
            />
            <OrderSummary cartData={cartData} />
        </div>
    );
}

function OrderSummary({ cartData }) {
    const navigate = useNavigate();

    function handleCheckout() {
        navigate("/checkout");
    }

    let orderTotal = 0;

    for (let i = 0; i < cartData.length; i++) {
        orderTotal = orderTotal + cartData[i].total;
    }

    return (
        <div className={style.orderSummary}>
            <h2>Order Summary</h2>
            <p>Total: ${Math.round(orderTotal * 100) / 100}</p>
            <p>Number of items: {cartData.length}</p>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

function CartItemsList({ cartData, deleteFromCart, setCartItemQuantity }) {
    return (
        <div className={style.cartItemsList}>
            {cartData.map((item) => {
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