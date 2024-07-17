"use client"
import * as React from "react";
import Welcome from "@/components/info/welcome";
import Expertise from "@/components/info/expertise";
import RecentProjects from "@/components/info/recentProjects";
import About from "@/components/info/about";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Expertise />
      <RecentProjects />
    </>
  );
}
