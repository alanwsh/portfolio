"use client";
import { Game } from "@/models/game";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Dock({ items }: { items: Array<Game> }) {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-16 items-end gap-3 rounded-2xl bg-gray-200 dark:bg-gray-700 px-12 pb-2"
    >
      {items.map((item, index) => (
        <AppIcon mouseX={mouseX} key={index} item={item} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, item }: { mouseX: MotionValue, item: Game }) {
  let ref = useRef<HTMLDivElement>(null);
  let [hovered, setHovered] = useState(false);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-100, 0, 100], [70, 100, 70]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width, height: width }}
      className="aspect-square rounded-md flex dark:bg-gray-400 justify-center items-center overflow-hidden"
    >
      <motion.div
        style={{ width, height: width }}
        className="relative w-full h-full cursor-pointer"
        onClick={item.onClick}
      >
        <Image src={item.icon} alt={item.name} layout="fill" objectFit="cover" />
      </motion.div>
      {hovered && (
        <div className="absolute bottom-1 left-0 right-0 text-center text-black dark:text-white bg-opacity-75 py-1">
          {item.name}
        </div>
      )}
    </motion.div>
  );
}
