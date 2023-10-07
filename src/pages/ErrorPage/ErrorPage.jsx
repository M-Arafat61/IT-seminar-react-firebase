import { useRouteError } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <Navbar></Navbar>
      <div className='flex flex-col justify-center items-center min-h-screen text-2xl'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <span className='pr-2'>{error.status}</span>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
