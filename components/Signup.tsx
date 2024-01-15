"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import signup_image from "public/V-image.png";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message 

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage("Please enter all details.");
      return; // Stop execution if any field is missing
    }
    if (!email.endsWith("@gmail.com")) {
      setErrorMessage("Please provide a valid Gmail address.");
      return; // Stop execution if the email domain is not @gmail.com
    }
    if (!(profession === "Student" || profession === "Teacher")) {
      setErrorMessage("Please select a valid profession (Student or Teacher).");
      return; // Stop execution if the profession is not valid
    }
    // Create an object with form data
    const formData = {
      username,
      email,
      password,
      profession,
    };

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setErrorMessage("Signup successfully");
      }
      
        
    } catch (error) {
      console.error("An error occurred while sending form data:", error);
    }
  };
  return (
    <>
      <div className="flex min-h-screen bg-secondary">
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
            <label className="text-5xl pt-3">iLearn</label>
            <label className="text-xl pt-10">Sign up now!</label>
            <Image
              src={signup_image}
              width={650}
              height={650}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="p-5 bg-black text-white w-screen h-screen lg:w-2/5 flex justify-center items-center">
          <div className="p-10">
            <h6 className="text-3xl font-bold md:text-5xl">Signup</h6>
            <p className="text-sm text-accent pt-5 md:text-xl">
              Enter your details
            </p>
            <div className="flex flex-col flex-shrink my-12">
              <input
                className="bg-black mb-2"
                type="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required  
              />

              <hr className="w-full border-accent mb-6  " />
              <input
                className="bg-black  mb-2"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required  
              />
              <hr className="w-96 border-accent mb-6  " />

              <input
                className="bg-black mb-2"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required  
              />
              <hr className="w-96 border-accent mb-6" />

              <select
                className="select w-96 bg-transparent mb-2"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                  
              >
                <option className="bg-black"selected >Profession</option>
                <option className="bg-black">Student</option>
                <option className="bg-black">Teacher</option>
                
              </select>
              <hr className="w-96 border-accent mb-6" />
              <Link rel="stylesheet" href="" className="text-xs  text-accent">
                Forgot Password?
              </Link>
            </div>
            <Link
              rel="stylesheet"
              href=""
              className="border-purple border-2 px-44 bg-purple mt-10 w-96 text-sm text-white rounded-lg py-2 inline-block hover:bg-black"
              onClick={handleSubmit}
            >
              Signup
            </Link>
            <div className="pt-10">
              <Link rel="stylesheet" href="" className="text-xs text-accent">
                Already have an account?
              </Link>
              <Link
                rel="stylesheet"
                href="/login"
                className="border-2 px-2 ml-5 bg-darkSilver border-darkSilver w-16 text-xs text-accent rounded-lg inline-block hover:bg-black"
              >
                Login
              </Link>
            </div>
            <div className="border-red-500 text-red-500 mt-4">{errorMessage}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
