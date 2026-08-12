"use client";

// =============================================================================
//  THEME CONFIGURATION — Customize colors, fonts, and spacing for the entire
//  site in one place.  Material UI's createTheme drives every MUI component.
//
//  TWO FILES CONTROL COLORS (read both before customizing):
//    1. THIS FILE (app/theme.tsx) — MUI component colors: primary, secondary,
//       warning, typography, shape.  Controls Buttons, FAB, Cards, etc.
//    2. app/globals.css — Section backgrounds & accents via CSS custom
//       properties (@theme block).  Controls the green-tinted backgrounds,
//       footer colors, icon circles, and hover states.
//
//  HOW TO CUSTOMIZE:
//    - palette.primary / palette.secondary: main brand colors.  MUI
//      generates light/dark variants for you, or you can set them explicitly.
//    - typography: font families, weights, and responsive sizes.
//    - shape.borderRadius: default border radius for Cards, Buttons, etc.
//    - To change the font, update @fontsource imports in layout.tsx AND the
//      typography.fontFamily value below.
//    - This file also controls light/dark mode.  The toggle state is stored
//      in a React useState (defaults to "light").  For a dark-mode toggle
//      button, add a switch component that calls setIsLight().
// =============================================================================

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useState, useEffect } from "react";

// Emotion cache for MUI + Tailwind compatibility (ensures MUI styles
// don't get overridden by Tailwind's preflight reset).
const cache = createCache({ key: "css", prepend: true });

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Change `true` to `false` to default to dark mode.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLight, _setIsLight] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  // =========================================================================
  //  CUSTOMIZE YOUR THEME HERE — change any value below to match your brand.
  //  See https://mui.com/material-ui/customization/theming/ for all options.
  // =========================================================================
  const theme = createTheme({
    palette: {
      mode: isLight ? "light" : "dark",
      // ---- Primary: used for app bar, FAB, primary buttons, active states ----
      primary: {
        main: "#4caf50", // Green 500 — matches the existing green-600 accents
        light: "#81c784", // Green 300
        dark: "#388e3c", // Green 700
      },
      // ---- Secondary: used for secondary buttons, badges, etc. -------------
      secondary: {
        main: "#ff9800", // Orange 500 — matches the amber/orange hover states
        light: "#ffb74d",
        dark: "#f57c00",
      },
      // ---- Warning: used for the CTA button and price tags -----------------
      warning: {
        main: "#ff9800",
        light: "#ffb74d",
        dark: "#f57c00",
      },
      // ---- To add custom palette tokens (e.g. brand backgrounds), ----
      //      extend the type in a .d.ts file:
      //        declare module "@mui/material/styles" {
      //          interface Palette { tone: { light: string; dark: string } }
      //          interface PaletteOptions { tone?: { light?: string; dark?: string } }
      //        }
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      // You can override the default variants here, e.g.:
      // h1: { fontWeight: 800, fontSize: "3.5rem" },
      // h2: { fontWeight: 700 },
      // h4: { fontWeight: 600 },  // used by section titles throughout
    },
    shape: {
      borderRadius: 8, // default corner rounding for cards, buttons, etc.
    },
  });

  // Prevent hydration mismatch — only render after mounting on the client.
  // This is the standard pattern for MUI + Next.js App Router (emotion cache
  // must be created on the client to avoid SSR style mismatches).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
