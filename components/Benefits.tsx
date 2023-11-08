import React from "react";

const Benefits = () => {
  return (
    <>
      <div className="bg-primary py-16 px-6" id="benefits">
        <h1 className="text-center text-3xl font-bold">Key Benefits</h1>
        <div className="divider"></div>
        <div className="flex flex-1 flex-row flex-wrap justify-center ">
          <div className="pt-10 p-6 mt-10 max-w-xs mx-3 bg-secondary rounded-3xl hover:drop-shadow-2xl">
            <h3 className="text-center font-bold">
              Enhanced Learning Resources
            </h3>
            <div className="divider"></div>
            <p className="text-justify font-thin text-sm">
              iLearn provides students with a vast library of question banks,
              study guides, and practice problems covering a wide range of
              subjects. This extensive collection of resources enables students
              to practice and develop their skills independently, making it
              easier to master new concepts and improve their academic
              performance.
            </p>
          </div>
          <div className="pt-10 p-6 mt-10 max-w-xs mx-3 bg-secondary rounded-3xl hover:drop-shadow-2xl">
            <h3 className="text-center font-bold">
              Personalized Homework Help
            </h3>
            <div className="divider"></div>
            <p className="text-justify font-thin text-sm">
              iLearn offers personalized homework help through its advanced AI
              Chatbot, available 24/7. This feature ensures that students can
              receive guidance and support whenever they need it, enhancing
              their understanding of course materials and providing a valuable
              resource for answering questions and solving problems.
            </p>
          </div>
          <div className="pt-10 p-6 mt-10 max-w-xs mx-3 bg-secondary rounded-3xl hover:drop-shadow-2xl">
            <h3 className="text-center font-bold">Support for Teachers</h3>
            <div className="divider"></div>
            <p className="text-justify font-thin text-sm">
              iLearn assists teachers by generating automated course outlines,
              roadmaps, and course objectives. This feature streamlines the
              teaching process, saves time for educators, and ensures that
              students receive a structured and comprehensive education that
              covers all necessary topics and concepts. It empowers teachers to
              provide a more organized and effective learning experience.
            </p>
          </div>
          <div className="pt-10 p-6 mt-10 max-w-xs mx-3 bg-secondary rounded-3xl hover:drop-shadow-2xl">
            <h3 className="text-center font-bold">User-Friendly</h3>
            <div className="divider"></div>
            <p className="text-justify font-thin text-sm">
              iLearn is designed to be user-friendly, making it easy for
              students to navigate and find the resources they need.
              Additionally, the platform employs AI technology to personalize
              the learning experience for each student, adapting to their
              individual learning style and pace. This personalization ensures
              that students remain engaged and motivated to learn, making the
              educational journey more effective and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
