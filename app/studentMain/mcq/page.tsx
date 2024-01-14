import { McqGeneration, Sidebar } from "@/components";
import React from "react";
const page = () => {
  return (
    <>
      <div className="bg-black">
        <Sidebar childComponent={<McqGeneration />}></Sidebar>
      </div>
    </>
  );
};

export default page;
