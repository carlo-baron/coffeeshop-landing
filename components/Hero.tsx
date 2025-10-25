"use client";

import {
  Box,
  Typography,
  Button,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { 
  useState,
  useRef,
} from 'react';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuAnchorEl = useRef<HTMLButtonElement | null>(null);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Box
      id='hero'
      className='flex flex-col justify-center items-center relative w-full h-screen'
    >
      <img
        className='absolute z-[-1] brightness-70 object-cover w-full h-full'
        src='/cafebg.jpg'
        alt='Cafe Background'
      />

      <Box
        className='flex justify-between items-center text-white nav p-4 absolute top-0 left-0 w-full'
      >
        <Box
        className='flex items-center gap-2'
        >
          <Link
          href='#hero'
          color='inherit'
          >
            <CoffeeIcon/>
          </Link>
          <Typography variant='h6'>Brew Haven</Typography>
        </Box>

        <IconButton
          size='medium'
          color='inherit'
          onClick={handleOpenMenu}
          ref={menuAnchorEl}
        >
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>

        {menuAnchorEl.current && (
          <Menu
            anchorEl={menuAnchorEl.current}
            open={menuOpen}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleCloseMenu}>Hero</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Menu</MenuItem>
            <MenuItem onClick={handleCloseMenu}>About</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Location</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Contact</MenuItem>
          </Menu>
        )}
      </Box>

      <Typography
        className='text-center'
        color='white'
        sx={{
          fontWeight: '800 !important',
          typography: {
            xs: 'h3',
            md: 'h2',
            lg: 'h1',
          },
        }}
      >
        Welcome To Brew Haven
      </Typography>

      <Typography
        className='text-center'
        variant='subtitle1'
        color='white'
      >
        Experience the perfect blend of artisan coffee, fresh pastries, and warm hospitality
      </Typography>

      <Button
        variant='contained'
        color='warning'
        sx={{
          textTransform: 'none',
          marginTop: '1rem',
        }}
      >
        Visit Us
      </Button>
    </Box>
  );
}
