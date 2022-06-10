import classes from "./AddToCartButton.module.scss";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { productsContext } from "../../contexts/productsContext";

const AddToCartButton = (props) => {
  const navigate = useNavigate();
  const { setProducts } = useContext(productsContext);
  const [showLimitMessage, setShowLimitMessage] = useState(false);

  const addToCartHandler = async (e) => {
    e.preventDefault();

    if (props.product.inCart === true) {
      setShowLimitMessage(true);
      setTimeout(() => {
        setShowLimitMessage(false);
      }, 2000);
      return;
    } else {
      const response = await fetch(
        `https://products-rendergui.herokuapp.com/items/${props.product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...props.product, inCart: true }),
        }
      );
      const data = await response.json();
      console.log(data);

      fetch("https://products-rendergui.herokuapp.com/items")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setProducts(data);
        });

      navigate("/cart");
    }
  };

  return (
    <div>
      <button
        className={classes.btn}
        type="button"
        onClick={addToCartHandler}
        disabled={showLimitMessage ? true : false}
      >
        Add to cart
      </button>
      <p className={classes.limitText}>
        {showLimitMessage ? "This product is already in your cart!" : ""}
      </p>
    </div>
  );
};

export default AddToCartButton;
