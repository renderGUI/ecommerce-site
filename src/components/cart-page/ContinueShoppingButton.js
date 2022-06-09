import classes from "./ContinueShoppingButton.module.scss";
import { useNavigate } from "react-router-dom";

const ContinueShoppingButton = () => {
  const navigate = useNavigate();
  const viewProductsHandler = () => {
    navigate("/products");
  };
  return (
    <div className={classes.container}>
      <button
        className={classes.btn}
        type="button"
        onClick={viewProductsHandler}
      >
        &#x3C; Continue Shopping
      </button>
      <h2 className={classes.heading}>Shopping Cart</h2>
    </div>
  );
};

export default ContinueShoppingButton;
