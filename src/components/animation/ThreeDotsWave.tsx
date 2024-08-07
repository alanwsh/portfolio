import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
};

const loadingCircle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  borderRadius: "0.25rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.2,
  repeatDelay: 1,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function ThreeDotsWave() {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        className="bg-black dark:bg-white"
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={{ ...loadingCircleTransition }}
      />
      <motion.span
        className="bg-black dark:bg-white"
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={{ ...loadingCircleTransition }}
      />
      <motion.span
        className="bg-black dark:bg-white"
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={{ ...loadingCircleTransition }}
      />
    </motion.div>
  );
}
