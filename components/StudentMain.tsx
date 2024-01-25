import React from "react";

const StudentMain = () => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-center text-3xl lg:text-4xl font-extrabold">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-lightblue to-primary">
            iLearn
          </span>
        </h1>
        <p className="text-center text-xs lg:text-sm font-thin mt-4">
          Your Ultimate Learning Companion
        </p>
        <p className="px-10 pt-14 text-justify">
          Embark on your journey to academic excellence today! Dive into a realm
          of endless possibilities by exploring the dynamic functionalities
          available on the left sidebar.This is your gateway to personalized
          learning, expert guidance, and collaborative study spaces. Seize the
          opportunity to tailor your educational experience and unlock a world
          where success is not just a goal, but a tangible achievement. Join us
          now and let iLearn be your compass to navigate the path of scholarly
          triumph.
        </p>
        <p className="px-10 pt-5 text-justify">
          Joining iLearn is not just a commitment to learning; it&apos;s a
          pledge to elevate your educational experience. With a user-friendly
          interface and powerful features at your fingertips, you can seamlessly
          access advanced features such as MCQ, case study, and short answer
          question generation, Title/Word Lookup for swift references, and
          Content Grammar Validation. Your academic success story begins here!
        </p>
      </div>
    </>
  );
};

export default StudentMain;
