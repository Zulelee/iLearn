import { Sidebar, GrammarChecker } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <Sidebar childComponent={<GrammarChecker />}></Sidebar>
      </div>
    </>
  );
};

export default page;
