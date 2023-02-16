import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  px: 5,
  padding: 6,
  boxShadow: 3,
  borderRadius: "12px",
  minHeight: "775px",
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

export default function HowItWorks() {
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden" }}>
      <Container
        sx={{
          mt: 7,
          mb: 10,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" marked="center" component="h2" sx={{ mb: 5 }}>
          Deadline ist der 20.02.2023
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/ios/250/000000/map.png"
                  alt="Picture 1"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Formate zur Auswahl
                </Typography>
                <List sx={{ listStyleType: "disc" }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText
                      primary="Session"
                      secondary="45 Minuten, gut geeignet, wenn auch tiefergehen in ein Thema eingetaucht werden soll."
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText
                      primary={
                        <Link href="https://de.wikipedia.org/wiki/Pecha_Kucha">
                          Pecha Kucha
                        </Link>
                      }
                      secondary="6:40 Minuten Zeit, um ein Thema kurz und knapp vorzustellen."
                    />
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText
                      primary="Workshop"
                      secondary="2 Stunden, hands-on, um ein Thema zu vertiefen."
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/ios/250/000000/resume.png"
                  alt="Picture 2"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Themen zur Auswahl
                </Typography>
                <List sx={{ listStyleType: "disc" }}>
                  <ListItem sx={{ display: "list-item" }}>
                    Case Studies
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Live Demo #Slideless
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Core Programming Languages (Java, Kotlin, JavaScript,
                    TypeScript, Go, ...)
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Technische Architektur
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>Frameworks</ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Future Tech & Trends
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Developer Experience
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Performance & Security
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>Cloud</ListItem>
                  <ListItem sx={{ display: "list-item" }}>Web</ListItem>
                  <ListItem sx={{ display: "list-item" }}>Immersive</ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://img.icons8.com/ios/250/000000/delete-sign.png"
                  alt="Picture 3"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {"Was wir nicht suchen..."}
                </Typography>
                <List sx={{ listStyleType: "disc" }}>
                  <ListItem sx={{ display: "list-item" }}>
                    Vorträge über agile Arbeitsweisen
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    HighLevel-Themen
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Hochglanzfolien
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Management-Themen
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
