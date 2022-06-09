import classes from "./CartLabels.module.scss";

const CartLabels = () => {
  return (
    <div>
      <div className={classes.labelsContainer}>
        <p className={classes.itemLabel}>Item</p>
        <p className={classes.priceLabel}>Price</p>
        <p className={classes.quantityLabel}>Quantity</p>
      </div>
      <hr></hr>
    </div>
  );
};

export default CartLabels;
