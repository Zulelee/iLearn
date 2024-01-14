import React from "react";

const SearchTb = () => {
  return (
    <>
      <div className="p-10 overflow-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Search Textbook
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to iLearn's Search Textbook feature - effortlessly upload your
          PDF file, ask a question, and watch as iLearn generates precise
          answers. Perfect for students and educators, this tool streamlines
          information retrieval within study materials, making learning more
          efficient and effective. Access knowledge at your fingertips with
          iLearn's Search Textbook feature.
        </p>
        <div className="px-10 pt-14">
          <form action="">
            <label htmlFor="file" className="font-bold">
              Upload PDF File
            </label>
            <br />
            <input
              type="file"
              name="file"
              accept=".pdf"
              className="file-input file-input-bordered w-full max-w-xs mt-4 bg-black mb-4"
            />
            <br />
            <label htmlFor="text" className="font-bold">
              Enter your question
            </label>
            <br />
            <input
              type="text"
              placeholder="Type here"
              name="text"
              className="input input-bordered w-full mt-4 bg-black mb-4"
            />
            <br />
            <button className="btn btn-primary w-40 text-white mt-4">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchTb;
