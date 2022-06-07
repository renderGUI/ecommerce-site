const FilterButton = (props) => {
  const filterChangeHandler = (e) => {
    props.setFilterType(e.target.value);
  };
  return (
    <>
      <select onChange={filterChangeHandler} defaultValue="default">
        <option value="default" disabled>
          filter
        </option>
        <option value="ascending">lowest to highest</option>
        <option value="descending">highest to lowest</option>
      </select>
    </>
  );
};

export default FilterButton;
