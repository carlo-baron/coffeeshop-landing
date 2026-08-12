"use client";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { location } from "@/config/siteConfig";

export default function Location() {
  return (
    <Box
      id="location"
      component="section"
      className="flex flex-col bg-accent-bg p-4 w-full h-full min-h-screen"
    >
      <Box className="header mb-6">
        <Typography
          variant="h4"
          fontWeight={600}
          className="text-center"
          component="h2"
        >
          {location.title}
        </Typography>
        <Typography
          className="text-center"
          variant="subtitle1"
          color="textSecondary"
          component="p"
        >
          {location.subtitle}
        </Typography>
      </Box>

      <Box
        className="grow md:justify-center md:flex-row flex flex-col gap-4"
        sx={{ alignItems: "stretch" }}
      >
        {/* ---- Contact info card ------------------------------------------- */}
        <Card
          sx={{
            padding: "16px",
            border: "1px solid gray",
            flex: 1,
            maxWidth: "sm",
          }}
        >
          <CardContent className="flex flex-col gap-8">
            <InfoCard title="Location" icon={<LocationPinIcon />}>
              {location.address.map((line) => (
                <Typography key={line} variant="subtitle2" color="textSecondary">
                  {line}
                </Typography>
              ))}
            </InfoCard>

            <InfoCard title="Phone" icon={<PhoneIcon />}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="a"
                href={`tel:${location.phone}`}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                {location.phone}
              </Typography>
            </InfoCard>

            <InfoCard title="Email" icon={<EmailIcon />}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="a"
                href={`mailto:${location.email}`}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                {location.email}
              </Typography>
            </InfoCard>
          </CardContent>
        </Card>

        {/* ---- Opening hours card ------------------------------------------ */}
        <Card
          className="hours"
          sx={{
            padding: "16px",
            border: "1px solid gray",
            flex: 1,
            maxWidth: "sm",
          }}
        >
          <CardContent className="flex flex-col gap-8">
            <InfoCard title="Opening Hours" icon={<AccessTimeIcon />} />

            <Box className="gap-4 flex flex-col">
              {location.hours.map((entry, i) => (
                <Box key={entry.days}>
                  <Box className="flex justify-between">
                    <Typography variant="subtitle2" color="textSecondary">
                      {entry.days}
                    </Typography>
                    <Typography variant="subtitle2">{entry.time}</Typography>
                  </Box>
                  {i < location.hours.length - 1 && (
                    <Divider orientation="horizontal" sx={{ mt: 2 }} />
                  )}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

// ---- Reusable info-row component --------------------------------------------

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}

function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <Box className="flex gap-4 info">
      <Box>
        <Box
          className="bg-accent-icon-bg text-accent-icon flex items-center justify-center w-13 aspect-1/1 rounded-full"
          aria-hidden="true"
        >
          {icon}
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={500} lineHeight={1.6} component="h3">
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}
