import * as React from "react";
import { motion, Reorder } from "framer-motion";
import { SkillTabProps } from "@/models/skillCategories";
import { useAppContext } from "@/context/app";
import classNames from "classnames";

export const Tab = ({ item, onClick, isSelected }: SkillTabProps) => {
  const { state } = useAppContext();

  return (
    <Reorder.Item
      value={item}
      id={item.title}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.15 },
      }}
      exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
      // whileDrag={{ backgroundColor: "#e3e3e3" }}
      className={classNames(
        "font-bold",
        "dark:bg-gray-700",
        { "dark:bg-black": isSelected },
      )}
      onPointerDown={onClick}
    >
      <motion.span
        layout="position"
        style={{ textAlign: state.mobile ? "center" : "start" }}
      >
        {item.icon}&nbsp;
        {`${item.title}`}
      </motion.span>
    </Reorder.Item>
  );
};
