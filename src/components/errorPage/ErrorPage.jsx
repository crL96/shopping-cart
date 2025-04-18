import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/shop">
        You can go back to the store page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;