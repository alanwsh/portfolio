import * as React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import Welcome from "@/components/info/welcome";
import SkillSet from "@/components/info/skill";

export default function Home() {
  return (
    <>
      <Welcome />
      <SkillSet />
    </>
  );
}
