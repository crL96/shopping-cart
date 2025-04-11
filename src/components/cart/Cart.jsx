import style from "./cart.module.css";

function Cart({ cartData, deleteFromCart }) {
    return (
        <div className={style.cartPage}>
            <CartItemsList cartData={cartData} deleteFromCart={deleteFromCart} />
            <OrderSummary cartData={cartData}/>
        </div>
    );
}

function OrderSummary({ cartData }) {
    let orderTotal = 0;

    for (let i = 0; i < cartData.length; i++) {
        orderTotal = (orderTotal + cartData[i].total);
    }

    return (
        <div className={style.orderSummary}>
            <h2>Order Summary</h2>
            <p>Total: ${ Math.round(orderTotal * 100) / 100 }</p>
            <p>Number of items: {cartData.length}</p>
            <button>Checkout</button>
        </div>
    );
}

function CartItemsList({cartData, deleteFromCart}) {
    return (
        <div className={style.cartItemsList}>
            {cartData.map((item) => {
                return (
                    <CartItem item={item} key={item.id} deleteFromCart={deleteFromCart}/>
                );
            })}
        </div>
    );
}

function CartItem({item, deleteFromCart}) {
    function handleDeleteFromCart() {
        deleteFromCart(item.id)
    }

    return (
        <div className={style.cartItem}>
            <div><img src={item.imageUrl} alt="" /></div>
            <div>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: {item.total}</p>
                <button onClick={handleDeleteFromCart}>Delete</button>
            </div>
        </div>
    );
}

export default Cart;