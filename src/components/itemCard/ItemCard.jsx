import style from "./itemCard.module.css";
import { useState } from "react";

function ItemCard({ data, handleAddToCart }) {
    const [itemQuantity, setItemQuantity] = useState(1);

    return (
        <div className={style.itemCard}>
            <h2>{data.title}</h2>
            <img src={data.image} alt="" />
            <p>${data.price}</p>
            <form className={style.addToCartForm}>
                <input
                    type="number"
                    value={itemQuantity}
                    onChange={(event) => setItemQuantity(event.target.value)}
                    min="1"
                />
                <button onClick={handleAddToCart}>Add to cart</button>
            </form>
        </div>
    );
}

export default ItemCard;
