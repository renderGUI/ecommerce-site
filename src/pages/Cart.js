import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";
import CartItem from "../components/cart-page/CartItem";
import CheckoutButton from "../components/cart-page/CheckoutButton";
import ContinueShoppingButton from "../components/cart-page/ContinueShoppingButton";

const Cart = () => {
  const { products } = useContext(productsContext);

  const itemsInCart = products.filter((product) => {
    return product.inCart === true;
  })

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ContinueShoppingButton />


      {/* {localStorage.getItem('cart').length === 0 && <p>Your cart is currently empty!</p>}
      {localStorage.getItem('cart').length > 0 &&
        cart.map((product) => {
          return (
            <CartItem
              item={product.item}
              price={product.price}
              key={product.id}
            />
          );
        })}
      {cart.length > 0 && <CheckoutButton cart={cart} />} */}
      {itemsInCart.map((product) => {
        return (
          <CartItem
            item={product.item}
            price={product.price}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default Cart;
