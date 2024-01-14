import React from "react";

const ChapterObjectivesGenerator = () => {
  return (
    <>
      <div className="p-10 overflow-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Chapter Objectives Generator
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to iLearn's Chapter Objectives Generator - effortlessly turn
          chapter topics into clear and concise objectives. Ideal for educators
          and curriculum developers, this tool ensures alignment with
          educational goals, streamlining your curriculum planning. Elevate your
          design experience with iLearn's Chapter Objectives Generator –
          simplifying the process of creating focused and impactful chapter
          objectives.
        </p>
        <div className="px-10 pt-14">
          <form action="">
            <label htmlFor="text" className="font-bold">
              Enter chapter name and subtopics
            </label>
            <br />
            <textarea
              name="text"
              className="textarea textarea-bordered mt-4 w-full bg-black mb-4"
            ></textarea>
            <br />
            <button className="btn btn-primary w-60 text-white mt-4">
              Generate Chapter Objectives
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChapterObjectivesGenerator;
