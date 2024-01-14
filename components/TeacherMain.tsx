import React from "react";

const TeacherMain = () => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-lightblue to-primary">
            iLearn for Teachers
          </span>
        </h1>
        <p className="text-center text-xs lg:text-sm font-thin mt-4">
          Your Educational Toolkit
        </p>
        <p className="px-10 pt-14 text-justify">
          Welcome, Educators, to iLearn - Your comprehensive platform for
          streamlined teaching and impactful course creation. Navigate the
          educational landscape with ease through our teacher-centric dashboard,
          equipped with a suite of powerful functionalities designed to enhance
          your teaching experience.
        </p>
        <p className="px-10 pt-5 text-justify">
          Unlock the full potential of your teaching with our Teacher Toolbox.
          From ensuring academic integrity with our Plagiarism Checker to
          perfecting written communication through our Grammar Checker, iLearn
          provides an array of tools tailored to meet your specific needs. Craft
          engaging assessments with our MCQ and SAQ Generators, and bring
          real-world scenarios into your lessons with our Case Study Generator.
          Organize, plan, and communicate effectively with our Course Outline,
          Roadmap, and Objectives Generators. Elevate your teaching experience
          and revolutionize your course creation – it all starts with iLearn!
        </p>
      </div>
    </>
  );
};

export default TeacherMain;
