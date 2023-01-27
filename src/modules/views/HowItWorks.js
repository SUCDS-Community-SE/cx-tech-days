import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function HowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "primary", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src=""
          alt="Picture"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/ios/250/000000/dating-website.png"
                  alt="Picture 1"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Thema einreichen
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/ios/250/000000/training.png"
                  alt="Picture 2"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Art des Vortrags auswählen
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/ios/250/000000/user.png"
                  alt="Picture 3"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {"Speaker eintragen"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          onClick={() => {
            window.scrollTo(0, 1100);
          }}
          sx={{ mt: 8, boxShadow: 3, borderRadius: "12px" }}
        >
          Submit Topic
        </Button>
      </Container>
    </Box>
  );
}

export default HowItWorks;
