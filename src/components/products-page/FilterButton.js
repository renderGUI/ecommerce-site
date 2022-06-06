const FilterButton = () => {
  const filterChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <select onChange={filterChangeHandler} defaultValue="none">
        <option value="none" disabled hidden>
          filter
        </option>
        <option value="ascending">Lowest to highest</option>
        <option value="descending">Highest to lowest</option>
      </select>
    </>
  );
};

export default FilterButton;

// filter from $ to $$$
// filter from $$$ to $
