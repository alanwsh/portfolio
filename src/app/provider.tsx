"use client";
import React, { ReactNode } from "react";
import { AppContextProvider } from "@/context/app";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <AppContextProvider>{children}</AppContextProvider>;
}
