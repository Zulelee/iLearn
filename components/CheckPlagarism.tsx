"use client";
import React, { useState } from "react";

const CheckPlagarism = () => {
  const [contentType, setContentType] = useState<string>();
  const [loadingState, setLoadingState] = useState(false);
  const [PlagiarismReport, setPlagiarismReport] = useState();
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
          "http://localhost:3000/api/check_plagiarism_text",
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
          setPlagiarismReport(responseData);
          setFormData({ text: "", file: "" });
        } else {
          console.error("Failed to send form data");
        }
      }

      if (contentType === "file") {
        const formData = new FormData();
        formData.append("file", e.target.file.files[0]);
        const response = await fetch(
          "http://localhost:3000/api/check_plagiarism_file",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          console.log("Form data sent successfully!");
          // Optionally, you can reset the form data state here
          const responseData = await response.json();
          setPlagiarismReport(responseData);
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
            <form
              name="plagiarismcheck"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <label htmlFor="text" className="font-bold">
                Enter Content
              </label>
              <br />
              <textarea
                name="text"
                className="textarea textarea-bordered mt-4 w-full bg-black"
                onChange={handleInputChange}
                required
              ></textarea>
              <button className="btn btn-primary w-60 text-white mt-4">
                {loadingState ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Check Plagiarism"
                )}
              </button>
            </form>
          )}

          {contentType === "file" && (
            <form
              name="plagiarismcheck"
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
              <button className="btn btn-primary w-60 text-white mt-4">
                {loadingState ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Check Plagiarism"
                )}
              </button>
            </form>
          )}
        </div>

        {PlagiarismReport && (
          <div className="px-10 pt-10">
            <div className="divider divider-primary pb-10"></div>
            <h2 className="text-xl font-bold text-center">Plagiarism Report</h2>
            <div className="flex justify-around mt-10">
              <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary w-32 h-32"
                style={{ "--value": PlagiarismReport.percentPlagiarism }}
                role="progressbar"
              >
                {PlagiarismReport.percentPlagiarism}%
              </div>
              <div>
                <div className="mockup-code px-5 max-w-2xl">
                  <pre data-prefix="$">
                    <code>Citations:</code>
                  </pre>
                  {PlagiarismReport.citations.map((citation, index) => (
                    <pre key={index} data-prefix=">">
                      <code
                        style={{ whiteSpace: "pre-wrap" }}
                      >{`Title: ${citation.title}, URL: ${citation.url}`}</code>
                    </pre>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckPlagarism;
