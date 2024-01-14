import React from "react";

const CasestudyGeneration = () => {
  return (
    <>
      <div className="p-10 overflow-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Case Study Generator
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to iLearn's Case Study Generator – your go-to tool for
          crafting custom case studies effortlessly. Input your topic, specify
          the desired number of questions, and watch as iLearn generates
          engaging case studies instantly. Perfect for educators seeking diverse
          assessments or students aiming to enhance critical thinking. Elevate
          your learning experience with iLearn's efficient and personalized Case
          Study Generator.
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
              Enter number of questions for the case study - Min 1 and Max 5
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
            <button className="btn btn-primary w-60 text-white mt-4">
              Generate Case Study
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CasestudyGeneration;
