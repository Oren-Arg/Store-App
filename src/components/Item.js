import { useState } from "react";
import "./Item.css";
function Item(props) {
  const newAmount = props.amount;
  const [stockAmount, setStockAmount] = useState(newAmount);
  const clickHandler = () => {
    setStockAmount(stockAmount - 1);
  };
  return (
    <div className="item">
      <div className="title">{props.title}</div>
      <img src={props.img} alt={props.title} />
      <div className="stock-amount">Items in stock: {stockAmount}</div>
      <div className="footer">
        <div className="price">Price: ${props.price}</div>
        <button onClick={clickHandler} className="add-to-cart">
          Add to cart!
        </button>
      </div>
    </div>
  );
}

export default Item;
