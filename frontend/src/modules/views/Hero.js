import React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import HeroLayout from "../components/HeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

export default function Hero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h1" marked="center">
        2023 MHP CX Tech Days
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Die Konferenz für Entwickler, Architekten Technologie-Interessierte und
        Software-Innovation
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        onClick={() => {
          window.scrollTo(0, 1600);
        }}
        sx={{ minWidth: 200, borderRadius: "12px", boxShadow: 3 }}
      >
        Registrieren
      </Button>
      <Typography variant="body1" color="inherit" sx={{ mt: 2 }}>
        Jetzt noch bis zum 20.02.2023 Themen einreichen!
      </Typography>
    </HeroLayout>
  );
}
