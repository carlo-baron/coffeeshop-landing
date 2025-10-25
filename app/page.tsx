"use client";

import {
  Container,
} from '@mui/material';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';

export default function Home() {
  return (
    <Container
    className='h-screen w-full'
    disableGutters
    maxWidth={false}
    >
      <Hero />
      <FeaturedMenu />
      <Hero />
    </Container>
  );
}

