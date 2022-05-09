import { items } from "./Catalog";

export function Vitamins() {
  const vitamins = ["B1", "B6", "B12", "A", "C", "E"];
  const filterByV = (vit, checked) => {
    let res = checked ? items.Filter((v) => items.vits.includes(vit)) : items;
    setDispItems(res);
  };

  return (
    <div className="vit-list">
      <legend>Filter by vitamin</legend>
      {vitamins.map((vit) => {
        return (
          <div className="vitButton">
            <input
              type="checkbox"
              id={vit}
              name={vit}
              value={vit}
              onChange={(e) => {
                filterByV(e.target.value, e.target.checked);
              }}
            />
            <label htmlfor={vit}>{vit}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Vitamins;
