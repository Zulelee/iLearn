import React from "react";

const SaqGeneration = () => {
  return (
    <>
      <div className="p-10 overflow-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Short Answer Questions Generator
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to iLearn's Short Answer Questions Generator - your effortless
          solution for crafting targeted short-answer questions. Input your
          topic or paragraph, specify the number of questions, and watch as
          iLearn generates precise SAQs instantly. Ideal for educators designing
          assessments or students reinforcing their understanding. Enhance your
          learning with iLearn's efficient and personalized SAQ Generator.
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
              Enter number of SAQs to generate - Min 1 and Max 5
            </label>
            <br />
            <input
              type="number"
              placeholder="Type here"
              name="number"
              min={1}
              max={5}
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
              Generate SAQs
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SaqGeneration;
