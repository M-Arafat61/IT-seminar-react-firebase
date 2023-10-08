import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuth";
import SocialLogin from "../../components/Shared/SocialLogin";
import Navbar from "../../components/Shared/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const { userLogin } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then(res => {
        console.log(res.user);
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch(err => {
        return toast.error(`${err.message}`, {
          style: {
            color: "white",
            fontSize: "20px",
            backgroundColor: "red",
          },
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div className='max-w-6xl m-auto'>
      <Navbar></Navbar>
      <div className='max-w-3xl min-h-screen m-auto flex flex-col space-y-5 '>
        <div className='w-3/4 m-auto bg-[#F5F5F5] rounded-lg'>
          <div className='relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
            <div className='relative mx-4 mt-6 mb-4 grid h-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-blue-400 to-pink-700 bg-clip-border text-white shadow-lg shadow-pink-500/40'>
              <h3 className='block font-sans text-lg font-semibold leading-snug tracking-normal text-white antialiased'>
                Login your account
              </h3>
            </div>
            <form onSubmit={handleLogin}>
              <div className='flex flex-col gap-4 p-6'>
                <div className='relative h-11 w-full min-w-[200px]'>
                  <input
                    className='peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                    type='email'
                    required
                    name='email'
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email address
                  </label>
                </div>
                <div className='relative h-11 w-full min-w-[200px]'>
                  <input
                    className='peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                    required
                    type='password'
                    name='password'
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>
              <div className='p-6 pt-0'>
                <button
                  className='block select-none rounded-lg bg-gradient-to-tr from-blue-400 to-pink-700 py-1 px-3 text-center align-middle font-sans text-sm font-bold text-white  shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                  type='submit'
                  data-ripple-light='true'
                >
                  Login
                </button>

                <p className='mt-3 flex font-sans text-sm font-light leading-normal text-inherit antialiased'>
                  Do not have an account?
                  <Link
                    to='/register'
                    className='ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased'
                  >
                    Register
                  </Link>
                </p>
                <SocialLogin></SocialLogin>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
