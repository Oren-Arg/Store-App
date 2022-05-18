import Item from "./Item";
import "./Catalog.css";

function Catalog(props) {
  return (
    <div className="catalog">
      {props.ditems.map((item) => {
        return (
          <div>
            <Item
              key={item.id}
              img={item.img}
              amount={item.amount}
              title={item.title}
              price={item.price}
            ></Item>
          </div>
        );
      })}
    </div>
  );
}

export default Catalog;
