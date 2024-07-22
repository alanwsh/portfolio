import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { skills } from "@/models/skills";

import { Project } from "@/models/projects";
import React, { useState } from "react";

export const LoadingProjectCard = () => (
  <CardContainer>
    <Card
      style={{
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 400,
      }}
    >
      <div className="w-[50%]">
        <Typography variant="h3" className="w-full">
          <Skeleton  />
        </Typography>
        <Typography variant="body1">
          <Skeleton  />
        </Typography>
      </div>
    </Card>
  </CardContainer>
);

const CardContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <Grid item xs={12} sm={4} md={4} style={{ paddingLeft: 28 }}>
    <Card className="rounded-lg h-full dark:bg-gray-700">{children}</Card>
  </Grid>
);

const cardVariants = {
  initial: { opacity: 1 },
  hover: { opacity: 0.8 },
};

const contentVariants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const ProjectCard: React.FC<Project> = ({
  name,
  title,
  subtitle,
  link,
  image,
  contributions,
  categories,
  details,
  color = "primary",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorClasses = {
    primary: {
      text: "text-primary",
      background: "bg-primary",
    },
    alert: {
      text: "text-alert",
      background: "bg-alert",
    },
    red: {
      text: "text-red",
      background: "bg-red",
    },
    // Add other colors as needed
  };
  const theme = color ? colorClasses[color] : colorClasses["primary"];

  return (
    <CardContainer>
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        transition={{ duration: 0.3 }}
        style={{
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 400,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            opacity: 0.2,
            zIndex: 0,
          }}
        />

        {/* Content container */}
        <motion.div
          className="content"
          variants={contentVariants}
          initial="visible"
          animate={isHovered ? "hidden" : "visible"}
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
            zIndex: 1,
            height: "100%",
            width: "100%",
          }}
        >
          <Typography
            variant="h3"
            className={`text-center font-bold ${theme.text}`}
          >
            {name}
          </Typography>
          <Typography variant="body1" className="text-center">
            {title}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            className="my-2"
            sx={{ flexWrap: "wrap", columnGap: 0.5, rowGap: 1 }}
          >
            {skills
              .filter((skill) => categories?.includes(skill.id))
              ?.map((category, index) => (
                <Chip
                  key={category.id}
                  className="p-1 text-md"
                  avatar={<Avatar src={category.avatar} />}
                  label={category.name}
                />
              ))}
          </Stack>
        </motion.div>
        <motion.div
          className="bg-gray-700 text-white"
          initial="hidden"
          variants={buttonVariants}
          animate={isHovered ? "visible" : "hidden"}
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
            zIndex: 1,
            height: "100%",
            width: "100%",
          }}
        >
          <div className="flex flex-col gap-y-8 divide-y divide-opacity-25">
            <Typography variant="body1" className="text-center">
              {subtitle}
            </Typography>
            <Typography variant="body1" className="pt-6 font-bold text-center">
              Highlighted Contributions:
            </Typography>
          </div>
          <Typography variant="body1" className="font-bold mt-2 text-center">
            {contributions}
          </Typography>
          <Button
            variant="contained"
            className="px-9 text-lg mt-3"
            style={{ borderRadius: 20, textTransform: "none" }}
            size="large"
          >
            See More
          </Button>
        </motion.div>
      </motion.div>
    </CardContainer>
  );
};

export default ProjectCard;
