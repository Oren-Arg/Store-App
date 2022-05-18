import "./App.css";
import items from "./components/itemsList/itemsList";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { useState } from "react";
import Catalog from "./components/Catalog";
function App() {
  const [products, setProducts] = useState(items);
  return (
    <main>
      <Header></Header>
      <SideBar
        def={items}
        products={products}
        changeProducts={setProducts}
      ></SideBar>
      <Catalog ditems={products} />
    </main>
  );
}

export default App;
