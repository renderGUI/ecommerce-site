import { useNavigate } from "react-router-dom";

const AddToCartButton = (props) => {
  const navigate = useNavigate();

  const addToCartHandler = async (e) => {
    e.preventDefault();

    if (props.product.inCart === true) {
      console.log("item already in cart");
      return;
    } else {
      const response = await fetch(
        `http://localhost:3001/items/${props.product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...props.product, inCart: true }),
        }
      );
      const data = await response.json();
      console.log(data);

      navigate("/cart");
    }
  };

  return (
    <div>
      <button type="button" onClick={addToCartHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
