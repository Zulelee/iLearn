import { TeacherSidebar, McqGeneration } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <TeacherSidebar childComponent={<McqGeneration />}></TeacherSidebar>
      </div>
    </>
  );
};

export default page;
