"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Link,
  IconButton,
  Button
} from "@mui/material";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import CoffeeIcon from '@mui/icons-material/Coffee';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export default function Footer(){
  return(
    <Box
    id='contact'
    className='gap-4 text-white flex flex-col p-4 snap-center bg-stone-900 w-full h-screen'
    >
      <Box 
      className="mt-2 flex flex-col gap-4 header"
      >
        <Box className="flex gap-2">
          <CoffeeIcon fontSize="large"/>
          <Typography
          variant='h5'
          >
            Brew Haven
          </Typography>
        </Box>
        <Typography
        className='text-stone-600'
        variant='subtitle1'
        >
          Your neighborhood coffee shop serving exceptional coffee and creating memorable moments since 2018.
        </Typography>
      </Box>
      <Box className="flex flex-col gap-4 links">
        <Typography
        variant='h6'
        fontWeight={400}
        >
          Quick Links
        </Typography>
        <Box 
        className="text-stone-600 flex flex-col gap-2"
        >
          <Link 
          color='inherit'
          underline='none'
          href='#hero'
          sx={{
            '&:hover': {
              color: 'orange',
            }
          }}
          >Hero</Link>
          <Link 
          color='inherit'
          underline='none'
          href='#about'
          sx={{
            '&:hover': {
              color: 'orange',
            }
          }}
          >About</Link>
          <Link 
          color='inherit'
          underline='none'
          href='#menu'
          sx={{
            '&:hover': {
              color: 'orange',
            }
          }}
          >Menu</Link>
          <Link 
          color='inherit'
          underline='none'
          href='#location'
          sx={{
            '&:hover': {
              color: 'orange',
            }
          }}
          >Location</Link>
          <Link 
          color='inherit'
          underline='none'
          href='#contact'
          sx={{
            '&:hover': {
              color: 'orange',
            }
          }}
          >Contact</Link>
        </Box>
        <Box
        className='text-white flex flex-col gap-4'
        >
          <Typography
          variant='h6'
          fontWeight={400}
          >
            Follow Us
          </Typography>
          <Box className="flex gap-4 ">
            <Box className="flex items-center justify-center
            hover:bg-amber-500 w-10 rounded-full aspect-1/1 bg-stone-800">
              <FacebookIcon sx={{color:'white'}}/>
            </Box>
            <Box className="flex items-center justify-center
            hover:bg-amber-500 w-10 rounded-full aspect-1/1 bg-stone-800">
              <InstagramIcon sx={{color:'white'}}/>
            </Box>
            <Box className="flex items-center justify-center
            hover:bg-amber-500 w-10 rounded-full aspect-1/1 bg-stone-800">
              <XIcon sx={{color:'white'}}/>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider className='bg-stone-800' />
      <Box 
      className="text-stone-600 flex items-center justify-center grow w-full">
        <Typography
        variant="subtitle1"
        >
        © 2025 Brew Haven. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
