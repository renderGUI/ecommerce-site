import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const navigateHomeHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>OOPS!</h2>
      <p>404 - PAGE NOT FOUND!</p>
      <p>
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <button type="button" onClick={navigateHomeHandler}>
        GO TO HOMEPAGE
      </button>
    </div>
  );
};

export default ErrorPage;
