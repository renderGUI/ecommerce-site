import { useNavigate } from "react-router-dom";

const ContinueShoppingButton = () => {
  const navigate = useNavigate();
  const viewProductsHandler = () => {
    navigate("/products");
  };
  return (
    <div>
      <button type="button" onClick={viewProductsHandler}>Continue Shopping</button>
    </div>
  );
};

export default ContinueShoppingButton;
