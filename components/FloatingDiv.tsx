import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import "./Benefits.css";

import React from "react";

interface Input {
  title: string;
  paragraph: string;
  flipfunction: () => void;
  isFlipped: boolean;
  isAnimating: boolean;
  setIsFlipped: Dispatch<SetStateAction<boolean>>;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
}

const FloatingDiv = (input: Input) => {
  return (
    <motion.div
      initial={{ y: -7 }}
      animate={{ y: 7 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        repeatType: "reverse",
        ease: "easeInOut",
        type: "spring",
      }}
      className="mt-10"
    >
      <div className="cursor-pointer">
        <div
          className="mx-3 rounded-3xl flip-card w-[300px] h-[350px]"
          onMouseEnter={input.flipfunction}
          onMouseLeave={input.flipfunction}
        >
          <motion.div
            className="flip-card-inner w-[100%] h-[100%] shadow-md shadow-black rounded-2xl"
            initial={false}
            animate={{ rotateY: input.isFlipped ? 180 : 360 }}
            transition={{ duration: 0.3, animationDirection: "normal" }}
            onAnimationComplete={() => input.setIsAnimating(false)}
          >
            <div className="flex flip-card-front w-[100%] h-[100%] p-4 bg-secondary justify-center items-center rounded-2xl">
              <h3 className="font-bold text-xl text-center">{input.title}</h3>
            </div>
            <div className="flex flip-card-back w-[100%] h-[100%] p-4 bg-secondary justify-center items-center rounded-2xl">
              <p className="text-justify font-thin text-sm">
                {input.paragraph}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingDiv;
