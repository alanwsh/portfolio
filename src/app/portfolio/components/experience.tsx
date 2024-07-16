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
import ProjectCard from "./ProjectCard";
import { Experience, experiences } from "@/models/experiences";
import { Project, Projects as allProjects } from "@/models/projects";
export default function Experiences() {
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

  const [activeStep, setActiveStep] = useState<number>(1);
  const [experience, setExperience] = useState<Experience>();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setExperience(experiences.find((exp, index) => index + 1 === activeStep));
  }, [activeStep]);

  useEffect(() => {
    setProjects(
      allProjects.filter((project) => project.experience_id === experience?.id)
    );
  }, [experience?.id]);

  const _handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const _handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const _convertWorkingDuration = (start: Date, end?: Date) => {
    let start_date = moment(start);
    let end_date = end ? moment(end) : moment();
    let total_months = end_date.diff(moment(start_date), "months");
    let service_duration =
      total_months >= 12
        ? `${Math.floor(total_months / 12)} years and ${
            total_months % 12
          } months`
        : `${total_months % 12} months`;
    return `${start_date.format("MMMM YYYY")} - ${end_date.format(
      "MMMM YYYY"
    )} (${service_duration})`;
  };

  return (
    <section className="flex flex-col items-center justify-between">
      <h3 className="text-4xl font-bold mb-6">Work Experiences</h3>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box className="relative rounded-full bg-primary-100 p-20 overflow-hidden mt-4 mx-6">
            <Box className="overflow-auto h-full w-full mx-6 flex">
              <Stepper activeStep={activeStep} orientation="vertical">
                {experiences.map((step, experience_index) => (
                  <Step key={step.title}>
                    <StepLabel
                      StepIconComponent={() => (
                        <StepIconComponent
                          icon={Work}
                          active={experience_index + 1 === activeStep}
                        />
                      )}
                    >
                      <div className="ml-3">
                        <Typography
                          variant="h5"
                          className="capitalize font-bold"
                        >
                          {step.title}
                        </Typography>
                        <Typography variant="subtitle1">
                          {step.company}
                        </Typography>
                        <Typography variant="subtitle1">
                          {_convertWorkingDuration(
                            step.start_date,
                            step.end_date
                          )}
                        </Typography>
                      </div>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div className="mb-2 flex flex-1 flex-col items-end justify-center">
                <IconButton
                  color="primary"
                  onClick={_handleBack}
                  disabled={activeStep <= 1}
                  aria-label="Previous Step"
                >
                  <KeyboardArrowUp sx={{ fontSize: 55 }} />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={_handleNext}
                  disabled={activeStep >= experiences.length}
                  aria-label="Next Step"
                >
                  <KeyboardArrowDown sx={{ fontSize: 55 }} />
                </IconButton>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} className="flex justify-center flex-col px-4">
          {experience?.content}
        </Grid>
        <div className="px-4 bg-gray-100 mt-12 pt-8 w-full">
          <Typography variant="h4" className="text-center font-bold">
            Projects that I worked on
          </Typography>
          <Grid container spacing={8} className="py-2 m-0 w-full">
            {projects?.map((project, index) => (
              <ProjectCard key={`${experience?.id}_${index}`} {...project} />
            ))}
          </Grid>
        </div>
      </Grid>
    </section>
  );
}
