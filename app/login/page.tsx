import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex bg-white rounded-2xl shadow-2xl w-full ">
      <div className="bg-black text-white py-60 px-32 w-2/5 ">
        <h6 className="text-5xl mb-6">
          <b>Login</b>
        </h6>
        <div>
          <p className="text-sm text-grey">Enter your account details</p>
          <div className="flex flex-col w-96 my-12">
            <input
              className="bg-black  mb-2"
              type="email"
              name="email"
              placeholder="Email"
            />
            <hr className="w-96 border-grey mb-2  " />
            <input
              className="bg-black  my-3 mb-2"
              type="password"
              name="password"
              placeholder="Password"
            />
            <hr className="w-96 border-grey mb-8  " />
            <Link rel="stylesheet" href="" className="text-xs  text-grey">
              Forgot Password?
            </Link>
          </div>

          <Link
            rel="stylesheet"
            href=""
            className="border-purple border-2 px-44 bg-purple mt-10 w-96 text-sm text-grey rounded-lg py-2 inline-block hover:bg-black"
          >
            Login
          </Link>
          <div className=" flex mt-48 items-center">
            <div>
              <Link rel="stylesheet" href="" className="text-xs text-grey">
                Don't have and account?
              </Link>
            </div>
            <div>
              <Link
                rel="stylesheet"
                href=""
                className="border-2 ml-24 px-2 py-2 bg-darkSilver border-darkSilver w-16 text-xs text-grey rounded-lg inline-block hover:bg-black"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple text-white p-2  w-3/5 ">Right Side</div>
    </div>
  );
};

export default page;
