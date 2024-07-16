"use client";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectCard from "../components/ProjectCard";
import { Projects as allProjects } from "@/models/projects";
export default function Projects() {
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
