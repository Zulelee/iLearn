"use client";
import React from "react";
import { Navbar, Footer, FeatureBox } from "@/components";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        className="bg-secondary hero h-96"
        style={{
          backgroundImage: 'url("blackpurple.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <Fade top>
              <h1 className="mb-5 text-4xl lg:text-7xl font-extrabold">
                About Us
              </h1>
            </Fade>
          </div>
        </div>
      </div>
      <div className="bg-secondary px-16 py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        >
          <p className="text-md max-w-2xl text-center m-auto">
            Welcome to the world of iLearn, where education meets innovation. In
            an era marked by the swift evolution of technology, accessing
            information has become easier than ever. However, the challenge
            persists—many students find it difficult to harness the wealth of
            online resources effectively, impacting their academic journey.
            Recognizing this gap, we embarked on a mission to revolutionize
            education through iLearn.
          </p>
        </motion.div>
      </div>

      <div className="bg-primary px-16 py-28">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        >
          <FeatureBox
            title="Our Mission"
            paragraph="iLearn is not just another online education platform; it's a visionary solution to the challenges students and educators face in today's dynamic learning landscape. Our mission is to make education accessible and engaging for students of all ages and backgrounds."
          ></FeatureBox>
          <FeatureBox
            title="The iLearn Advantage"
            paragraph="At the heart of iLearn is a cutting-edge AI-based platform that offers a vast library of resources—question banks, study guides, and practice problems—all meticulously curated to empower students on their educational journey. We understand the struggles students face in mastering new concepts and skills, and iLearn is here to address those challenges."
          ></FeatureBox>
          <FeatureBox
            title="Bridging the Learning Gap"
            paragraph="iLearn is more than just a repository of educational materials. We bridge the gap between traditional classroom settings and independent learning by providing personalized homework help through our advanced AI Chatbot, available 24/7. Our platform adapts to each student's unique learning style and pace, ensuring an engaging and effective learning experience."
          ></FeatureBox>
        </motion.div>
      </div>
      <div className="bg-secondary px-16 py-28">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        >
          <FeatureBox
            title="Supporting Educators"
            paragraph="iLearn isn't just for students; we support educators in their teaching journey. Our platform generates automated course outlines, roadmaps, and objectives, empowering teachers to deliver structured and organized classes. This not only saves time but also ensures that students receive a comprehensive education."
          ></FeatureBox>
          <FeatureBox
            title="User-Friendly Design"
            paragraph="Designed with simplicity in mind, iLearn boasts a user-friendly interface, allowing students to effortlessly navigate and find the resources they need. The incorporation of AI technology further enhances the learning experience, creating a personalized journey for each student."
          ></FeatureBox>
        </motion.div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default page;
