import classes from "./CheckoutButton.module.scss";

const CheckoutButton = (props) => {
  const subtotal = props.itemsInCart.reduce((sum, item) => {
    return (sum += item.price);
  }, 0);
  return (
    <div className={classes.container}>
      <div className={classes.totalSubcontainer}>
      <h2>Subtotal</h2>
      <h2 className={classes.total}>${subtotal.toFixed(2)}</h2>
      </div>
      <button className={classes.btn} type="button">Proceed To Checkout</button>
    </div>
  );
};

export default CheckoutButton;
