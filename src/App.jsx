
import ItemlistContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./components/contexto/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <div className="wrapper">
        <div><NavBar /></div>
        <div className="menu-productos">
        <Routes>
          <Route path={"/"} element={<ItemlistContainer />} />
          <Route path={"/category/:id"} element={<ItemlistContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
        </div>
      </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
