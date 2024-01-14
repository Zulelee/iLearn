import { TeacherSidebar, CourseOutlineGenerator } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <TeacherSidebar
          childComponent={<CourseOutlineGenerator />}
        ></TeacherSidebar>
      </div>
    </>
  );
};

export default page;
