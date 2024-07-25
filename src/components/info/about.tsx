import { Grid, Typography } from "@mui/material";
import ISTJ from "./mbti";
import { useState, forwardRef, Ref } from "react";
import Fact from "./fact";
import Image from "next/image";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  const Hobbies = () => {
    return (
      <div className="flex items-center h-full w-full">
        <div className="flex-col w-full">
          <div className="flex justify-center w-full">
            <div>
              <Image
                src="/badminton-2.png"
                alt="Badminton"
                width={125}
                height={125}
              />
              <Typography variant="body1" className="font-bold w-full">
                Badminton
              </Typography>
            </div>
            <div>
              <Image src="/read.png" alt="Read" width={125} height={125} />
              <Typography variant="body1" className="font-bold w-full">
                Reading
              </Typography>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div>
              <Image src="/game.png" alt="Game" width={125} height={125} />
              <Typography variant="body1" className="font-bold w-full">
                Game
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DISC = () => {
    return (
      <PieChart
        margin={{ top: 50, left: 50, right: 50 }}
        series={[
          {
            arcLabel: (item) => item.value,
            data: [
              { id: 0, value: 42, label: "Dominance" },
              { id: 1, value: 39, label: "Steadiness" },
              { id: 2, value: 10, label: "Influence" },
              { id: 3, value: 9, label: "Compliance" },
            ],
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
          },
        }}
        width={undefined}
        height={300}
        onItemClick={() => {}}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "middle" },
            padding: 0,
          },
        }}
      />
    );
  };
  const cards = [
    {
      key: "mbti",
      title: "MBTI",
      content: (
        <div className="flex flex-col justify-center h-full">
          <ISTJ />
          <Typography variant="body1" className="font-bold w-full">
            ISTJ-A
          </Typography>
        </div>
      ),
    },
    {
      key: "disc",
      title: "DISC",
      content: <DISC />,
    },
    {
      key: "hobbies",
      title: "Hobbies",
      content: <Hobbies />,
    },
  ];

  const [cardOrder, setCardOrder] = useState(cards);

  return (
    <div ref={ref}>
      <section className="flex items-center bg-white dark:bg-black justify-between p-6 md:p-12">
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-6">About Me</h3>
          <Grid container spacing={4}>
            <Grid item xs={12} xl={6}>
              <Typography variant="body1">
                I am a Full Stack Developer based in Kuala Lumpur, Malaysia. I
                embarked on my programming career in 2021 after earning a degree
                in Software Engineering from Multimedia University Malaysia.
              </Typography>
              <Typography variant="body1" className="my-4">
                With a total of 3 years of experience in the IT software
                industry, I have consistently worked on developing responsive
                and customized websites, APIs and mobile applications to meet
                various business needs of my clients.
              </Typography>
              <Typography variant="body1" className="my-4">
                I am passionate about coding and enjoy seeing how the software I
                develop positively impacts users and clients. I am dedicated to
                continuously improving my skills and staying updated with the
                latest industry trends to deliver high-quality solutions.
              </Typography>
            </Grid>
            <Grid item xs={12} xl={6}>
              <Grid container justifyContent="center">
                {cardOrder.map((card, index) => (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    key={index}
                    container
                    justifyContent="center"
                  >
                    <Fact index={index}>
                      <Typography variant="h6" className="mb-2 w-full">
                        {card.title}
                      </Typography>
                      {card.content}
                    </Fact>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
});
About.displayName = 'About;'
export default About;
