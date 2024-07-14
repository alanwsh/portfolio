"use client";
import { GitHub } from "@mui/icons-material";
import { Icon, Card } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function SkillSet() {
  type Skill = {
    image?: string;
    icon?: React.ReactElement;
    description: String;
  };

  type Card = {
    title: string;
    items: Skill[];
  };

  // Destructure the useState tuple to get the state variable
  const [cards, setCards] = useState<Card[]>([
    {
      title: "Front-end",
      items: [
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/130px-HTML5_logo_and_wordmark.svg.png",
          description: "HTML5",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
          description: "CSS3",
        },
        {
            image:
              "https://static-00.iconduck.com/assets.00/tailwind-css-icon-1024x615-fdeis5r1.png",
            description: "Tailwind CSS",
          },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          description: "React Native",
        },
        {
          image:
            "https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg",
          description: "NextJs",
        },
        {
          image:
            "https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png",
          description: "JQuery",
        },
        {
          image:
            "https://miro.medium.com/v2/resize:fit:1400/1*QuMR4e-gMbOomdrQQZXtUg.jpeg",
          description: "Ajax",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          image: "https://laravel.com/img/logomark.min.svg",
          description: "Laravel",
        },
        {
          image:
            "https://repository-images.githubusercontent.com/431991980/6f97d8ac-6eb3-453a-96d4-372434e07ddb",
          description: "PHP",
        },
      ],
    },
    {
      title: "DevOps",
      items: [
        {
            image: "https://blog.deimos.fr/images/logo_docker.png",
            description: "Docker",
          },
        {
          icon: <GitHub className="w-full h-full p-2" />,
          description: "Github CI/CD",
        },
        {
          image:
            "https://raw.githubusercontent.com/Unitech/pm2/master/pres/pm2-v4.png",
          description: "PM2",
        },
        {
          image:
            "https://partner.zoom.us/wp-content/uploads/2022/12/2022_Zoom-AWS_Lockup_RGB-1-e1672857797889-1024x760.png",
          description: "AWS",
        },
        {
          image:
            "https://avatars.githubusercontent.com/u/513914?v=4",
          description: "Supervisor",
        },
        {
            image:
              "https://miro.medium.com/v2/resize:fit:825/1*VZUIyODi1_THwlbHg9fyWg.jpeg",
            description: "Apache Web Server",
          },
      ],
    },
  ]);

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
        <p className="mt-4 text-xl font-bold">{item.description}</p>
      </div>
    );
  };

  return (
    <section className="flex items-center justify-between p-6 md:p-12">
      <div className="w-full">
        <h3 className="text-4xl font-bold mb-6">Languages & Techs</h3>
        <div className="w-full">
          {cards.map((card, index) => (
            <div className="w-full my-8" key={index}>
              <Card
                className="p-6 bg-white shadow-md rounded-md flex flex-col items-center"
              >
                <h4 className="text-3xl font-semibold mb-8">{card.title}</h4>
                <div className="flex">
                  {card.items.map((item, i) => (
                    <SkillComponent item={item} key={i} />
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
