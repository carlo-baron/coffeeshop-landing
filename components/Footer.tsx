"use client";
import { Box, Typography, Divider, Link } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { footer, socialLinks } from "@/config/siteConfig";

// ---- Map siteConfig social link keys to their icons -------------------------
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: <FacebookIcon sx={{ color: "white" }} />,
  instagram: <InstagramIcon sx={{ color: "white" }} />,
  x: <XIcon sx={{ color: "white" }} />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id="contact"
      component="footer"
      className="text-white flex flex-col p-4 bg-footer-bg w-full min-h-[60vh]"
    >
      <Box className="mb-4 lg:py-10 lg:px-20 lg:justify-center lg:flex-row gap-4 text-white flex flex-col bg-footer-bg grow">
        {/* ---- Brand column ------------------------------------------------- */}
        <Box className="flex-1 flex flex-col gap-4 header">
          <Box className="flex gap-2">
            <CoffeeIcon fontSize="large" aria-hidden="true" />
            <Typography variant="h5">{footer.brandName}</Typography>
          </Box>
          <Typography className="text-footer-muted" variant="subtitle1">
            {footer.description}
          </Typography>
        </Box>

        {/* ---- Quick Links column ------------------------------------------- */}
        <Box className="flex-1 flex flex-col gap-4 links">
          <Typography variant="h6" fontWeight={400}>
            {footer.quickLinksTitle}
          </Typography>
          <Box component="ul" className="text-footer-muted flex flex-col gap-2 list-none p-0 m-0">
            {footer.quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  color="inherit"
                  underline="none"
                  href={link.href}
                  sx={{ "&:hover": { color: "warning.main" } }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </Box>
        </Box>

        {/* ---- Follow Us column --------------------------------------------- */}
        <Box className="flex-1 flex flex-col gap-4">
          <Typography variant="h6" fontWeight={400}>
            {footer.followUsTitle}
          </Typography>
          <Box component="ul" className="flex gap-4 list-none p-0 m-0">
            {Object.entries(socialLinks).map(([platform, url]) => (
              <li key={platform}>
                <Box
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="flex items-center justify-center hover:bg-social-hover w-10 rounded-full aspect-1/1 bg-footer-icon-bg"
                >
                  {SOCIAL_ICONS[platform] ?? null}
                </Box>
              </li>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider className="bg-footer-icon-bg" role="separator" />

      {/* ---- Copyright ------------------------------------------------------ */}
      <Box className="pt-4 text-footer-muted flex items-center justify-center w-full">
        <Typography variant="subtitle1">
          {footer.copyright.replace("{{year}}", String(currentYear))}
        </Typography>
      </Box>
    </Box>
  );
}
