import React from "react";
import { Card, CardHeader, Avatar, CardContent } from "@mui/material";
import Typography from "../components/Typography";

export default function SpeakerCard({ name, imageSrc, shortInfo }) {
  return (
    <Card
      hover={{
        transform: "scale3d(1.05, 1.05, 1)",
      }}
      sx={{
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        overflow: "visible",
        justifyContent: "flex-start",
        borderRadius: 15,
        height: 350,
        width: 300,
        margin: 3,
        transition: "transform 0.3s, border 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
        "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
      }}
    >
      <CardHeader
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: -6,
          mb: -3,
        }}
        avatar={
          <Avatar
            sx={{ width: 150, height: 150 }}
            alt={name}
            src={imageSrc}
            imgProps={{
              style: {
                objectFit: "cover",
                objectPosition: "top",
              },
            }}
          />
        }
      />
      <CardContent>
        <Typography variant="h4" component="div" sx={{ mb: 1 }}>
          {name}
        </Typography>
        <Typography sx={{ color: "primary.light", ml: 1, mr: 1, mb: 2 }}>
          {shortInfo}
        </Typography>
      </CardContent>
    </Card>
  );
}
