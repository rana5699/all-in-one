import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Header/Footer";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

function Productdetails() {
  const location = useLocation();
  const details = location.state;

  const [addcart, setAddcart] = useState(false);

  const handletost = () => {
    if (!addcart) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="w-10/12 my-5 mx-auto">
      <Navbar />
      <div className="m-5 mx-auto ">
        <Card>
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src={details.thumbnail}
              className="h-full w-full object-cover"
            />
          </CardHeader>

          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {details.title}
              </Typography>
              <Typography
                color="blue-gray"
                className=" bg-gray-300 p-2 rounded-md font-bold"
              >
                $ {details.price}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <div>
              <Link to={"/addcart"} state={details}>
                <Button
                  onClick={handletost}
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  Add to Cart
                </Button>
              </Link>
              <ToastContainer />
            </div>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Productdetails;
