import { Description } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";
import { ProjectCardProps } from "../../model.tsx/project";

export default function ProjectCard({
  name,
  title,
  subtitle,
  link,
  image,
  categories,
}: ProjectCardProps) {
  return (
    <Grid item xs={12} sm={4} md={4} style={{ padding: "32px 32px" }}>
      <Card className="rounded-lg">
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
          <div className="absolute inset-0 flex items-center justify-center">
            <Typography variant="h1" className="font-bold uppercase">
              <span dangerouslySetInnerHTML={{ __html: name }}></span>
            </Typography>
          </div>
        </div>
        <CardContent className="p-8">
          <Typography gutterBottom variant="h5" component="div">
            {title}
            {link && (
              <Link href={link} target="_blank">
                <LinkIcon fontSize="large" className="ml-1" color="primary" />
              </Link>
            )}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
          <Stack direction="row" spacing={1} className="my-2">
            {categories?.map((category, index) => (
              <Chip
                key={index}
                className="p-2 text-lg"
                avatar={
                  <Avatar
                    src={category.avatar}
                  />
                }
                label={category.name}
              />
            ))}
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small">See More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}