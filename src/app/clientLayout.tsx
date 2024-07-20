// src/app/client-layout.tsx
"use client";

import { useEffect } from "react";
import { useAppContext } from "@/context/app";
import NavBar from "@/components/navbar";
import ImageModal from "@/components/imageModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { state, setState } = useAppContext();

  useEffect(() => {
    const handleResize = () => {
      setState((prevState) => ({
        ...prevState,
        mobile: window.innerWidth < 768,
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setState]);

  return (
    <>
      <NavBar />
      {children}
      <ImageModal />
    </>
  );
}
