import '@/app/games/hangman/components/hangman.css';
import { motion } from "framer-motion";

export const Figure = ({ chances }: { chances: number }) => {
    const variants = {
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
    return (
        <svg height="250" width="200" className="figure-container">
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            {chances < 6  && (
                <motion.circle
                    cx="140"
                    cy="70"
                    r="20"
                    className="figure-part"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                />
            )}

            {chances < 5 && (
                <motion.line
                    x1="140"
                    y1="90"
                    x2="140"
                    y2="150"
                    className="figure-part"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                />
            )}

            {chances < 4 && (
                <motion.line
                    x1="140"
                    y1="110"
                    x2="110"
                    y2="120"
                    className="figure-part"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                />
            )}

            {chances < 3 && (
                <motion.line
                    x1="140"
                    y1="110"
                    x2="170"
                    y2="120"
                    className="figure-part"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                />
            )}

            {chances < 2 && (
                <motion.line
                    x1="140"
                    y1="150"
                    x2="110"
                    y2="190"
                    className="figure-part"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                />
            )}

            {chances < 1 && (
                <motion.line
                    x1="140"
                    y1="150"
                    x2="170"
                    y2="190"
                    className="figure-part"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                />
            )}
        </svg>
    );
};
