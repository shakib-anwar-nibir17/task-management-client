import { Link, NavLink } from "react-router-dom";
import user2 from "../../assets/user.jpg";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
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
      {user?.email && (
        <>
          <li>
            <NavLink
              to="/dashboard/task-zone"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-custom-color text-white"
                  : " hover:border-custom-color hover:border hover:bg-white"
              }
            >
              Task DashBoard
            </NavLink>
          </li>
        </>
      )}
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
            <Link to="/">
              <h1 className="text-white text-3xl">Neo Task Management</h1>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user?.email && (
            <>
              <button onClick={handleLogout} className="btn">
                Log Out
              </button>
              <img className="w-[50px] h-[50px] lg:ml-2" src={user2} alt="" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
