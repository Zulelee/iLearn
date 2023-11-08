import React from "react";
import { Navbar, Hero, Benefits, Step, Footer } from "@/components";

const page = () => {
  return (
    <main className="bg-none">
      <Navbar></Navbar>
      <Hero></Hero>
      <Benefits></Benefits>
      <Step></Step>
      <Footer></Footer>
    </main>
  );
};

export default page;
