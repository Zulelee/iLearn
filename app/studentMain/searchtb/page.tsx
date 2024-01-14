import { Sidebar, SearchTb } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <Sidebar childComponent={<SearchTb />}></Sidebar>
      </div>
    </>
  );
};

export default page;
