import classes from "./CartItem.module.scss";
import { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";

const CartItem = (props) => {
  const { setProducts } = useContext(productsContext);

  const removeFromCartHandler = async () => {
    const response = await fetch(`http://localhost:3001/items/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...props.product, inCart: false }),
    });
    const data = await response.json();
    console.log(data);

    fetch("http://localhost:3001/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };
  return (
    <div className={classes.container}>
      <p className={classes.item}>{props.item}</p>
      <p className={classes.price}>${props.price}</p>
      <button className={classes.btn} onClick={removeFromCartHandler}>Remove</button>
    </div>
  );
};

export default CartItem;
