import React from "react";
import Link from "next/link";
import Image from "next/image";
import signup_image from "public/V-image.png";
import { Navbar } from "@/components";

const page = () => {
  return (
    <>
      <div className="flex flex-row-reverse min-h-screen bg-secondary">
        <div
          className=" bg-purple text-white hidden h-screen lg:w-3/5 lg:block"
          style={{
            backgroundImage: 'url("blob.svg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center h-screen">
            <label className="text-6xl pt-32">
              <b>Welcome to</b>
            </label>
            <label className="text-5xl pt-3">ILearn</label>
            <label className="text-xl pt-10">
              Login to access your account
            </label>
            <Image
              src= {signup_image}
              width={650}
              height={650}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="p-5 bg-black text-white w-screen h-screen lg:w-2/5 flex justify-center items-center">
          <div className="p-10">
            <h6 className="text-3xl font-bold md:text-5xl">Login</h6>
            <p className="text-sm text-accent pt-5 md:text-xl">
              Enter your account details
            </p>
            <div className="flex flex-col flex-shrink my-12">
              <input
                className="bg-black  mb-2"
                type="email"
                name="email"
                placeholder="Email"
              />
              <hr className="w-96 border-accent mb-2  " />
              <input
                className="bg-black  my-3 mb-2"
                type="password"
                name="password"
                placeholder="Password"
              />
              <hr className="w-96 border-accent mb-8  " />
              <Link rel="stylesheet" href="" className="text-xs  text-accent">
                Forgot Password?
              </Link>
            </div>
            <Link
              rel="stylesheet"
              href=""
              className="border-purple border-2 px-44 bg-purple mt-10 w-96 text-sm text-white rounded-lg py-2 inline-block hover:bg-black"
            >
              Login
            </Link>
            <div className="pt-10">
              <Link rel="stylesheet" href="" className="text-xs text-accent">
                Don't have and account?
              </Link>
              <Link
                rel="stylesheet"
                href="/signup"
                className="border-2 px-2 ml-5 bg-darkSilver border-darkSilver w-16 text-xs text-accent rounded-lg inline-block hover:bg-black"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
