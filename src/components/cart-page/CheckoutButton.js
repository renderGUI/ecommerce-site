const CheckoutButton = (props) => {
  return (
    <div>
      <h2>Subtotal</h2>
      <h2>
        {/* ${props.cart.reduce((total, item) => {
          return (total += Number(item.price));
        }, 0)} */}
      </h2>
      <button type="button">Proceed To Checkout</button>
    </div>
  );
};

export default CheckoutButton;
