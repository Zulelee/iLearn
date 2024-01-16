import React from "react";
import { WordLookup, Sidebar } from "@/components";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <Sidebar childComponent={<WordLookup />}></Sidebar>
      </div>
    </>
  );
};

export default page;
