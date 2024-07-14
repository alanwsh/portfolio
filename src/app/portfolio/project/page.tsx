"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { KeyboardArrowUp, KeyboardArrowDown, Work } from "@mui/icons-material";
import { Grid, StepIconProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import ProjectCard from "../components/ProjectCard";
import { Experience, experiences } from "@/models/experiences";
import { Project, Projects as allProjects } from "@/models/projects";
export default function Projects() {
  const StepIcon = styled("div")<{ active: boolean }>(({ theme, active }) => ({
    color: active ? theme.palette.primary.main : "lightgrey",
  }));

  const StepIconComponent: React.FC<StepIconProps> = ({
    icon: IconComponent,
    active = false,
  }) => {
    return (
      <StepIcon active={!!active}>
        <IconComponent />
      </StepIcon>
    );
  };

  return (
    <section className="flex flex-col items-center justify-between">
      <h3 className="text-4xl font-bold mb-6">Projects</h3>
      <Grid container spacing={3} className="px-4" sx={{margin: 0}}>
        {allProjects?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Grid>
    </section>
  );
}
