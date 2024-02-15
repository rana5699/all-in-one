import { Link, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

function AddCart() {
  const location = useLocation();
  const addedproduct = location.state;
  console.log("location:", location);

  return (
    <div>
      <Navbar />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12 hover:w-full hover:h-full">
                        <img
                          src={addedproduct.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{addedproduct.title}</div>
                      <div className="text-sm opacity-50">
                        {addedproduct.brand}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {addedproduct.category}
                  </span>
                </td>
                <td>
                  <span className="badge badge-info badge-md">
                    $ {addedproduct.price}
                  </span>
                </td>
                <th>
                  <Link to={`/products`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </Link>
                </th>
              </tr>
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddCart;
