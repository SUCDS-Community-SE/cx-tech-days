import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item = {
  minHeight: "375px",
  padding: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
  boxShadow: 3,
  borderRadius: "12px",
};

function Values() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "primary" }}
    >
      <Container sx={{ mt: 15, mb: 15, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src=""
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://img.icons8.com/ios/250/000000/podium-with-speaker.png"
                alt="Picture 1"
                sx={{ height: 55 }}
              />
              <Typography variant="h5" sx={{ my: 5 }}>
                Wann & Wo?
              </Typography>
              <Typography variant="body1">{"Mittwoch 26.04.2023"}</Typography>
              <Typography variant="body1">{"12 – 17 Uhr"}</Typography>
              <Typography variant="body1">{"Hindenburgstraße 45,"}</Typography>
              <Typography variant="body1">{"Ludwigsburg"}</Typography>
              <Typography variant="body1">
                {"(anschließendes After Work)"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://img.icons8.com/ios/250/000000/training.png"
                alt="Picture 2"
                sx={{ height: 55 }}
              />
              <Typography variant="h5" sx={{ my: 5 }}>
                Nutze deine Chance!
              </Typography>
              <Typography variant="body1">
                {
                  "Hast du Interesse dein Projekt, eine Lösung auf die du besonders Stolz bist, eine Architektur, besondere Coding Guidelines oder ein sonstiges technisches Thema vorzustellen? Dann nutze deine Chance und die Bühne, die dir hiermit gegeben wird."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://img.icons8.com/ios/250/000000/source-code.png"
                alt="Picture 3"
                sx={{ height: 55 }}
              />
              <Typography variant="h5" sx={{ my: 5 }}>
                Was erwartet euch?
              </Typography>
              <Typography variant="body1">
                {
                  "Wir bieten euch Vorträge von Kollegen sowie Gastvorträge externen Experten Platz für einen Austausch untereinander sowie ein gemütliches After Work mit Essen und Trinken"
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Values;
