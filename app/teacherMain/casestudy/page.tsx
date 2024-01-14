import { TeacherSidebar, CasestudyGeneration } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <TeacherSidebar
          childComponent={<CasestudyGeneration />}
        ></TeacherSidebar>
      </div>
    </>
  );
};

export default page;
