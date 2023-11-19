import React from "react";

const Step = () => {
  return (
    <>
      <div className="bg-secondary py-16 px-6">
        <h1 className="text-center text-3xl font-bold">How iLearn Works?</h1>
        <div className="divider divider-primary"></div>
        <div className="flex justify-between pt-10">
          <ul className="steps steps-vertical lg:steps-horizontal mx-auto">
            <li className="step step-primary">User Registration</li>
            <li className="step step-primary">Explore the Content Library</li>
            <li className="step step-primary">Self-Paced Learning</li>
            <li className="step">Homework Assistance</li>
            <li className="step">Adaptive Learning</li>
            <li className="step">Achieving Academic Success</li>
            <li className="step">Continuous Improvement</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Step;
