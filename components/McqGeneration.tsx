import React from "react";

const McqGeneration = () => {
  return (
    <>
      <div className="p-10 overflow-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Multiple Choice Questions Generator
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to the MCQ Generator feature in iLearn - your swift solution
          for crafting Multiple-Choice Questions. Simply input your topic or
          paragraph, specify the number of questions you need, and watch as
          iLearn generates tailored MCQs instantly. Perfect for educators
          designing assessments or students reinforcing their knowledge. Elevate
          your learning experience with iLearn's efficient and personalized MCQ
          Generator.
        </p>
        <div className="px-10 pt-14">
          <form action="">
            <label htmlFor="text" className="font-bold">
              Enter topic or content
            </label>
            <br />
            <textarea
              name="text"
              className="textarea textarea-bordered mt-4 w-full bg-black mb-4"
            ></textarea>
            <label htmlFor="number" className="font-bold">
              Enter number of MCQs to generate - Min 1 and Max 10
            </label>
            <br />
            <input
              type="number"
              placeholder="Type here"
              name="number"
              min={1}
              max={10}
              className="input input-bordered w-full max-w-xs mt-4 bg-black mb-4"
            />
            <br />
            <label htmlFor="answer" className="font-bold">
              Do you want the Answers?
            </label>
            <br />
            <select
              name="answer"
              className="select select-bordered w-full max-w-xs mt-4 bg-black"
            >
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </select>
            <br />
            <button className="btn btn-primary w-40 text-white mt-4">
              Generate MCQs
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default McqGeneration;
