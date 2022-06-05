import { useState, useContext } from "react";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";

const AddToCartButton = (props) => {
  const { cart, setCart } = useContext(productsContext);
  const navigate = useNavigate();

  const addToCartHandler = (e) => {
    e.preventDefault();
    setCart(cart.concat(props.product));
    navigate("/cart");
  };

  return (
    <div>
      <button type="button" onClick={addToCartHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
