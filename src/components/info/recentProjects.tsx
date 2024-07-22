import ProjectCard, { LoadingProjectCard } from "@/app/portfolio/components/ProjectCard";
import { Project, Projects } from "@/models/projects";
import {
  Button,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function RecentProjects() {
  const [recentProjects, setRecentProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecentProjects(Projects.filter((p) => p.recent));
    setLoading(false);
  }, []);

  return (
    <section className="flex items-center justify-between p-6 md:p-12">
      <div className="w-full">
        <h3 className="text-2xl font-bold mb-6">My Recent Projects</h3>
        <Grid container spacing={3}>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <LoadingProjectCard key={index}/>
              ))
            : recentProjects.map((project, index) => (
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
