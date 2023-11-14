import React from "react";
import { Navbar, Hero, Benefits, Step, Footer } from "@/components";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <Navbar></Navbar>
      <div className="container mx-auto">
        <Hero></Hero>
      </div>
      <Benefits></Benefits>
      <Step></Step>
      <Footer></Footer>
    </main>
  );
};

export default page;
