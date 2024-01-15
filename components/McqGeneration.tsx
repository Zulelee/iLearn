"use client";
import React, { useState } from "react";

const McqGeneration = () => {
  const [formData, setFormData] = useState({
    text: "",
    number: "",
    answer: "Yes",
  });

  const [loadingState, setLoadingState] = useState(false);
  const [MCQList, setMCQList] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadingState(true); // Set loading state to true while waiting for API response

      const response = await fetch("http://localhost:3000/api/saq_generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data sent successfully!");
        const responseData = await response.json();
        setMCQList(responseData);
        setFormData({
          text: "",
          number: "",
          answer: "Yes",
        });
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
          <form
            name="mcqgeneratorForm"
            method="POST"
            onSubmit={handleFormSubmit}
          >
            <label htmlFor="text" className="font-bold">
              Enter topic or content
            </label>
            <br />
            <textarea
              name="text"
              className="textarea textarea-bordered mt-4 w-full bg-black mb-4"
              onChange={handleInputChange}
              value={formData.text}
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
              onChange={handleInputChange}
              value={formData.number}
            />
            <br />
            <label htmlFor="answer" className="font-bold">
              Do you want the Answers?
            </label>
            <br />
            <select
              name="answer"
              className="select select-bordered w-full max-w-xs mt-4 bg-black"
              onChange={handleInputChange}
              value={formData.answer}
            >
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </select>
            <br />
            <button className="btn btn-primary w-40 text-white mt-4">
              {loadingState ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Generate MCQs"
              )}
            </button>
          </form>
        </div>
        {MCQList && (
          <div className="px-10 pt-14">
            <div className="mockup-code">
              <pre className="px-10 pt-2 text-xl font-bold text-center uppercase">
                <code>Your MCQs</code>
              </pre>
              <div className="divider divider-accent"></div>
              <pre className="px-10 pt-2">
                <code>{MCQList.response}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default McqGeneration;
