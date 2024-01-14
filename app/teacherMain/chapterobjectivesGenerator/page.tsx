import { TeacherSidebar, ChapterObjectivesGenerator } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-black">
        <TeacherSidebar
          childComponent={<ChapterObjectivesGenerator />}
        ></TeacherSidebar>
      </div>
    </>
  );
};

export default page;
