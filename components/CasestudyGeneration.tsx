"use client";
import React, { useState } from "react";

const CasestudyGeneration = () => {
  const [formData, setFormData] = useState({
    text: "",
    number: "",
    answer: "Yes",
  });

  const [loadingState, setLoadingState] = useState(false);
  const [CaseStudy, setCaseStudy] = useState();

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

      const response = await fetch(
        "http://localhost:3000/api/casestudy_generator",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form data sent successfully!");
        const responseData = await response.json();
        setCaseStudy(responseData);
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
          <form
            name="casestudygeneratorForm"
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
            <button className="btn btn-primary w-60 text-white mt-4">
              {loadingState ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Generate Case Study"
              )}
            </button>
          </form>
        </div>
        {CaseStudy && (
          <div className="px-10 pt-14">
            <div className="mockup-code">
              <pre className="px-10 pt-2 text-xl font-bold text-center uppercase">
                <code>Your SAQs</code>
              </pre>
              <div className="divider divider-accent"></div>
              <pre className="px-10 pt-2">
                <code style={{ whiteSpace: "pre-wrap" }}>
                  {CaseStudy.response}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CasestudyGeneration;
