import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "@fontsource/manrope";
import "@fontsource/manrope/400.css";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
