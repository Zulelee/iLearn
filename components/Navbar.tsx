import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl">iLearn</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="text-lg font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/features" className="text-lg font-bold">
              Features
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg font-bold">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/login"
          className="btn btn-secondary font-bold rounded-full hidden lg:inline-flex md:inline-flex"
        >
          Try Now!
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
