import "./App.css";
import Catalog from "./components/Catalog";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main>
      <Header></Header>
      <SideBar></SideBar>
      <Catalog></Catalog>
    </main>
  );
}

export default App;
