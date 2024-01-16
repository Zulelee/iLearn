"use client";
import React, { useState } from "react";

const CourseOutlineGenerator = () => {
  const [formData, setFormData] = useState({
    text: "",
    number: "",
  });

  const [loadingState, setLoadingState] = useState(false);
  const [Outline, setOutline] = useState();

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

      const response = await fetch("http://localhost:3000/api/course_outline", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data sent successfully!");
        const responseData = await response.json();
        setOutline(responseData);
        setFormData({
          text: "",
          number: "",
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
          Course Outline Generator
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to iLearn's Course Outline Generator - effortlessly convert
          textbook table of contents into a well-structured course outline.
          Simplify your curriculum planning, ensuring a seamless and organized
          learning journey. Ideal for educators and curriculum developers, this
          tool optimizes efficiency, saving you valuable time in course design.
          Elevate your planning experience with iLearn's Course Outline
          Generator – where creating a roadmap for impactful learning has never
          been easier.
        </p>
        <div className="px-10 pt-14">
          <form name="courseoutline" method="POST" onSubmit={handleFormSubmit}>
            <label htmlFor="text" className="font-bold">
              Enter table of content from the textbook
            </label>
            <br />
            <textarea
              name="text"
              className="textarea textarea-bordered mt-4 w-full bg-black mb-4"
              required
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="number" className="font-bold">
              Enter number of weeks
            </label>
            <br />
            <input
              type="number"
              placeholder="Type here"
              name="number"
              className="input input-bordered w-full max-w-xs mt-4 bg-black mb-4"
              required
              onChange={handleInputChange}
            />
            <br />
            <button className="btn btn-primary w-60 text-white mt-4">
              {loadingState ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Generate Course Outline"
              )}
            </button>
          </form>
        </div>
        {Outline && (
          <div className="px-10 pt-14">
            <div className="mockup-code">
              <pre className="px-10 pt-2 text-xl font-bold text-center uppercase">
                <code>Course Outline</code>
              </pre>
              <div className="divider divider-accent"></div>
              <pre className="px-10 pt-2">
                <code style={{ whiteSpace: "pre-wrap" }}>
                  {Outline.response}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseOutlineGenerator;
