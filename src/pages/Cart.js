import CartItem from "../components/cart-page/CartItem";
import { useContext, useState } from "react";
import { productsContext } from "../contexts/productsContext";
import CheckoutButton from "../components/cart-page/CheckoutButton";

const Cart = () => {
  const { cart } = useContext(productsContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 && <p>Your cart is currently empty!</p>}
      {cart.length > 0 &&
        cart.map((product) => {
          return (
            <CartItem
              item={product.item}
              price={product.price}
              key={product.id}
            />
          );
        })}
      {cart.length > 0 && <CheckoutButton cart={cart} />}
    </div>
  );
};

export default Cart;
