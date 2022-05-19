import VitaminsSelection from "./VitaminsSelection";
let checkedVits = [];

function SideBar(props) {
  const filterFunction = (filterValue, checked) => {
    let filteredItems;
    //This function checks that all of the values of "valuesLst" are in "item". Returns true or false respectivly.
    // Here "item" is an object and "vits" is an array inside "item".
    const includesAllValues = (item, valuesLst) =>
      valuesLst.every((v) => item.vits.includes(v));
    // This function removes a value from the checked values array when an item is no longer checked in the menu.
    function removeVal(valueToRemove) {
      const index = checkedVits.indexOf(valueToRemove);
      if (index > -1) {
        checkedVits.splice(index, 1);
      }
    }
    // If checked is true, then the filter value would be added to the values to filter by array. Otherwise, it would be removed.
    checked ? checkedVits.push(filterValue) : removeVal(filterValue);
    // If the array is empty, then it means that there is no filter required and the filtered array would be equal to the default initial passed by props.
    filteredItems =
      checkedVits.length > 0
        ? props.def.filter((itm) => includesAllValues(itm, checkedVits))
        : props.def;
    // changeProducts is a "setState" function passed by props.
    props.changeProducts(filteredItems);
  };
  return (
    <div className="sidebar">
      <legend>Menu</legend>
      <VitaminsSelection filterFunc={filterFunction} />
    </div>
  );
}

export default SideBar;
