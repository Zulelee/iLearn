"use client";
import React, { useState } from "react";

const GrammarChecker = () => {
  const [contentType, setContentType] = useState<string>();
  const [loadingState, setLoadingState] = useState(false);
  const [GrammarReport, setGrammarReport] = useState();
  const [formData, setFormData] = useState({
    text: "",
    file: "",
  });

  const handleSetContentType = (type: string) => {
    setContentType(type);
  };

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
      if (contentType === "text") {
        const response = await fetch(
          "http://localhost:3000/api/check_grammar_text",
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
          // Optionally, you can reset the form data state here
          const responseData = await response.json();
          setGrammarReport(responseData);
          setFormData({ text: "", file: "" });
        } else {
          console.error("Failed to send form data");
        }
      }

      if (contentType === "file") {
        const formData = new FormData();
        formData.append("file", e.target.file.files[0]);
        const response = await fetch(
          "http://localhost:3000/api/check_grammar_file",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          console.log("Form data sent successfully!");
          // Optionally, you can reset the form data state here
          const responseData = await response.json();
          setGrammarReport(responseData);
          setFormData({ text: "", file: "" });
        } else {
          console.error("Failed to send form data");
        }
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
          Grammar Checker
        </h1>
        <div className="divider divider-primary"></div>
        <p className="px-10 pt-14 text-justify">
          Welcome to the Grammar Checker feature in iLearn – your key to
          refining and perfecting written communication. In the pursuit of
          academic excellence, iLearn&apos;s Grammar Checker serves as your
          vigilant companion, ensuring that your content adheres to grammatical
          precision and linguistic clarity. Whether you are a student crafting
          assignments or an educator reviewing submissions, our advanced grammar
          validation technology meticulously analyzes your text, offering
          suggestions for improvement. Elevate the quality of your writing,
          foster effective communication, and embrace the confidence that comes
          with impeccable grammar. iLearn&apos;s Grammar Checker is where
          linguistic finesse meets educational innovation.
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
            <form name="grammarcheck" method="POST" onSubmit={handleFormSubmit}>
              <label htmlFor="text" className="font-bold">
                Enter Content
              </label>
              <br />
              <textarea
                name="text"
                className="textarea textarea-bordered mt-4 w-full bg-black"
                onChange={handleInputChange}
                value={formData.text}
                required
              ></textarea>
              <button className="btn btn-primary w-40 text-white mt-4">
                {loadingState ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Check Grammar"
                )}
              </button>
            </form>
          )}

          {contentType === "file" && (
            <form
              name="grammarcheck"
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
                className="file-input file-input-bordered w-full max-w-xs mt-4 bg-black"
                onChange={handleInputChange}
                required
              />
              <br />
              <button className="btn btn-primary w-40 text-white mt-4">
                {loadingState ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Check Grammar"
                )}
              </button>
            </form>
          )}
        </div>
        {GrammarReport && (
          <div className="px-10 pt-14">
            <div className="mockup-code">
              <pre className="px-10 pt-2 text-xl font-bold text-center uppercase">
                <code>Grammar Report</code>
              </pre>
              <div className="divider divider-accent"></div>
              <pre className="px-10 pt-2">
                <code style={{ whiteSpace: "pre-wrap" }}>
                  {GrammarReport.response}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GrammarChecker;
