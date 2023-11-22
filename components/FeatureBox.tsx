import React from "react";

interface BoxDetails {
  title: string;
  paragraph: string;
  svg?: string;
}

const FeatureBox = (details: BoxDetails) => {
  return (
    <>
      <div
        className="flex flex-row m-5 bg-grey p-5 rounded-lg max-w-sm"
        style={{
          backgroundColor: "#2b2d33",
          backgroundImage: 'url("architect.svg")',
        }}
      >
        <div className="flex flex-col ">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 m-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={details.svg}
              />
            </svg>
            <h1 className="text-lg">{details.title}</h1>
          </div>

          <p className="font-extralight text-sm text-left">
            {details.paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureBox;
