"use client";
import React from "react";
import { Navbar, Footer, FeatureBox } from "@/components";
import "./page.css";
import Fade from "react-reveal/Fade";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar></Navbar>
      <div
        className="hero h-96"
        style={{
          backgroundImage: 'url("blackpurple.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <Fade left>
              <h1 className="mb-5 text-4xl lg:text-7xl font-extrabold">
                Features
              </h1>
            </Fade>
          </div>
        </div>
      </div>
      <div className="container text-center my-16 p-5">
        <Fade>
          <div className="m-auto my-20">
            <Fade>
              <h2 className="my-10 text-transparent bg-clip-text bg-gradient-to-br from-lightblue to-primary text-4xl font-bold">
                Content Generation Tools
              </h2>
              <p className="text-left mx-10 my-10 md:mx-15 lg:mx-40">
                Unleashing a spectrum of question diversity, this feature
                empowers users to effortlessly create Multiple Choice Questions
                (MCQs), Short Answer Questions (SAQs), and detailed case
                studies. It enriches understanding and analytical skills,
                providing a dynamic and interactive learning experience.
              </p>
              <div className="flex justify-center flex-wrap">
                <FeatureBox
                  title="MCQ Generation"
                  paragraph="Unlock the power of question diversity. Easily create a
                multitude of Multiple Choice Questions (MCQs) to enrich your
                understanding and test your knowledge on any subject."
                  svg="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                ></FeatureBox>
                <FeatureBox
                  title="SAQ Generation"
                  paragraph="Unlock the power of question diversity. Easily create a
                multitude of Short Answer Questions (SAQs) to enrich your
                understanding and test your knowledge on any subject."
                  svg="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25
              "
                ></FeatureBox>
                <FeatureBox
                  title="Case Study Generation"
                  paragraph="Immerse yourself in practical applications. Generate detailed case studies effortlessly, providing a deep dive into real-world scenarios and enhancing your analytical skills."
                  svg="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                ></FeatureBox>
              </div>
            </Fade>
          </div>
          <div className="divider divider-accent mx-10"></div>
          <div className="m-auto my-20">
            <Fade>
              <h2 className="my-10 text-transparent bg-clip-text bg-gradient-to-br from-lightblue to-primary text-4xl font-bold">
                Information Enrichment
              </h2>
              <p className="text-left mx-10 my-10 md:mx-15 lg:mx-40">
                Elevating knowledge instantly, this component facilitates a
                comprehensive exploration of any topic through title/word
                lookup. It creates a robust understanding, fostering an enriched
                and nuanced perspective.
              </p>
              <div className="flex justify-center flex-wrap ">
                <FeatureBox
                  title="Title/Word Lookup"
                  paragraph="Elevate your knowledge instantly. Utilize the title/word lookup feature to gain comprehensive details on any topic, ensuring a robust understanding of the subject matter."
                  svg="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></FeatureBox>
                <FeatureBox
                  title="Question Answering"
                  paragraph="Foster dynamic learning. Pose questions and receive accurate, insightful answers, creating an interactive learning environment tailored to your inquiries."
                  svg="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                ></FeatureBox>
              </div>
            </Fade>
          </div>

          <div className="divider divider-accent mx-10"></div>
          <div className="m-auto my-20">
            <Fade>
              <h2 className="my-10 text-transparent bg-clip-text bg-gradient-to-br from-lightblue to-primary text-4xl font-bold">
                Content Enhancement and Integrity
              </h2>
              <p className="text-left mx-10 my-10 md:mx-15 lg:mx-40">
                Streamlining written work, this feature ensures grammatical
                correctness and upholds content authenticity. The grammar
                validation tool refines written content to professional
                standards, while the plagiarism checker and remover maintain the
                integrity of educational submissions.
              </p>
              <div className="flex justify-center flex-wrap">
                <FeatureBox
                  title="Grammar Validation"
                  paragraph="Perfect your written work effortlessly. Ensure the grammatical correctness of your content with the grammar validation feature, refining your work to professional standards."
                  svg="M4.5 12.75l6 6 9-13.5"
                ></FeatureBox>
                <FeatureBox
                  title="Plagiarism Checker and Remover"
                  paragraph="Uphold content authenticity. Check your work for plagiarism and, if necessary, efficiently remove any instances, maintaining the integrity of your educational submissions."
                  svg="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                ></FeatureBox>
              </div>
            </Fade>
          </div>

          <div className="divider divider-accent mx-10"></div>
          <div className="m-auto my-20">
            <Fade>
              <h2 className="my-10 text-transparent bg-clip-text bg-gradient-to-br from-lightblue to-primary text-4xl font-bold">
                Course Planning and Guidance
              </h2>
              <p className="text-left mx-10 my-10 md:mx-15 lg:mx-40">
                Simplifying study strategies, this component generates
                comprehensive course outlines, roadmaps, and objectives. By
                providing structure and clarity, it guides users strategically
                through their educational journey, fostering purposeful learning
                paths.
              </p>
              <div className="flex justify-center flex-wrap">
                <FeatureBox
                  title="Course Outline Generation"
                  paragraph="Simplify your study strategy. Generate comprehensive course outlines by uploading a PDF, streamlining your studies and facilitating a structured approach to learning."
                  svg="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></FeatureBox>
                <FeatureBox
                  title="Course Roadmap and Objectives Generation"
                  paragraph="Navigate your educational journey strategically. Generate a roadmap and gain clear objectives for your courses, ensuring a guided and purposeful approach to your learning path"
                  svg="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                ></FeatureBox>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default page;
