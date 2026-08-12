"use client";

import {
  Box,
  Typography,
  Button,
  Link,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { useState } from "react";
import { hero, navigation } from "@/config/siteConfig";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Box
      id="hero"
      component="header"
      className="flex flex-col justify-center items-center relative w-full h-screen"
    >
      {/* Background image — plain <img> is intentional here for full-bleed
          object-cover behavior. Next.js <Image> requires known dimensions
          which is awkward for a full-viewport background. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="absolute z-[-1] brightness-70 object-cover w-full h-full"
        src={hero.backgroundImage}
        alt={hero.backgroundAlt}
      />

      {/* ---- Navigation bar ------------------------------------------------ */}
      <Box
        component="nav"
        className="flex justify-between items-center text-white nav p-4 absolute top-0 left-0 w-full"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand / logo */}
        <Box className="flex items-center gap-2">
          <Link href="#hero" color="inherit" aria-label={hero.brandName}>
            <CoffeeIcon />
          </Link>
          <Typography variant="h6">{hero.brandName}</Typography>
        </Box>

        {/* Desktop nav links — sourced from config */}
        <Box component="ul" className="hidden sm:flex gap-4 list-none p-0 m-0">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} color="inherit" underline="none">
                {item.label}
              </Link>
            </li>
          ))}
        </Box>

        {/* Mobile hamburger button */}
        <IconButton
          size="medium"
          color="inherit"
          onClick={handleOpenMenu}
          aria-label="Open navigation menu"
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>

        {/* Mobile dropdown menu — sourced from config */}
        <Menu
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          {navigation.map((item) => (
            <MenuItem
              key={item.href}
              component="a"
              href={item.href}
              onClick={handleCloseMenu}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* ---- Hero text content --------------------------------------------- */}
      <Typography
        component="h1"
        className="text-center"
        color="white"
        sx={{
          fontWeight: "800 !important",
          typography: {
            xs: "h3",
            md: "h2",
            lg: "h1",
          },
        }}
      >
        {hero.headline}
      </Typography>

      <Typography
        className="text-center"
        variant="subtitle1"
        color="white"
        component="p"
      >
        {hero.subtitle}
      </Typography>

      <Button
        variant="contained"
        color="warning"
        href={hero.ctaHref}
        sx={{ textTransform: "none", marginTop: "1rem" }}
      >
        {hero.ctaText}
      </Button>
    </Box>
  );
}
