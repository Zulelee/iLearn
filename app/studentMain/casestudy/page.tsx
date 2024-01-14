import { Sidebar, CasestudyGeneration } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <Sidebar childComponent={<CasestudyGeneration />}></Sidebar>
      </div>
    </>
  );
};

export default page;
