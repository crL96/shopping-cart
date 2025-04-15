import './App.css'
import { Link } from 'react-router';

function App() {
  return (
    <div className='homePage'>
      <img src="/src/assets/images/homePageImg.png" alt="Store4" />
      <Link to="shop">Go To Store!</Link>
    </div>
  );
}

export default App
