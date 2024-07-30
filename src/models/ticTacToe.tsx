import { motion } from "framer-motion";
export type Player = {
  id: number;
  color: string;
  icon: React.ReactElement;
};

export const Game = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom: number) => ({
    pathLength: 2,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: custom, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  }),
};

export const Circle = ({ color }: { color?: string }) => (
  <motion.svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    initial="hidden"
    animate="visible"
    custom={1} // Custom value for this specific animation
  >
    <motion.circle
      cx="30"
      cy="30"
      r="30"
      stroke={color || "#ff0055"}
      variants={draw}
      fill="none"
    />
  </motion.svg>
);

export const Times = ({ color }: { color?: string }) => (
  <motion.svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    initial="hidden"
    animate="visible"
  >
    <motion.line
      x1="0"
      y1="0"
      x2="50"
      y2="50"
      stroke={color || "#00cc88"}
      variants={draw}
      custom={1} // Duration for the first line
    />
    <motion.line
      x1="0"
      y1="50"
      x2="50"
      y2="0"
      stroke={color || "#00cc88"}
      variants={draw}
      custom={1} // Duration for the second line
      transition={{ delay: 1 }} // Delay for the second line to start after the first one finishes
    />
  </motion.svg>
);