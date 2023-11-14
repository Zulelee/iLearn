"use client";
import React from "react";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-secondary">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-3xl lg:text-4xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-lightblue to-primary">
                Hello! We're {""}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "iLearn...",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Empowering Education",
                  1000,
                  "Discovering a Smarter Way to Learn",
                  1000,
                  "Your Path to Academic Success",
                  1000,
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
              />
            </h1>
            <p className="py-6 text-lg lg:text-xl">
              Unlock Your Full Academic Potential
            </p>
            <Link
              href="/login"
              className="btn btn-primary rounded-full bg-gradient-to-br from-lightblue to-primary border-none"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
