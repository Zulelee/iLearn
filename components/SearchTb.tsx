"use client";
import React, { useState } from "react";

const SearchTb = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [Answer, setAnswer] = useState();
  const [Question, setQuestion] = useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoadingState(true); // Set loading state to true while waiting for API response

      const formData = new FormData();
      formData.append("file", e.target.file.files[0]);
      formData.append("text", e.target.text.value);
      setQuestion(e.target.text.value);
      const response = await fetch("http://localhost:3000/api/searchtb", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Form data sent successfully!");
        // Optionally, you can reset the form data state here
        const responseData = await response.json();
        setAnswer(responseData);
      } else {
        console.error("Failed to send form data");
      }
    } catch (error) {
      console.error("An error occurred while sending form data:", error);
    } finally {
      setLoadingState(false); // Reset loading state after API response
    }
  };

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
          <form
            name="searchtb"
            method="POST"
            onSubmit={handleFormSubmit}
            encType="multipart/form-data"
          >
            <label htmlFor="file" className="font-bold">
              Upload PDF File
            </label>
            <br />
            <input
              type="file"
              name="file"
              accept=".pdf"
              className="file-input file-input-bordered w-full max-w-xs mt-4 bg-black mb-4"
              required
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
              required
            />
            <br />
            <button className="btn btn-primary w-40 text-white mt-4">
              {loadingState ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Search"
              )}
            </button>
          </form>
        </div>
        {Answer && (
          <div className="px-10 pt-14">
            <div className="mockup-code">
              <pre className="px-10 pt-2 text-xl font-bold text-center uppercase">
                <code>iLearn Bot Response</code>
              </pre>
              <div className="divider divider-accent"></div>
              <pre className="px-10 pt-2">
                <code style={{ whiteSpace: "pre-wrap" }}>
                  <b>Question: </b>
                  {Question}
                </code>
              </pre>
              <pre className="px-10 pt-2">
                <code style={{ whiteSpace: "pre-wrap" }}>
                  <b>Answer: </b>
                  {Answer.response.response}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchTb;
