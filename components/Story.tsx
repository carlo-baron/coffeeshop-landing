"use client";
import {
  Box,
  Typography,
} from "@mui/material";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SpaIcon from "@mui/icons-material/Spa";
import PeopleIcon from "@mui/icons-material/People";

type StoryType = "love" | "sustainability" | "community";

interface StoryContent {
  key: StoryType;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stories: StoryContent[] = [
  {
    key: "love",
    title: "Made with Love",
    description:
      "Every cup is crafted with passion and precision by our expert baristas.",
    icon: <FavoriteBorderIcon fontSize="large" color="inherit" />,
  },
  {
    key: "sustainability",
    title: "Sustainable Sourcing",
    description:
      "We work directly with farmers to bring you ethically sourced, organic coffee beans.",
    icon: <SpaIcon fontSize="large" color="inherit" />,
  },
  {
    key: "community",
    title: "Community First",
    description:
      "More than a cafe, we're a gathering place for neighbors, friends, and coffee lovers.",
    icon: <PeopleIcon fontSize="large" color="inherit" />,
  },
];

export default function Story() {
  const [story, setStory] = useState<StoryType>("love");
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const target = useRef<HTMLDivElement | null>(null);
  const prevScroll = useRef(0);
  const { scrollYProgress } = useScroll({ target });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const direction = latest > prevScroll.current ? "down" : "up";
    setScrollDir(direction);
    prevScroll.current = latest;

    if (latest < 0.33) setStory("love");
    else if (latest < 0.66) setStory("sustainability");
    else setStory("community");
  });

  const activeStory = stories.find((s) => s.key === story)!;

  return (
    <Box ref={target} className="relative h-[600vh]">
      <Box className="sticky top-0 flex flex-col w-full h-screen">
        <Box className="bg-green-100 h-[10%] w-full" />
        <Box id="about" className="grow flex flex-col p-4 gap-4">
          <Box className="header">
            <Typography variant="h4" fontWeight={600} className="text-center">
              Our Story
            </Typography>
            <Typography
              className="text-center"
              variant="subtitle1"
              color="textSecondary"
            >
              Founded in 2018, Brew Haven has been serving the community with
              exceptional coffee and creating memorable moments. We believe in
              quality, sustainability, and the power of a good cup of coffee to
              bring people together.
            </Typography>
          </Box>

          <Box className="grow gap-4 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.key}
                initial={{
                  opacity: 0,
                  y: scrollDir === "down" ? 40 : -40,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: scrollDir === "down" ? -40 : 40,
                }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-2"
              >
                <Box className="bg-green-200 text-green-600 flex items-center justify-center w-15 aspect-1/1 rounded-full">
                  {activeStory.icon}
                </Box>
                <Typography variant="h5">{activeStory.title}</Typography>
                <Typography
                  className="text-center"
                  variant="subtitle2"
                  color="textSecondary"
                >
                  {activeStory.description}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>
        <Box className="bg-green-100 h-[10%] w-full" />
      </Box>
    </Box>
  );
}
