import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";
import { Project } from "@/models/projects";
import { skills } from "@/models/skills";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import { useAppContext } from "@/context/app";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ColorKey = "primary" | "alert" | "red";

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
  const [open, setOpen] = useState(false);
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

  const _handleClickOpen = () => {
    setOpen(true);
  };

  const _handleClose = () => {
    setOpen(false);
  };

  const { state, setState } = useAppContext();

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={4}
      style={{ paddingLeft: 28 }}
    >
      <Card className="rounded-lg h-full dark:bg-gray-700">
        <div className="relative">
          <div
            className="bg-black"
            style={{
              backgroundImage: `url(${image})`,
              opacity: 0.2,
              height: 250,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <Typography className="text-4xl font-bold uppercase md:text-6xl">
              <span className={theme.text}>{name}</span>
            </Typography>
          </div>
        </div>
        <CardContent className="p-8">
          <Typography gutterBottom variant="h6" component="div">
            {title}
            {link && (
              <Link href={link} target="_blank">
                <LinkIcon fontSize="large" className="ml-1" color="primary" />
              </Link>
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
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
          <Typography variant="body2" className="mt-4">
            Highlighted Contributions:
          </Typography>
          <Typography className="font-bold mt-2">{contributions}</Typography>
        </CardContent>
        <CardActions>
          {details && (
            <Button size="small" onClick={_handleClickOpen}>
              Screenshots
            </Button>
          )}
        </CardActions>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={_handleClose}
        key={name}
        TransitionComponent={Transition}
        sx={{ zIndex: 99999 }}
      >
        <AppBar sx={{ position: "relative" }} className={theme.background}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={_handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        {details &&
          details.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <Grid container spacing={3} className="px-4 pt-5">
                <Grid item sm={12}>
                  <Typography className="text-3xl">{section.title}</Typography>
                </Grid>
                {section.galleries.map((image, imageIndex) => (
                  <Grid
                    item
                    key={`${sectionIndex}-${imageIndex}`}
                    spacing={12}
                    sm={2}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${imageIndex + 1}`}
                      layout="responsive"
                      width={100}
                      height={100}
                      className="w-full h-full"
                      onClick={() => {
                        setState((prevState) => ({
                          ...prevState,
                          image,
                        }));
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
      </Dialog>
    </Grid>
  );
};
export default ProjectCard;
