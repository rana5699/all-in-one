import { useEffect, useState } from "react";
import Productcard from "./Productcard";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Header/Footer";
import { Button } from "@material-tailwind/react";
function Products() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  console.log("productsList:", products);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const jsonData = await response.json();
      const allData = jsonData.products;
      setProducts(allData);
    } catch (error) {
      console.error(`error fetching data:`, error);
    }
  };

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price;
      } else if (sortBy === "brand") {
        return a.brand.localeCompare(b.brand);
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      } else if (sortBy === "discount") {
        return b.discount - a.discount;
      }
      return 0;
    });
    setProducts(sortedProducts);
  };
  const handleChange = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    sortProducts();
  }, [sortBy]);

  return (
    <div>
      <Navbar />
      <div className="mx-5 flex justify-between p-5">
        <Button onClick={sortProducts}>Sort by price</Button>
        <div>
          <select
            className="btn btn-accent text-gray-800 font-bold text-xl"
            onChange={handleChange}
            value={sortBy}
          >
            <option value="brand">Brand</option>
            <option value="rating">Rating</option>
            <option value="Discount">Discount</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {products.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Products;
