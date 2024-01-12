import React from "react";

const page = async () => {
  const response = await fetch("http://localhost:3000/api/healthchecker");
  const data = await response.json();
  // var data = JSON.stringify(jsondata, null, 2);

  return (
    <>
      <div>Student Main Page</div>
      <p>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </p>
    </>
  );
};

export default page;
