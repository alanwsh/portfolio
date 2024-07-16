"use client"
import * as React from "react";
import Welcome from "@/components/info/welcome";
import Expertise from "@/components/info/expertise";
import RecentProjects from "@/components/info/recentProjects";

export default function Home() {
  return (
    <>
      <Welcome />
      <Expertise />
      <RecentProjects />
    </>
  );
}
