import homePageImg from "../../assets/images/homePageImg.png";
import { Link } from "react-router";

export default function HomePage() {
    return (
      <div className='homePage'>
        <img src={homePageImg} alt="Store4" />
        <Link to="shop">Go To Store!</Link>
      </div>
    );
  }
  