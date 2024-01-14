import React from "react";
import { Sidebar, StudentMain } from "@/components";

const page = async () => {
  return (
    <>
      <div className="bg-black">
        <Sidebar childComponent={<StudentMain />}></Sidebar>
      </div>
    </>
  );
};

export default page;
