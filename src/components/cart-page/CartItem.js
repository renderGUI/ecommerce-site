const CartItem = (props) => {
  return (
    <div>
      <p>{props.item}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default CartItem;
