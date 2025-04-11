import { useState, useEffect } from "react";
import ItemCard from "../itemCard/ItemCard";
import styles from "./browseItems.module.css";

function BrowseItems({ addToCart }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then((responseData) => setData(responseData.slice(0, 20)));
        // slice array incase API returns more than 20 items
    }, []);

    if (data === null) return <p>Loading...</p>;

    return (
        <div className={styles.allItems}>
            {data.map((item) => {
                return (
                    <ItemCard data={item} key={item.id} addToCart={addToCart} />
                );
            })}
        </div>
    );
}

export default BrowseItems;
