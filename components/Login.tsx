"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import signup_image from "public/V-image.png";
import { useRouter } from "next/navigation";
import GlobalConifg from "@/app/app.config.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Create an object with form data
    const formData = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.status === "true") {
          GlobalConifg.username = responseData.username;
          // Check user role and redirect accordingly
          if (responseData.userRole === "Student") {
            router.push("/studentMain");
          } else if (responseData.userRole === "Teacher") {
            router.push("/teacherMain");
          }
        } else {
          setErrorMessage("Login failed. Please check your credentials.");
        }
      }
    } catch (error) {
      console.error("An error occurred while sending form data:", error);
    }
  };

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
          <div className="flex flex-col items-center h-screen align-middle justify-center">
            <label className="text-6xl pt-5">
              <b>Welcome to</b>
            </label>
            <label className="text-5xl pt-3">ILearn</label>
            <label className="text-xl pt-10">
              Login to access your account
            </label>
            <Image src={signup_image} alt="Picture of the author" />
          </div>
        </div>
        <div className="p-5 bg-black text-white w-screen h-screen lg:w-2/5 flex justify-center items-center">
          <div className="p-10">
            <form action="" onSubmit={handleSubmit}>
              <h6 className="text-3xl font-bold md:text-5xl">Login</h6>
              <p className="text-sm text-accent pt-5 md:text-xl">
                Enter your account details
              </p>
              <div className="flex flex-col flex-shrink my-12">
                <input
                  className="bg-black  mb-2"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <hr className="w-96 border-accent mb-2  " />
                <input
                  className="bg-black  my-3 mb-2"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <hr className="w-96 border-accent mb-8  " />
                <Link rel="stylesheet" href="" className="text-xs  text-accent">
                  Forgot Password?
                </Link>
              </div>
              <button
                rel="stylesheet"
                className="border-purple border-2 px-44 bg-purple mt-10 w-96 text-sm text-white rounded-lg py-2 inline-block hover:bg-black"
              >
                Login
              </button>
            </form>
            <div className="pt-10">
              <Link rel="stylesheet" href="" className="text-xs text-accent">
                Don&apos;t have and account?
              </Link>
              <Link
                rel="stylesheet"
                href="/signup"
                className="border-2 px-2 ml-5 bg-darkSilver border-darkSilver w-16 text-xs text-accent rounded-lg inline-block hover:bg-black"
              >
                Signup
              </Link>
            </div>
            <div className="border-red-500 text-red-500 mt-4">
              {errorMessage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
function setErrorMessage(arg0: string) {
  throw new Error("Function not implemented.");
}
