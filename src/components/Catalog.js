import { useState } from "react";
import Item from "./Item";
import "./Catalog.css";

export let items = [
  {
    id: "1",
    vits: ["C", "B6"],
    title: "Pear",
    price: "3",
    amount: 10,
    img: "https://static.libertyprim.com/files/familles/poire-large.jpg?1569271830",
  },
  {
    id: "2",
    vits: ["C", "B12", "A"],
    title: "Apple",
    price: "3.1",
    amount: 10,
    img: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/4315.jpg",
  },
  {
    id: "3",
    vits: ["E", "B1"],
    title: "Pineapple",
    price: "5",
    amount: 10,
    img: "https://produits.bienmanger.com/33469-0w470h470_Organic_Fresh_Pineapple.jpg",
  },
  {
    id: "4",
    vits: ["C", "B1", "A"],
    title: "Tomato",
    price: "2.3",
    amount: 10,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
  },
  {
    id: "5",
    vits: ["B1", "B6", "B12", "E"],
    title: "Banana",
    price: "2.3",
    amount: 10,
    img: "https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?quality=85&w=1024&h=512&crop=1",
  },
  {
    id: "6",
    vits: ["E", "B1"],
    title: "Milk",
    price: "2.3",
    amount: 10,
    img: "https://www.almarai.com/wp-content/uploads/2017/11/42270-UHT-MILK-FF-1L-SCREWCAP-WITH-VITAMIN-EN_WEB.jpg",
  },
  {
    id: "7",
    vits: ["E", "B1", "B12", "A"],
    title: "Broccoli",
    price: "2.3",
    amount: 10,
    img: "https://cdn.britannica.com/25/78225-050-1781F6B7/broccoli-florets.jpg",
  },
  {
    id: "8",
    vits: ["C", "B6", "B12"],
    title: "Carrot",
    price: "2.3",
    amount: 10,
    img: "https://befreshcorp.net/wp-content/uploads/2017/06/product-packshot-Carrot-558x600.jpg",
  },
];

function Catalog() {
  const [dispItems, setDispItems] = useState(items);
  return (
    <div className="catalog">
      {dispItems.map((item) => {
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
