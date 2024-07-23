import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { KeyboardArrowUp, KeyboardArrowDown, Work } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import ProjectCard, { LoadingProjectCard } from "./ProjectCard";
import { Experience, experiences } from "@/models/experiences";
import { Project, Projects as allProjects } from "@/models/projects";
import { useAppContext } from "@/context/app";
import { motion } from "framer-motion";
export default function Experiences() {
  const { state } = useAppContext();

  type StepIconComponentProps = {
    icon: React.ComponentType; // This allows passing any valid React component
    active?: boolean;
  };

  const StepIcon = styled("div")<{ active: boolean }>(({ theme, active }) => ({
    color: active ? theme.palette.primary.main : "lightgrey",
  }));

  const StepIconComponent: React.FC<StepIconComponentProps> = ({
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
    setExperience(experiences.find((exp, index) => index + 1 === activeStep));
  }, [activeStep]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProjects(
        allProjects.filter(
          (project) => project.experience_id === experience?.id
        )
      );
      setLoading(false);
    }, 500);
  }, [experience?.id]);

  const _handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const _handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const MobileStepper = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const maxScroll = 100;
    const scrollPercentage = Math.min(scrollY / maxScroll, 1);1

    const lightStartColor = [224, 242, 254];
    const lightEndColor = [55, 65, 81];
    const darkStartColor = [55, 65, 81];
    const darkEndColor = [224, 242, 254]; 
    const lightStartTextColor = [0, 0, 0];
    const lightEndTextColor = [255, 255, 255];
    const darkStartTextColor = [255, 255, 255];
    const darkEndTextColor = [0, 0, 0];

    const newColor = state.dark
      ? darkStartColor.map((start, index) => {
          const end = darkEndColor[index];
          return Math.round(start + (end - start) * scrollPercentage);
        })
      : lightStartColor.map((start, index) => {
          const end = lightEndColor[index];
          return Math.round(start + (end - start) * scrollPercentage);
        });
    const newTextColor = state.dark
      ? darkStartTextColor.map((start, index) => {
          const end = darkEndTextColor[index];
          return Math.round(start + (end - start) * scrollPercentage);
        })
      : lightStartTextColor.map((start, index) => {
          const end = lightEndTextColor[index];
          return Math.round(start + (end - start) * scrollPercentage);
        });

    const lightStartButtonColor = [33, 150, 243];
    const lightEndButtonColor = [255, 255, 255];
    const darkStartButtonColor = [255, 255, 255];
    const darkEndButtonColor = [33, 150, 243];

    const newButtonColor = state.dark
      ? darkStartButtonColor.map((start, index) => {
          const end = darkEndButtonColor[index];
          return Math.round(start + (end - start) * scrollPercentage);
        })
      : lightStartButtonColor.map((start, index) => {
          const end = lightEndButtonColor[index];
          return Math.round(start + (end - start) * scrollPercentage);
        });
    const variants = {
      scroll: {
        backgroundColor: `rgb(${newColor.join(",")})`,
        transition: { duration: 0 },
      },
      button: {
        color: `rgb(${newButtonColor.join(",")})`,
        transition: { duration: 0.5 },
      },
    };

    let working_duration = _convertWorkingDuration(
      experiences[activeStep - 1].start_date,
      experiences[activeStep - 1].end_date
    );
    return (
      <Grid item xs={12} xl={4} className="sticky top-12 z-50">
        <Box className="">
          <motion.div
            variants={variants}
            animate="scroll"
            className="relative rounded-3xl mt-4 mx-6 sticky top-64 flex"
          >
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step key={experiences[activeStep - 1].title}>
                <StepLabel StepIconComponent={() => null}>
                  <div
                    className="ml-3"
                    style={{ color: `rgb(${newTextColor.join(",")})` }}
                  >
                    <Typography variant="h6" className="capitalize font-bold">
                      {experiences[activeStep - 1].title}
                    </Typography>
                    <Typography variant="subtitle1">
                      {experiences[activeStep - 1].company}
                    </Typography>
                    <Typography variant="subtitle1">
                      {working_duration.date}
                    </Typography>
                    <Typography variant="subtitle1">
                      {working_duration.duration}
                    </Typography>
                  </div>
                </StepLabel>
              </Step>
            </Stepper>
            <motion.div
              variants={variants}
              animate="button"
              className="mb-2 flex flex-1 flex-col items-end justify-center"
            >
              <IconButton
                color="primary"
                onClick={_handleBack}
                disabled={activeStep <= 1}
                aria-label="Previous Step"
                style={{
                  color:
                    activeStep <= 1
                      ? "#666666" // Disabled text color
                      : `rgb(${newButtonColor.join(",")})`, // Text color
                }}
              >
                <KeyboardArrowUp sx={{ fontSize: 35 }} />
              </IconButton>
              <IconButton
                color="primary"
                onClick={_handleNext}
                disabled={activeStep >= experiences.length}
                aria-label="Next Step"
                style={{
                  color:
                    activeStep >= experiences.length
                      ? "#666666" // Disabled text color
                      : `rgb(${newButtonColor.join(",")})`, // Text color
                }}
              >
                <KeyboardArrowDown sx={{ fontSize: 35 }} />
              </IconButton>
            </motion.div>
          </motion.div>
        </Box>
      </Grid>
    );
  };

  const WebStepper = () => (
    <Grid item xs={12} xl={4}>
      <Box className="relative rounded-full bg-primary-100 dark:bg-gray-700 p-20 py-4 2xl:py-20 overflow-hidden mt-4 mx-6 ">
        <Box className="overflow-auto h-full w-full mx-6 flex">
          <Stepper activeStep={activeStep} orientation="vertical">
            {experiences.map((step, experience_index) => {
              let working_duration = _convertWorkingDuration(
                step.start_date,
                step.end_date
              );
              return (
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
                      <Typography variant="h6" className="capitalize font-bold">
                        {step.title}
                      </Typography>
                      <Typography variant="subtitle1">
                        {step.company}
                      </Typography>
                      <Typography variant="subtitle1">
                        {working_duration.date} ({working_duration.duration})
                      </Typography>
                    </div>
                  </StepLabel>
                </Step>
              );
            })}
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
  );
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
    return {
      date: `${start_date.format("MMMM YYYY")} - ${end_date.format(
        "MMMM YYYY"
      )}`,
      duration: service_duration,
    };
  };

  return (
    <section className="flex flex-col items-center justify-between">
      <Typography variant="h5" className="text-center font-bold">
        Work Experiences
      </Typography>
      <Grid container spacing={3}>
        {state.mobile ? <MobileStepper /> : <WebStepper />}
        <Grid item xs={12} xl={8} className="flex justify-center flex-col">
          <div className="px-6 2xl:px-0 text-center md:text-start gap-4">
            {experience?.content}
          </div>
        </Grid>
        <div className="px-4 bg-gray-100 dark:bg-black mt-12 pt-8 w-full">
          <Typography variant="h5" className="text-center font-bold">
            Projects that I worked on
          </Typography>
          <Grid container spacing={8} className="py-2 m-0 w-full">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <LoadingProjectCard key={index} />
                ))
              : projects?.map((project, index) => (
                  <ProjectCard
                    key={`${experience?.id}_${index}`}
                    {...project}
                  />
                ))}
          </Grid>
        </div>
      </Grid>
    </section>
  );
}
