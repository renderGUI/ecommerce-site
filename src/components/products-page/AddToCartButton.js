import { useState } from "react";

const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  const addToCartHandler = (e) => {
    e.preventDefault();
  };

  const changeQuantityHandler = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <form onSubmit={addToCartHandler}>
      <select onChange={changeQuantityHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button type="submit">Add to cart</button>
    </form>
  );
};

export default AddToCartButton;
