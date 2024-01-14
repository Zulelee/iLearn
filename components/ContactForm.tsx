"use client";
import React, { ChangeEvent, Suspense, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    question: "",
  });

  const [loadingState, setLoadingState] = useState(false);
  const [messageDisplay, setMessageDisplay] = useState(false);

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
        "https://formsubmit.co/theteamilearn@gmail.com",
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
        setMessageDisplay(true);
        setFormData({
          fullName: "",
          email: "",
          question: "",
        });
        setTimeout(() => {
          setMessageDisplay(false);
        }, 3000);
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
      <div className="bg-secondary">
        <div className="max-w-3xl m-auto py-16 px-10">
          <div className="mockup-window border bg-secondary">
            <div className="flex flex-col content-center align-middle px-4 py-16 bg-grey">
              <h1 className="text-xl font-bold text-center mb-10">
                Having Questions? Contact Us!
              </h1>
              <form
                name="contactForm"
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <div className="flex flex-col mx-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input w-full my-3 bg-secondary"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="input w-full my-3 bg-secondary"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <textarea
                    className="textarea w-full my-3 bg-secondary"
                    placeholder="Your Question"
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                  ></textarea>
                  <button
                    className="btn btn-primary my-3 text-white font-bold"
                    type="submit"
                  >
                    {loadingState ? (
                      <span className="loading loading-spinner loading-xs"></span>
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </form>
              {messageDisplay && (
                <div className="text-green-500 font-bold text-center mt-4">
                  Message sent successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
