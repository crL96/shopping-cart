import style from "./navBar.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router";

function NavBar({ cartItemsNr }) {
    return (
        <nav className={style.navBar}>
            <div className={style.header}>
                <img src={logo} alt="" />
                <h1>Store4</h1>
            </div>
            <div className={style.links}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <div className={style.cartBtnContainer}>
                    <Link to="/cart">Cart</Link>
                    {(cartItemsNr > 0) && <span>{cartItemsNr}</span>}
                </div>
            </div>
        </nav>
    )
};

export default NavBar;