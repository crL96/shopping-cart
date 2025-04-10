function ItemCard({data}) {
    return (
        <div className="itemCard">
            <h2>{data.title}</h2>
            <img src={data.image} alt="" />
            <p>${data.price}</p>
        </div>
    );   
}

export default ItemCard;