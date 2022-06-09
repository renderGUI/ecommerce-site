import classes from "./Cart.module.scss";
import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";
import CartLabels from "../components/cart-page/CartLabels";
import CartItem from "../components/cart-page/CartItem";
import CheckoutButton from "../components/cart-page/CheckoutButton";
import ContinueShoppingButton from "../components/cart-page/ContinueShoppingButton";

const Cart = () => {
  const { products } = useContext(productsContext);

  const itemsInCart = products.filter((product) => {
    return product.inCart === true;
  });

  return (
    <div>
      <ContinueShoppingButton />
      {itemsInCart.length === 0 && <p className={classes.emptyCartMessage}>Your cart is currently empty!</p>}
      {itemsInCart.length > 0 && <CartLabels />}
      {itemsInCart.length > 0 &&
        itemsInCart.map((product) => {
          return (
            <CartItem
              product={product}
              item={product.item}
              price={product.price}
              id={product.id}
              key={product.id}
            />
          );
        })}
      {itemsInCart.length > 0 && <CheckoutButton itemsInCart={itemsInCart} />}
    </div>
  );
};

export default Cart;
