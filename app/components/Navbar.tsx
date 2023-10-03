import React from "react";

const navbar = () => {
  return (
    <div className="bg-purple h-16 flex items-center place-content-between">
      <span className="text-white text-3xl mx-5">iLearn</span>
      <div className="mx-5">
        <button className="hover:bg-black p-5">About Us</button>
        <button className="hover:bg-black p-5">Try me now</button>
      </div>
    </div>
  );
};

export default navbar;
