"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Benefits.css";
import FloatingDiv from "./FloatingDiv";

const Benefits = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isAnimating1, setIsAnimating1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isAnimating2, setIsAnimating2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isAnimating3, setIsAnimating3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isAnimating4, setIsAnimating4] = useState(false);

  function handleFlip1() {
    if (!isAnimating1) {
      setIsFlipped1(!isFlipped1);
      setIsAnimating1(true);
    }
  }

  function handleFlip2() {
    if (!isAnimating2) {
      setIsFlipped2(!isFlipped2);
      setIsAnimating2(true);
    }
  }

  function handleFlip3() {
    if (!isAnimating3) {
      setIsFlipped3(!isFlipped3);
      setIsAnimating3(true);
    }
  }

  function handleFlip4() {
    if (!isAnimating4) {
      setIsFlipped4(!isFlipped4);
      setIsAnimating4(true);
    }
  }

  return (
    <>
      <div className="bg-primary py-16 px-6" id="benefits">
        <h1 className="text-center text-4xl font-bold">Key Benefits</h1>
        <div className="divider"></div>
        <div className="flex flex-1 flex-row flex-wrap justify-center mt-10">
          <FloatingDiv
            flipfunction={handleFlip1}
            title="Enhanced Learning Resources"
            paragraph="iLearn provides students with a vast library of question
                      banks, study guides, and practice problems covering a wide
                      range of subjects. This extensive collection of resources
                      enables students to practice and develop their skills
                      independently, making it easier to master new concepts and
                      improve their academic performance."
            isAnimating={isAnimating1}
            isFlipped={isFlipped1}
            setIsAnimating={setIsAnimating1}
            setIsFlipped={setIsFlipped1}
          ></FloatingDiv>
          <FloatingDiv
            flipfunction={handleFlip2}
            title="Personalized Homework Help"
            paragraph="iLearn offers personalized homework help through its
            advanced AI Chatbot, available 24/7. This feature ensures
            that students can receive guidance and support whenever
            they need it, enhancing their understanding of course
            materials and providing a valuable resource for answering
            questions and solving problems."
            isAnimating={isAnimating2}
            isFlipped={isFlipped2}
            setIsAnimating={setIsAnimating2}
            setIsFlipped={setIsFlipped2}
          ></FloatingDiv>
          <FloatingDiv
            flipfunction={handleFlip3}
            title="Support for Teachers"
            paragraph="iLearn assists teachers by generating automated course
            outlines, roadmaps, and course objectives. This feature
            streamlines the teaching process, saves time for
            educators, and ensures that students receive a structured
            and comprehensive education that covers all necessary
            topics and concepts. It empowers teachers to provide a
            more organized and effective learning experience."
            isAnimating={isAnimating3}
            isFlipped={isFlipped3}
            setIsAnimating={setIsAnimating3}
            setIsFlipped={setIsFlipped3}
          ></FloatingDiv>
          <FloatingDiv
            flipfunction={handleFlip4}
            title="User-Friendly"
            paragraph="iLearn is designed to be user-friendly, making it easy for
            students to navigate and find the resources they need.
            Additionally, the platform employs AI technology to
            personalize the learning experience for each student,
            adapting to their individual learning style and pace. This
            personalization ensures that students remain engaged and
            motivated to learn, making the educational journey more
            effective and enjoyable."
            isAnimating={isAnimating4}
            isFlipped={isFlipped4}
            setIsAnimating={setIsAnimating4}
            setIsFlipped={setIsFlipped4}
          ></FloatingDiv>
        </div>
      </div>
    </>
  );
};

export default Benefits;
