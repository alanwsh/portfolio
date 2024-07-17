import { expertises } from "@/models/expertise";
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

export default function Expertise() {
  return (
    <section className="flex items-center justify-between p-6 md:p-12 bg-gray-100">
      <div className="w-full">
        <h3 className="text-2xl font-bold mb-6">My Expertises</h3>
        <Grid container>
          {expertises.map((exp, index) => (
            <Grid item xs={12} md={6} className="p-5" key={index}>
              <Card variant="outlined" className="p-6 rounded-xl h-full">
                <Grid container>
                  <Grid xs={12} md={4} item className="flex items-center">
                    <Image
                      src={exp.image}
                      width={500}
                      alt="image"
                      height={500}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </Grid>
                  <Grid xs={12} md={8} item className="px-2 py-4">
                    <Typography variant="h6" className="font-bold">
                      {exp.title}
                    </Typography>
                    <Typography variant="body1" className="my-4">
                      {exp.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      className="my-2"
                      sx={{ flexWrap: "wrap", columnGap: 0.5, rowGap: 1 }}
                    >
                      {skills
                        .filter((skill) => exp.skills?.includes(skill.id))
                        ?.map((category, index) => (
                          <Chip
                            key={category.id}
                            className="p-2 text-md"
                            avatar={<Avatar src={category.avatar} />}
                            label={category.name}
                          />
                        ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} className="flex justify-center mt-4">
            <Button
              variant="contained"
              style={{ borderRadius: 20, textTransform: "none" }}
              size="large"
              href="/portfolio/skills"
            >
              Check all the tools I used
            </Button>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
