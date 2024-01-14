"use client";
import React, { useState } from "react";

const CheckPlagarism = () => {
  const [contentType, setContentType] = useState<string>();

  const handleSetContentType = (type: string) => {
    setContentType(type);
  };

  return (
    <>
      <div className="p-10 overflow-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Plagiarism Checker
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to the cutting-edge Plagiarism Checker feature in iLearn –
          your guardian against academic integrity breaches. As part of our
          commitment to fostering a culture of originality, iLearn's Plagiarism
          Checker ensures the authenticity of your work by meticulously scanning
          and analyzing content against an extensive database. Whether you're a
          student striving for academic excellence or an educator overseeing
          submissions, our advanced plagiarism detection technology provides a
          comprehensive solution. Safeguard the credibility of your work and
          uphold the principles of academic honesty with iLearn's Plagiarism
          Checker – where originality meets innovation.
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
                Check Plagiarism
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
                Check Plagiarism
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckPlagarism;
