"use client";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { featuredMenu } from "@/config/siteConfig";

export default function FeaturedMenu() {
  const menuItems = featuredMenu.items.map((item) => (
    <Card
      className="snap-center"
      key={item.name}
      sx={{
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", sm: "350px" },
        flexShrink: 0,
      }}
    >
      <CardMedia sx={{ overflow: "hidden" }}>
        <motion.img
          className="aspect-1/1 w-full object-cover"
          src={item.image}
          alt={item.alt}
          whileHover={{ scale: 1.1 }}
        />
      </CardMedia>
      <CardContent className="grow flex flex-col justify-center">
        <Box className="flex items-center justify-between top">
          <Typography variant="h4" fontWeight={500}>
            {item.name}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={400}
            className="price"
            color="warning"
          >
            ${item.price}
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="textSecondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <Box
      id="menu"
      component="section"
      className="bg-accent-bg gap-2 flex flex-col p-4 w-full h-[100vh]"
    >
      <Box className="flex flex-col items-center justify-center w-full header">
        <Typography variant="h4" fontWeight={600} component="h2">
          {featuredMenu.title}
        </Typography>
        <Typography
          className="text-center"
          variant="caption"
          color="textSecondary"
          component="p"
        >
          {featuredMenu.subtitle}
        </Typography>
      </Box>

      <Box className="xl:justify-center xl:items-center snap-x flex p-4 gap-4 overflow-x-auto">
        {menuItems}
      </Box>
    </Box>
  );
}
