"use client";
import React, { useState } from "react";

const ChapterObjectivesGenerator = () => {
  const [formData, setFormData] = useState({
    text: "",
  });

  const [loadingState, setLoadingState] = useState(false);
  const [Objectives, setObjectives] = useState();

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
        "http://localhost:3000/api/chapter_objectives",
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
        setObjectives(responseData);
        setFormData({
          text: "",
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
          Chapter Objectives Generator
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to iLearn&apos;s Chapter Objectives Generator - effortlessly
          turn chapter topics into clear and concise objectives. Ideal for
          educators and curriculum developers, this tool ensures alignment with
          educational goals, streamlining your curriculum planning. Elevate your
          design experience with iLearn&apos;s Chapter Objectives Generator –
          simplifying the process of creating focused and impactful chapter
          objectives.
        </p>
        <div className="px-10 pt-14">
          <form
            name="chapterobjectives"
            method="POST"
            onSubmit={handleFormSubmit}
          >
            <label htmlFor="text" className="font-bold">
              Enter chapter name and subtopics
            </label>
            <br />
            <textarea
              name="text"
              className="textarea textarea-bordered mt-4 w-full bg-black mb-4"
              onChange={handleInputChange}
              required
            ></textarea>
            <br />
            <button className="btn btn-primary w-60 text-white mt-4">
              {loadingState ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Generate Chapter Objectives"
              )}
            </button>
          </form>
        </div>
        {Objectives && (
          <div className="px-10 pt-14">
            <div className="mockup-code">
              <pre className="px-10 pt-2 text-xl font-bold text-center uppercase">
                <code>Chapter Objectives</code>
              </pre>
              <div className="divider divider-accent"></div>
              <pre className="px-10 pt-2">
                <code style={{ whiteSpace: "pre-wrap" }}>
                  {Objectives.response}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChapterObjectivesGenerator;
