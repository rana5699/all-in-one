import { Link } from "react-router-dom";

function Categories() {
  return (
    <div>
      <div className=" bg-gradient-to-br from-purple-500 via-[#04AA6D] to-[#143026] rounded">
        <h2 className="p-3 text-2xl text-center text-white font-extrabold">
          Pick IT products
        </h2>
      </div>
      <div>
        <Link to={"/products"} className="mb-5 rounded-md">
          <div className="card shadow-xl">
            <div className="card-body bg-gray-200 hover:blur-sm">
              <img src="https://i.ibb.co/3BRQcjm/it.jpg" alt="it image" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
