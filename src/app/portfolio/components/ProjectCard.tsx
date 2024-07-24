import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  ImageList,
  ImageListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { skills } from "@/models/skills";

import { Project } from "@/models/projects";
import React, { useState } from "react";
import Image from "next/image";
import { Close } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useAppContext } from "@/context/app";
import { ComingSoon } from "@/components/ComingSoonModal";

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
          <Skeleton />
        </Typography>
        <Typography variant="body1">
          <Skeleton />
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
  <Grid item xs={12} sm={4} md={4} className="px-4 py-2">
    <Card className="rounded-lg h-full dark:bg-gray-700">{children}</Card>
  </Grid>
);

const cardVariants = {
  initial: { opacity: 1 },
  hover: { opacity: 0.8 },
};

const contentVariants = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 0.5 } },
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
  const [seeDetails, setSeeDetails] = useState(false);
  const { state } = useAppContext();
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };
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
  const controls = useAnimation();

  const theme = color ? colorClasses[color] : colorClasses["primary"];
  React.useEffect(() => {
    if (seeDetails) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [seeDetails, controls]);
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
            className="my-2 justify-center"
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
          <div className="flex flex-col gap-y-2 md:gap-y-4 divide-y divide-opacity-25">
            <Typography
              variant={state.mobile ? "caption" : "body2"}
              className="text-center"
            >
              {subtitle}
            </Typography>
            <Typography
              variant={state.mobile ? "caption" : "body2"}
              className="pt-2 md:pt-6 font-bold text-center"
            >
              Highlighted Contributions:
            </Typography>
          </div>
          <Typography
            variant={state.mobile ? "caption" : "body2"}
            className="font-bold mt-2 text-center"
          >
            {contributions}
          </Typography>
          <Button
            variant="contained"
            className="px-9 text-lg mt-3"
            style={{ borderRadius: 20, textTransform: "none" }}
            size={state.mobile ? "small" : "large"}
            onClick={() => setSeeDetails(true)}
          >
            See More
          </Button>
        </motion.div>
      </motion.div>
      <>
        {seeDetails && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4"
            onClick={() => {
              setSeeDetails(false);
            }}
            initial="hidden"
            animate={controls}
            exit="exit"
            style={{ zIndex: 999 }}
          >
            <motion.div
              className="rounded-lg bg-white dark:bg-gray-700 flex flex-col max-h-[90%] p-2"
              onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal
              variants={modalVariants}
            >
              <IconButton
                className="self-end"
                onClick={() => {
                  setSeeDetails(false);
                }}
              >
                <Close />
              </IconButton>
              <div className="p-6 overflow-y-auto">
                {details && details?.length > 0 ? (
                  details.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="my-4">
                      <Typography className="text-md mb-2">
                        {section.title}
                      </Typography>
                      <ImageList
                        cols={section.display === 'row' ? 1: 3}
                        // rowHeight={180}
                      >
                        {section.galleries.map((item, imageIndex) => (
                          <ImageListItem key={imageIndex}>
                            <Image
                              src={item}
                              alt={`Gallery image ${imageIndex + 1}`}
                              width={164}
                              height={180}
                              className={section.display === 'row' ? 'w-full h-full' : ''}
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </div>
                  ))
                ) : (
                  <ComingSoon />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </>
    </CardContainer>
  );
};

export default ProjectCard;
