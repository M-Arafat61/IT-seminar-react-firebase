import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../hooks/useAuth";
import { FcConferenceCall } from "react-icons/fc";

const Navbar = () => {
  const { user, handleUserLogOut } = useAuthContext();
  return (
    <>
      <div className='navbar bg-blue-500 shadow-md p-5'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box'
            >
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? "underline text-white font-semibold " : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/registered-sessions'
                  className={({ isActive }) =>
                    isActive ? "underline text-white font-semibold " : ""
                  }
                >
                  My Sessions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/seminar-concert'
                  className={({ isActive }) =>
                    isActive ? "underline text-white font-semibold " : ""
                  }
                >
                  Moonlight Melodies
                </NavLink>
              </li>
            </ul>
          </div>

          <button
            className='hover:btn-g
            host px-4 py-2 rounded-lg font-bold text-2xl flex items-center gap-1'
          >
            <FcConferenceCall className='text-5xl ' />
            tech<span className='text-emerald-300'>Talk</span>
          </button>
        </div>

        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal px-1 text-lg font-semibold'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? "underline text-white font-semibold " : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/registered-sessions'
                className={({ isActive }) =>
                  isActive ? "underline text-white font-semibold " : ""
                }
              >
                My Sessions
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/seminar-concert'
                className={({ isActive }) =>
                  isActive ? "underline text-white font-semibold " : ""
                }
              >
                Moonlight Melodies
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='navbar-end'>
          <div className=' dropdown dropdown-end'>
            {user && user?.photoURL !== null ? (
              <>
                <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
                  <div className='w-12 rounded-full'>
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </>
            ) : (
              // <img src={Avatar} />
              <Link to='/login'>
                <button className='btn btn-outline '>Login</button>
              </Link>
            )}

            <ul
              tabIndex='0'
              className='mt-1 z-[2] shadow menu text-white menu-sm  dropdown-content rounded-box'
            >
              {user ? (
                <>
                  <li>
                    <Link>{user?.displayName}</Link>
                  </li>
                  <li>
                    <Link onClick={handleUserLogOut}>Logout</Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
