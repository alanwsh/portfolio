import ProjectCard from "@/app/portfolio/components/ProjectCard";
import { expertises } from "@/models/expertise";
import { Project, Projects } from "@/models/projects";
import { skills } from "@/models/skills";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RecentProjects() {

  const [recentProjects, setRecentProjects] = useState<Project[]>([]);

  useEffect(() => {
    setRecentProjects(Projects.filter(p => p.recent));
  }, []);

  return (
    <section className="flex items-center justify-between p-6 md:p-12 bg-gray-100">
      <div className="w-full">
        <h3 className="text-2xl font-bold mb-6">My Recent Projects</h3>
        <Grid container>
          {recentProjects.map((project, index) => (
              <ProjectCard {...project} key={index} />
          ))}
          <Grid item xs={12} className="flex justify-center mt-4">
            <Button
              variant="contained"
              style={{ borderRadius: 20, textTransform: "none" }}
              size="large"
              href="/portfolio/project"
            >
              Check all the projects
            </Button>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
