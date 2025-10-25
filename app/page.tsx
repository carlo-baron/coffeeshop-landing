"use client";

import {
  Container,
  Fab,
} from '@mui/material';
import {
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import{
  useState
} from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import Story from '@/components/Story';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [top, setTop] = useState<boolean>(true);

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    if(latest > 0.05){
      setTop(false);
    }else{
      setTop(true);
    }
  });

  return (
    <Container
    className='snap-y h-screen w-full'
    disableGutters
    maxWidth={false}
    >
      <Hero />
      <FeaturedMenu />
      <Story />
      <Location />
      <Footer />

      {
        !top && (
          <Fab 
          color='primary'
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16
          }}
          component='a'
          href='#hero'
          >
            <KeyboardArrowUpIcon
            color='inherit'
            />
          </Fab>
        )
      }
    </Container>
  );
}

