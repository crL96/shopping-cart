import style from "./itemCard.module.css";
import { useState } from "react";

function ItemCard({ data, addToCart }) {
    const [itemQuantity, setItemQuantity] = useState(1);

    function handleAddToCart(e) {
        e.preventDefault();
        addToCart(data.id, data.title, data.price, itemQuantity, data.image)
        setItemQuantity(1);
    }

    return (
        <div className={style.itemCard}>
            <h2>{data.title}</h2>
            <img src={data.image} alt="" />
            <div className={style.bottom}>
                <p>${data.price}</p>
                <form className={style.addToCartForm}>
                    <input
                        type="number"
                        value={itemQuantity}
                        onChange={(event) => setItemQuantity(+event.target.value)}
                        min={1}
                    />
                    <button onClick={handleAddToCart}>Add to cart</button>
                </form>
            </div>
        </div>
    );
}

export default ItemCard;
