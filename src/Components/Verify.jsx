import { Link } from "react-router-dom";

function Verify() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control"></div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email or Phone :</span>
                </label>
                <input
                  type="text"
                  placeholder="Eamil or phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Verification Code :</span>
                </label>
                <input
                  type="number"
                  placeholder="Verification Code"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <Link to={"/login/newpassword"}>
                  <button className="btn btn-primary">Verify</button>
                </Link>
              </div>
              <div className="mt-6 flex justify-center">
                Create new account ?
                <Link
                  to={"/register"}
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
