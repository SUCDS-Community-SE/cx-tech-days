import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import SpeakerCard from "../components/SpeakerCard";
import { speakers } from "../objects/SpeakerData";
import Typography from "../components/Typography";

export default function Speaker() {
  return (
    <div>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Typography variant="h3" marked="center" component="h2" sx={{ mb: 2 }}>
          Speaker
        </Typography>
      </Box>
      <Grid2
        component="section"
        container
        spacing={2}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          // mt: 10,
          // mb: 10,
          // ml: 10,
          // mr: 10,
          margin: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {speakers.map((speaker) => (
          <SpeakerCard
            name={speaker.name}
            imageSrc={speaker.imageSrc}
            shortInfo={speaker.shortInfo}
          />
        ))}
      </Grid2>
    </div>
  );
}
