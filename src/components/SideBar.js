import VitaminsSelection from "./VitaminsSelection";
let checkedVits = [];

function SideBar(props) {
  const FilterByV = (vit, checked) => {
    let filteredItems;
    const includesAllVits = (item, vitLst) =>
      vitLst.every((v) => item.vits.includes(v));

    function removeVit(vitamin) {
      const index = checkedVits.indexOf(vitamin);
      if (index > -1) {
        checkedVits.splice(index, 1);
      }
    }

    checked ? checkedVits.push(vit) : removeVit(vit);

    filteredItems =
      checkedVits.length > 0
        ? props.def.filter((itm) => includesAllVits(itm, checkedVits))
        : props.def;
    console.log(filteredItems, checkedVits);
    props.changeProducts(filteredItems);
  };

  return (
    <div className="sidebar">
      <legend>Menu</legend>
      <VitaminsSelection filterFunc={FilterByV} />
    </div>
  );
}

export default SideBar;
