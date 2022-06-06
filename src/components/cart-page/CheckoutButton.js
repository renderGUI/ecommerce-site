const CheckoutButton = (props) => {
  const subtotal = props.itemsInCart.reduce((sum, item) => {
    return (sum += item.price);
  }, 0);
  return (
    <div>
      <h2>Subtotal</h2>
      <h2>
        ${subtotal.toFixed(2)}
      </h2>
      <button type="button">Proceed To Checkout</button>
    </div>
  );
};

export default CheckoutButton;
