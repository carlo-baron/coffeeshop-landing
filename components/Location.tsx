"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Location() {
  return (
    <Box id="location" className="flex flex-col bg-green-100 p-4 w-full h-full min-h-screen">
      <Box className="header mb-6">
        <Typography variant="h4" fontWeight={600} className="text-center">
          Visit Us
        </Typography>
        <Typography
          className="text-center"
          variant="subtitle1"
          color="textSecondary"
        >
          {"We'd"} love to see you at Brew Haven
        </Typography>
      </Box>

      <Box
        className="grow md:justify-center md:flex-row flex flex-col gap-4"
        sx={{
          alignItems: "stretch",
        }}
      >
        <Card
          sx={{
            padding: "16px",
            border: "1px solid gray",
            flex: 1,
            maxWidth: 'sm'
          }}
        >
          <CardContent className="flex flex-col gap-8">
            <InfoCard title="Location" icon={<LocationPinIcon />}>
              <Typography variant="subtitle2" color="textSecondary">
                123 Coffee Street
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Downtown District
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                City, State 12345
              </Typography>
            </InfoCard>

            <InfoCard title="Phone" icon={<PhoneIcon />}>
              <Typography variant="subtitle2" color="textSecondary">
                +639123456789
              </Typography>
            </InfoCard>

            <InfoCard title="Email" icon={<EmailIcon />}>
              <Typography variant="subtitle2" color="textSecondary">
                brewhaven@gmail.com
              </Typography>
            </InfoCard>
          </CardContent>
        </Card>

        <Card
          className="hours"
          sx={{
            padding: "16px",
            border: "1px solid gray",
            flex: 1,
            maxWidth: 'sm'
          }}
        >
          <CardContent className="flex flex-col gap-8">
            <InfoCard title="Opening Hours" icon={<AccessTimeIcon />} />

            <Box className="gap-4 flex flex-col">
              <Box className="flex justify-between">
                <Typography variant="subtitle2" color="textSecondary">
                  Monday - Friday
                </Typography>
                <Typography variant="subtitle2">7:00 AM - 8:00 PM</Typography>
              </Box>
              <Divider orientation="horizontal" />

              <Box className="flex justify-between">
                <Typography variant="subtitle2" color="textSecondary">
                  Saturday
                </Typography>
                <Typography variant="subtitle2">8:00 AM - 9:00 PM</Typography>
              </Box>
              <Divider orientation="horizontal" />

              <Box className="flex justify-between">
                <Typography variant="subtitle2" color="textSecondary">
                  Sunday
                </Typography>
                <Typography variant="subtitle2">8:00 AM - 9:00 PM</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

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
          className="bg-green-200 text-green-600 flex 
          items-center justify-center w-13 aspect-1/1 
          rounded-full"
        >
          {icon}
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" fontWeight={500} lineHeight={1.6}>
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}

