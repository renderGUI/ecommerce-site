import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";
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
      <h1>Shopping Cart</h1>
      <ContinueShoppingButton />

      {itemsInCart.length === 0 && <p>Your cart is currently empty!</p>}
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
      {itemsInCart.length > 0 && <CheckoutButton />}
    </div>
  );
};

export default Cart;
