import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Errorpage from "../Pages/Errorpage";
import Products from "../Pages/Products";
import Homepage from "../Pages/Homepage";
import Productdetails from "../Pages/Productdetails";
import AddCart from "../Pages/AddCart";
import Login from "./Login";
import Register from "./Register";
import Newpassword from "./Newpassword";
import Verify from "./Verify";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/newpassword" element={<Newpassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Productdetails />} />
        <Route path="/addcart" element={<AddCart />} />

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
};
export default Routers;
