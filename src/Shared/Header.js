import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Usercontext } from "../components/Authprovider/Authprovider";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { user, auth, cart } = useContext(Usercontext);
  const navigate = useNavigate()
  const location = useLocation();
  const title = location.pathname;
  console.log(title)

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("user Signout");
        navigate('/signin');
      })
      .catch(() => {
        console.log("user doke bose ache");
      });

  };

  const menuitem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link className="text-[#f57224]" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li onClick={handleSignout}>
            <Link>Logout</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      )}
    </>
  );
  return (
    <section>
      <div className="navbar bg-[#ececec] uppercase  max-h-14 text-gray-800 px-1 lg:px-14 ">
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
              className="menu menu-compact text-gray-800 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuitem}
            </ul>
          </div>
          <Link to="/" className="">
            <img
              className="max-w-[150px] lg:ml-0 ml-8 hidden lg:block"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuitem}</ul>
        </div>
        <div className="navbar-end">
          <span className="pr-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="#f57224"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="bg-[#f57224] text-white rounded-full text-xs -top-2 w-6 p-1 absolute">
              {cart}
            </span>
          </span>
          {user ? (
            <Link to="/dashboard">
              {/* <span
              id="this is for prolife pic"
              class="mx-4 rounded-full text-gray-100 bg- font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max"
            > */}
              <img
                class="rounded-full border-2 border-[#f57224] w-11 h-11 max-w-none"
                alt="A"
                src={user.photoURL}
              />

              {/* <span class="lg:block hidden  px-3 py-2">{user.displayName}</span> */}
              {/* </span> */}
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
      {title != "/dashboard" && (
        <div className="py-6 ">
          <input
            className="lg:w-3/5 w-4/5 h-12 p-5 rounded outline-none bg-[#ececec]"
            type="text"
            placeholder="Search on Shop"
          />
          <button className="bg-[#f57224] text-white py-1 px-2 relative right-0 top-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-9 h-9 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Header;
