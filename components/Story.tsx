"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { 
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  useRef,
} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SpaIcon from '@mui/icons-material/Spa';
import PeopleIcon from '@mui/icons-material/People';
import { transform } from 'next/dist/build/swc/generated-native';

export default function Story(){
  return(
    <Box
    id='about'
    className='flex flex-col w-full h-screen p-4'
    >
      <Box 
      className="header"
      >
        <Typography 
        variant="h4" 
        fontWeight={600}
        className='text-center'
        >
          Our Story
        </Typography>
        <Typography 
        className='text-center'
        variant="subtitle1"
        color="textSecondary"
        >
          Founded in 2018, Brew Haven has been serving the community with exceptional coffee and creating memorable moments. We believe in quality, sustainability, and the power of a good cup of coffee to bring people together.
        </Typography>
      </Box>

      <Box
      className='bg-gray-500 grow'
      >
        <Box 
        className="bg-green-300 w-15 aspect-1/1 rounded-full"
        >
        </Box>
      </Box>
    </Box>
  );
}
