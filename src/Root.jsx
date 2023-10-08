import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className='font-poppins text-white bg-[#001524]'>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
