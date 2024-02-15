import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div id="error-page">
        <h1 className="text-5xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default Errorpage;
