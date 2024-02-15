import Banner from "../Components/Header/Banner";
import Footer from "../Components/Header/Footer";
import Navbar from "../Components/Header/Navbar";
import Aboutus from "./Aboutus";
import Categories from "./Categories";
import Tourist from "./Tourist";

function Homepage() {
  return (
    <div className="w-10/12 mx-auto my-5">
      <Navbar />
      <Banner />
      <Aboutus />
      <Categories />
      <Tourist />
      <Footer />
    </div>
  );
}

export default Homepage;
