import { TeacherSidebar, CheckPlagarism } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <TeacherSidebar childComponent={<CheckPlagarism />}></TeacherSidebar>
      </div>
    </>
  );
};

export default page;
