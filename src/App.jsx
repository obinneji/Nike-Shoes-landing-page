
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Nav from "./components/Nav";

const App = () => (
  <>
  <Nav/>
  <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products/>} />
  </Routes>
  </>
);
export default App;
