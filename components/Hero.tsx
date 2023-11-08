import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-secondary">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold">
              Empowering Education with AI: Welcome to iLearn
            </h1>
            <p className="py-6">Unlock Your Full Academic Potential</p>
            <Link href="/login" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
