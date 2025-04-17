import style from "./navBar.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../App";

function NavBar() {
    const { cart } = useContext(CartContext);

    return (
        <nav className={style.navBar}>
            <Link to="/">
                <div className={style.header}>
                    <img src={logo} alt="" />
                    <h1>Store4</h1>
                </div>
            </Link>
            <div className={style.links}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <div className={style.cartBtnContainer}>
                    <Link to="/cart">Cart</Link>
                    {(cart.length > 0) && <span>{cart.length}</span>}
                </div>
            </div>
        </nav>
    )
};

export default NavBar;