import { Link } from "react-router-dom";

function Productcard({ product }) {
  return (
    <div>
      <Link to={`/products/${product.id}`} state={product}>
        <div className="card h-[600px] bg-gray-200 my-5 mx-auto p-2 shadow-xl">
          <figure>
            <img
              className="h-80 backdrop-blur-0"
              src={product.thumbnail}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <div className="badge badge-secondary h-10 text-xl text-center">
              Discount .....
              <span className="font-extrabold">
                {" "}
                {product?.discountPercentage}%
              </span>
            </div>
            <p>{product.description}</p>
            <div className="card-actions flex justify-around">
              <div className="badge badge-info text-xl py-5">
                {product.brand}
              </div>
              <div className="badge badge-success py-5 text-xl font-bold text-white">
                Rating:
                <span className="text-pink-700"> {product?.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Productcard;
