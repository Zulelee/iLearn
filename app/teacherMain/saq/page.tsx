import { TeacherSidebar, SaqGeneration } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <TeacherSidebar childComponent={<SaqGeneration />}></TeacherSidebar>
      </div>
    </>
  );
};

export default page;
