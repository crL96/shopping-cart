import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function BrowseItems() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(responseData => setData(responseData));
    }, []);

    if (data === null) return <p>Loading...</p>

    return (
        <div className="allItems">
            {data.map((item) => {
                return <ItemCard data={item} key={item.id}/>
            })}
        </div>
    );
}

export default BrowseItems;