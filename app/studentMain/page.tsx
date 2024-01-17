import React from "react";
import { Sidebar, StudentMain } from "@/components";
import GlobalConifg from "../app.config.js";

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
