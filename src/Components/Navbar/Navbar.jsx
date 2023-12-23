import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="mr-2">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-custom-color text-white"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-custom-color text-white"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Register
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-custom-color text-white"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Login
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-custom-color text-white"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#009fb7]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <Link to="/"></Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
