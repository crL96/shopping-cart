import './App.css'
import { Link } from 'react-router';
import homePageImg from "./assets/images/homePageImg.png";

function App() {
  return (
    <div className='homePage'>
      <img src={homePageImg} alt="Store4" />
      <Link to="shop">Go To Store!</Link>
    </div>
  );
}

export default App
