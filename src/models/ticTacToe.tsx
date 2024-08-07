import { motion } from "framer-motion";

type ChipColor = "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";

export type Player = {
  id: number;
  color: ChipColor;
  name: string;
  icon: React.ReactElement;
  iconColor: string;
  bot?: boolean;
};

export class WinningLine {
  width: string;
  height: string;
  top: string;
  left: string;
  transform?: string;
  winner: Player | null;

  constructor({ width, height, top, left, winner, transform }: { width: string; height: string; top: string; left: string, winner: Player | null, transform?: string | undefined }) {
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
    this.transform = transform;
    this.winner = winner;
  }
}

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

export const Circle = ({ color, size = 80 }: { color?: string, size?: number }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    initial="hidden"
    animate="visible"
    custom={1} // Custom value for this specific animation
  >
    <motion.circle
      cx={size/2}
      cy={size/2}
      r={size/2}
      stroke={color || "#ff0055"}
      variants={draw}
      fill="none"
    />
  </motion.svg>
);

export const Times = ({ color, size = 90 }: { color?: string, size?: number }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    initial="hidden"
    animate="visible"
  >
    <motion.line
      x1="0"
      y1="0"
      x2={size}
      y2={size}
      stroke={color || "#00cc88"}
      variants={draw}
      custom={1} // Duration for the first line
    />
    <motion.line
      x1="0"
      y1={size}
      x2={size}
      y2="0"
      stroke={color || "#00cc88"}
      variants={draw}
      custom={1} // Duration for the second line
      transition={{ delay: 1 }} // Delay for the second line to start after the first one finishes
    />
  </motion.svg>
);