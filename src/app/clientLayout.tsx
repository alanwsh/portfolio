// src/app/client-layout.tsx
"use client";

import { useEffect } from "react";
import { useAppContext } from "@/context/app";
import NavBar from "@/components/navbar";
import ImageModal from "@/components/imageModal";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ComingSoonModal from "@/components/ComingSoonModal";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import Footer from "@/components/Footer";
import LoadingModal from "@/components/LoadingModal";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state, setState } = useAppContext();
  const darkTheme = createTheme({
    palette: {
      mode: state.dark ? "dark" : "light",
    },
  });
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
    <ThemeProvider theme={darkTheme}>
      <body className={darkTheme.palette.mode}>
        <div
          className="dark:text-white bg-gray-100 dark:bg-black"
          style={{ minHeight: "100vh" }}
          id="main-container"
        >
          <NavBar />
          {children}
        </div>
        <ImageModal />
        <ComingSoonModal />
        <LoadingModal />
        <Footer />
      </body>
    </ThemeProvider>
  );
}
