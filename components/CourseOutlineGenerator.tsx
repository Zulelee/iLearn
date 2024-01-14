import React from "react";

const CourseOutlineGenerator = () => {
  return (
    <>
      <div className="p-10 overflow-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Course Outline Generator
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to iLearn's Course Outline Generator - effortlessly convert
          textbook table of contents into a well-structured course outline.
          Simplify your curriculum planning, ensuring a seamless and organized
          learning journey. Ideal for educators and curriculum developers, this
          tool optimizes efficiency, saving you valuable time in course design.
          Elevate your planning experience with iLearn's Course Outline
          Generator – where creating a roadmap for impactful learning has never
          been easier.
        </p>
        <div className="px-10 pt-14">
          <form action="">
            <label htmlFor="text" className="font-bold">
              Enter table of content from the textbook
            </label>
            <br />
            <textarea
              name="text"
              className="textarea textarea-bordered mt-4 w-full bg-black mb-4"
            ></textarea>
            <label htmlFor="number" className="font-bold">
              Enter number of weeks
            </label>
            <br />
            <input
              type="number"
              placeholder="Type here"
              name="number"
              className="input input-bordered w-full max-w-xs mt-4 bg-black mb-4"
            />
            <br />
            <button className="btn btn-primary w-60 text-white mt-4">
              Generate Course Outline
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseOutlineGenerator;
