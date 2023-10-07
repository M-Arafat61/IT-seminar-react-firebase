import { Link, NavLink } from "react-router-dom";
import Avatar from "../../assets/user.png";
import useAuthContext from "../../hooks/useAuth";

const Navbar = () => {
  const { user, handleUserLogOut } = useAuthContext();
  return (
    <>
      <div className='navbar bg-[#11009E] shadow-md'>
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
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box'
            >
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? "underline text-green-600 font-semibold " : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/registered-sessions'
                  className={({ isActive }) =>
                    isActive ? "underline text-green-600 font-semibold " : ""
                  }
                >
                  My Sessions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/seminar-concert'
                  className={({ isActive }) =>
                    isActive ? "underline text-green-600 font-semibold " : ""
                  }
                >
                  Moonlight Melodies
                </NavLink>
              </li>
            </ul>
          </div>
          <p className='normal-case font-bold text-xl'>techTalk</p>
        </div>

        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal px-1 text-lg font-semibold'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? "underline text-green-600 font-semibold " : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/registered-sessions'
                className={({ isActive }) =>
                  isActive ? "underline text-green-600 font-semibold " : ""
                }
              >
                My Sessions
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/seminar-concert'
                className={({ isActive }) =>
                  isActive ? "underline text-green-600 font-semibold " : ""
                }
              >
                Moonlight Melodies
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='navbar-end'>
          <div className=' dropdown dropdown-end'>
            <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                {user && user?.photoURL !== null ? (
                  <img src={user?.photoURL} />
                ) : (
                  <img src={Avatar} />
                )}
              </div>
            </label>
            <ul
              tabIndex='0'
              className='mt-1 z-[2] shadow menu menu-sm  dropdown-content bg-base-100 rounded-box'
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
                <li>
                  <Link to='/login'>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
