// components/Card.js
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

interface CardProps {
  children: React.ReactNode
  index: number;
}
const Fact: React.FC<CardProps> = ({ children, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      className="card bg-white rounded-lg shadow-lg p-4 flex flex-col px-8 w-full"
      style={{
        zIndex: isHovered ? 1000 : 100 - index,
        marginLeft: isDesktop ? index * -20 : '',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {
        children
      }
    </motion.button>
  );
};

export default Fact;
