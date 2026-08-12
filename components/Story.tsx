"use client";
import { Box, Typography } from "@mui/material";
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
import { story } from "@/config/siteConfig";

// ---- Icons for each story value card, ordered by position.  The first icon
//      pairs with story.values[0], the second with story.values[1], etc.
//      Add/remove/reorder icons here to match your story.values array. ----
const STORY_ICONS = [
  <FavoriteBorderIcon key="love" fontSize="large" color="inherit" />,
  <SpaIcon key="sustainability" fontSize="large" color="inherit" />,
  <PeopleIcon key="community" fontSize="large" color="inherit" />,
];

export default function Story() {
  const [storyIndex, setStoryIndex] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const target = useRef<HTMLDivElement | null>(null);
  const prevScroll = useRef(0);
  const { scrollYProgress } = useScroll({ target });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const direction = latest > prevScroll.current ? "down" : "up";
    setScrollDir(direction);
    prevScroll.current = latest;

    // Each value card occupies an equal fraction of the scroll range.
    const index = Math.min(
      Math.floor(latest * story.values.length),
      story.values.length - 1,
    );
    setStoryIndex(index);
  });

  const active = story.values[storyIndex];

  return (
    <Box ref={target} className="relative h-[600vh]">
      <Box className="sticky top-0 flex flex-col w-full h-screen">
        {/* Decorative top bar */}
        <Box className="bg-accent-bg h-[10%] w-full" />

        <Box
          id="about"
          component="section"
          className="grow flex flex-col p-4 gap-4"
        >
          <Box className="header">
            <Typography
              variant="h4"
              fontWeight={600}
              className="text-center"
              component="h2"
            >
              {story.title}
            </Typography>
            <Typography
              className="text-center"
              variant="subtitle1"
              color="textSecondary"
              component="p"
            >
              {story.description}
            </Typography>
          </Box>

          <Box className="grow gap-4 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
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
                <Box className="bg-accent-icon-bg text-accent-icon flex items-center justify-center w-15 aspect-1/1 rounded-full">
                  {STORY_ICONS[storyIndex] ?? null}
                </Box>
                <Typography variant="h5" component="h3">
                  {active.title}
                </Typography>
                <Typography
                  className="text-center"
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
                  {active.description}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>

        {/* Decorative bottom bar */}
        <Box className="bg-accent-bg h-[10%] w-full" />
      </Box>
    </Box>
  );
}
