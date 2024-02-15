import { Link } from "react-router-dom";

function Tourist() {
  return (
    <div>
      <div className=" bg-gradient-to-br from-purple-500 via-[#04AA6D] to-[#143026] rounded">
        <h2 className="p-3 text-2xl text-center text-white font-extrabold">
          World Tour
        </h2>
      </div>
      <Link>
        <div className="mb-5 rounded-md">
          <div className="card shadow-xl">
            <div className="card-body bg-gray-200">
              <h2 className="card-title ">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Tourist;
