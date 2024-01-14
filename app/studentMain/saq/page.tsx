import { Sidebar, SaqGeneration } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <Sidebar childComponent={<SaqGeneration />}></Sidebar>
      </div>
    </>
  );
};

export default page;
