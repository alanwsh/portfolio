import { expertises } from "@/models/expertise";
import { SkillTabProps } from "@/models/skillCategories";
import { skills } from "@/models/skills";
import { Tool, Tools, ToolsProps } from "@/models/tools";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tab } from "../tab";
import { useAppContext } from "@/context/app";

export default function Expertise() {
  const [tabs, setTabs] = useState<Array<ToolsProps>>(Tools);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [toolModal, setToolModal] = useState<boolean>(false);
  const { state } = useAppContext();

  type Skill = {
    image?: string;
    icon?: React.ReactElement;
    description: String;
  };

  const SkillComponent = ({ item }: { item: Skill }) => {
    return (
      <div className="flex flex-col items-center mx-4">
        <div className="relative h-20 w-20">
          {item.image ? (
            <Image
              src={item.image}
              alt="Skill Logo"
              layout="fill"
              objectFit="contain"
            />
          ) : (
            item.icon // Render the icon directly
          )}
        </div>
        <p className="mt-4 text-sm font-bold">{item.description}</p>
      </div>
    );
  };

  return (
    <section className="flex items-center justify-between p-6 md:p-12 dark:bg-gray-700">
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
              onClick={() => setToolModal(true)}
            >
              Check all the tools I used
            </Button>
          </Grid>
          <Dialog
            open={toolModal}
            keepMounted
            onClose={() => setToolModal(false)}
            sx={{ height: "100%" }}
            className="rounded-xl"
            fullWidth
          >
            <div className="window" style={{height: state.mobile ? '650px' : undefined}}>
              <nav className="tabNav" style={{height: state.mobile ? '30%' : undefined}}>
                <Reorder.Group
                  as="ul"
                  axis={state.mobile ? 'y' : 'x'}
                  onReorder={setTabs}
                  className="tabs"
                  style={{flexDirection: state.mobile ? 'column' : 'row'}}
                  values={tabs}
                >
                  <AnimatePresence initial={false}>
                    {tabs.map((item) => (
                      <Tab
                        key={item.id}
                        item={item}
                        isSelected={selectedTab === item}
                        onClick={() => setSelectedTab(item)}
                      />
                    ))}
                  </AnimatePresence>
                </Reorder.Group>
              </nav>
              <main className="tabMain hide-scrollbar h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab ? selectedTab.title : "empty"}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.15 }}
                    className="h-full"
                  >
                    <div className="flex flex-wrap h-full justify-center items-center">
                      {selectedTab.items.map((tool, index) => (
                        <SkillComponent item={tool} key={index} />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
          </Dialog>
        </Grid>
      </div>
    </section>
  );
}
