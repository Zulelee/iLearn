"use client";
import React, { useState } from "react";

const GrammarChecker = () => {
  const [contentType, setContentType] = useState<string>();

  const handleSetContentType = (type: string) => {
    setContentType(type);
  };

  return (
    <>
      <div className="p-10 overflow-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Grammar Checker
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to the Grammar Checker feature in iLearn – your key to
          refining and perfecting written communication. In the pursuit of
          academic excellence, iLearn's Grammar Checker serves as your vigilant
          companion, ensuring that your content adheres to grammatical precision
          and linguistic clarity. Whether you are a student crafting assignments
          or an educator reviewing submissions, our advanced grammar validation
          technology meticulously analyzes your text, offering suggestions for
          improvement. Elevate the quality of your writing, foster effective
          communication, and embrace the confidence that comes with impeccable
          grammar. iLearn's Grammar Checker is where linguistic finesse meets
          educational innovation.
        </p>
        <div className="px-10 pt-14">
          <h3 className="font-bold text-lg">Choose Input Type:</h3>
          <button
            className="btn btn-primary w-40 text-white m-5"
            name="input"
            onClick={() => handleSetContentType("text")}
          >
            Text
          </button>
          <button
            className="btn btn-primary w-40 text-white m-5"
            name="file"
            onClick={() => handleSetContentType("file")}
          >
            PDF File
          </button>
          {contentType === "text" && (
            <form action="">
              <label htmlFor="text" className="font-bold">
                Enter Content
              </label>
              <br />
              <textarea
                name="text"
                className="textarea textarea-bordered mt-4 w-full bg-black"
              ></textarea>
              <button className="btn btn-primary w-40 text-white mt-4">
                Check Grammar
              </button>
            </form>
          )}

          {contentType === "file" && (
            <form action="">
              <label htmlFor="file" className="font-bold">
                Upload PDF File
              </label>
              <br />
              <input
                type="file"
                name="file"
                accept=".pdf"
                className="file-input file-input-bordered w-full max-w-xs mt-4 bg-black"
              />
              <br />
              <button className="btn btn-primary w-40 text-white mt-4">
                Check Grammar
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default GrammarChecker;
