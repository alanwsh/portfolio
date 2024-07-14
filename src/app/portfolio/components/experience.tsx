import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  ChevronLeft,
  ChevronRight,
  InfoRounded,
  Work,
} from "@mui/icons-material";
import { Card, Grid, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import moment from "moment";
import ProjectCard from "./projects/ProjectCard";
import { ProjectCardProps } from "../model.tsx/project";

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

  const Sparksoft = () => (
    <>
      <Typography variant="h5" className="my-6">
        During my tenure at Sparksoft Sdn Bhd as a Full Stack Developer, our
        focus was on providing specialized IT services to clients. I specialized
        in developing comprehensive solutions for both mobile and web platforms.
      </Typography>
      <Typography variant="h5" className="my-6">
        My responsibilities included designing and implementing database
        schemas, writing code, conducting code reviews, mentoring team members,
        and approving pull requests.
      </Typography>
      <Typography variant="h5" className="my-6">
        I advocated for Docker as the deployment solution across various
        projects within a unified environment. Additionally, I designed and
        implemented a payment solution that seamlessly integrates multiple
        payment gateways into our applications.
      </Typography>
    </>
  );

  const Vintedge = () => (
    <>
      <Typography variant="h5" className="my-6">
        During my tenure at Vintedge Sdn Bhd as a Junior Web Developer, our
        focus was on providing specialized IT services to clients. I specialized
        in developing comprehensive solutions for both mobile and web platforms.
      </Typography>
      <Typography variant="h5" className="my-6">
        My responsibilities included designing and implementing database
        schemas, writing code, conducting code reviews, mentoring team members,
        and approving pull requests.
      </Typography>
      <Typography variant="h5" className="my-6">
        I advocated for Docker as the deployment solution across various
        projects within a unified environment. Additionally, I designed and
        implemented a payment solution that seamlessly integrates multiple
        payment gateways into our applications.
      </Typography>
    </>
  );

  type Experience = {
    title: string;
    company: string;
    start_date: Date;
    end_date?: Date;
    content: React.ReactNode;
    projects: ProjectCardProps[];
  };

  const steps: Experience[] = [
    {
      title: "Full Stack Developer",
      company: "Sparksoft Sdn Bhd",
      start_date: new Date(2022, 4, 1),
      content: <Sparksoft />,
      projects: [
        {
          name: '<span class="text-red-500">Fight zone</span>',
          title: "Fitness Franchise Management Solutions",
          subtitle:
            "A fitness brand with multiple franchises in Singapore, for which we developed software solutions, including websites and mobile applications, for use by all their members and staff.",
          link: "https://www.fightzonesg.com/",
          image:
            "https://www.fightzonesg.com/wp-content/uploads/2021/03/fz-favicon.png",
        },
        {
          name: '<span class="text-primary-900">Novel Leap</span>',
          title: "Investment Tracking Software",
          subtitle:
            "They provide financial advisory and investment guidance services, and we developed software solutions to offer a platform for tracking all investments the company has made for their investors.",
          link: "https://www.novelleap.com/",
          image: "/novelleap.png",
        },
        {
          name: '<span class="text-orange-400">Xing Fu Li</span>',
          title: "Online Learning Platform",
          subtitle:
            "They organize online classes regularly. We provide an online platform for them to manage these classes, handle members' packages, and share media with different packages",
          link: "https://xingfuli.co/",
          image: "https://xingfuli.co/img/logoonly.png",
        },
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Vintedge Sdn Bhd",
      start_date: new Date(2021, 7, 1),
      end_date: new Date(2021, 11, 1),
      content: <Vintedge />,
      projects: [
        {
          name: '<span class="text-primary-700">Innovix</span>',
          title: "Online marketplace for computer products and gadgets",
          subtitle:
            "An online marketplace that sell computer products and gadgets in several countries in Asia",
          link: "https://my.innovixmarketplace.com/",
          image:
            "https://my.innovixmarketplace.com/themes/innovix/img/tectd-new-logo.png",
        },
      ],
    },
  ];

  const [activeStep, setActiveStep] = React.useState(1);

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
            <Box className="overflow-auto h-full w-full mx-6">
              <div className="mb-2 flex justify-end">
                <IconButton
                  color="primary"
                  onClick={_handleBack}
                  disabled={activeStep <= 1}
                  aria-label="Previous Step"
                >
                  <ChevronLeft sx={{ fontSize: 55 }} />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={_handleNext}
                  disabled={activeStep >= steps.length}
                  aria-label="Next Step"
                >
                  <ChevronRight sx={{ fontSize: 55 }} />
                </IconButton>
              </div>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.title}>
                    <StepLabel
                      StepIconComponent={() => (
                        <StepIconComponent
                          icon={Work}
                          active={index + 1 === activeStep}
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
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} className="flex justify-center flex-col px-4">
          {steps[activeStep - 1]?.content}
        </Grid>
        <div className="px-4 bg-gray-100 mt-12 pt-8 w-full">
          <Typography variant="h4" className="text-center font-bold">
            Projects that I worked on
          </Typography>
          <Grid container spacing={8} className="py-2 m-0 w-full">
            {steps[activeStep - 1].projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Grid>
        </div>
      </Grid>
    </section>
  );
}
