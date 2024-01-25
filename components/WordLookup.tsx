"use client";
import React, { useState } from "react";

const WordLookup = () => {
  const [formData, setFormData] = useState({
    text: "",
  });

  const [Word, setWord] = useState("");

  const [loadingState, setLoadingState] = useState(false);
  const [WordDescription, setWordDescription] = useState();

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
      setWord(formData.text);
      const response = await fetch("http://localhost:3000/api/wordlookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data sent successfully!");
        const responseData = await response.json();
        setWordDescription(responseData);
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
          Word Lookup
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to iLearn&apos;s Word Lookup - effortlessly discover the
          meaning and usage of any word. Perfect for students and educators,
          this tool provides instant insights, enhancing your vocabulary in just
          a click. Elevate your language learning with iLearn&apos;s Word Lookup
          – where understanding words is made simple and efficient.
        </p>
        <div className="px-10 pt-14">
          <form name="wordlookup" method="POST" onSubmit={handleFormSubmit}>
            <label htmlFor="text" className="font-bold">
              Enter Word:
            </label>
            <br />
            <input
              type="text"
              placeholder="Type here"
              name="text"
              className="input input-bordered w-full max-w-xs mt-4 bg-black mb-4"
              onChange={handleInputChange}
              value={formData.text}
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
        {WordDescription && (
          <div className="px-10 pt-14">
            <div className="mockup-code">
              <pre className="px-10 pt-2 text-xl font-bold text-center uppercase">
                <code>{Word}</code>
              </pre>
              <pre className="px-10 pt-2">
                <code style={{ whiteSpace: "pre-wrap" }}>
                  {WordDescription.response}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WordLookup;
