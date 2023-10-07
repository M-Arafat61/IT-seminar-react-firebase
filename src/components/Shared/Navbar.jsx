import { Link, NavLink } from "react-router-dom";
import Avatar from "../../assets/user.png";

const Navbar = () => {
  return (
    <>
      <div className='navbar bg-base-100 shadow-md'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
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
          <a className='btn btn-ghost normal-case text-xl'>techTalk</a>
        </div>

        <div className='navbar-center'>
          <ul className='menu menu-horizontal px-1'>
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
                <img src={Avatar} />
              </div>
            </label>
            <ul
              tabIndex='0'
              className='mt-1 z-[2] shadow menu menu-sm dropdown-content bg-base-100 rounded-box'
            >
              <li>
                <Link>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
