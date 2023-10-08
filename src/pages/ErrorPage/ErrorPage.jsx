import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  const verticalLine = {
    height: "50px",
    width: "1px",
    backgroundColor: "white",
    margin: "0 10px",
  };
  return (
    <>
      <div className='bg-[#001524] text-white flex flex-row justify-center items-center min-h-screen text-2xl'>
        <span className='pr-2'>{error.status}</span>
        <hr style={verticalLine} />
        <p className='text-sm'>This page could not be found.</p>
      </div>
    </>
  );
};

export default ErrorPage;
