const Product = (props) => {
  return (
    <div>
      <h2>{props.item}</h2>
      <p>{props.price}</p>
    </div>
  );
};

export default Product;
