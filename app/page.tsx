"use client";

import { Container, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useScroll, useMotionValueEvent, useInView } from "framer-motion";
import { useState, useRef } from "react";

import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import Story from "@/components/Story";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [top, setTop] = useState<boolean>(true);

  const locationRef = useRef<HTMLDivElement | null>(null);
  // useInView attaches an observer to locationRef; the result is consumed
  // by child components via the ref itself.
  useInView(locationRef, { amount: 1.0 });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setTop(latest <= 0.05);
  });

  return (
    <Container className="h-screen w-full" disableGutters maxWidth={false}>
      <Hero />
      <FeaturedMenu />
      <Story />
      <div ref={locationRef}>
        <Location />
      </div>
      <Footer />

      {/* Back-to-top FAB — visible after scrolling past the hero */}
      {!top && (
        <Fab
          color="primary"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
          component="a"
          href="#hero"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUpIcon color="inherit" />
        </Fab>
      )}
    </Container>
  );
}
