import { TeacherSidebar, GrammarChecker } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <TeacherSidebar childComponent={<GrammarChecker />}></TeacherSidebar>
      </div>
    </>
  );
};

export default page;
