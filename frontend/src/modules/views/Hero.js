import React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import HeroLayout from "../components/HeroLayout";
import MHP20_00097_powerpoint from "../../pictures/MHP20_00097_powerpoint.jpg";

const backgroundImage = MHP20_00097_powerpoint;

export default function Hero(props) {
  const { timeRemaining } = props;

  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "left",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      {timeRemaining.total > 0 ? (
        <Typography
          color="inherit"
          align="center"
          variant="h3"
          sx={{
            mb: 4,
            alignSelf: "center",
            justifySelf: "flex-end",
            color: "secondary.main",
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: 3,
            padding: "12px",
          }}
        >
          {timeRemaining.days} Days : {timeRemaining.hours} Hours :{" "}
          {timeRemaining.minutes} Minutes : {timeRemaining.seconds} Seconds
        </Typography>
      ) : (
        <div></div>
      )}

      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, alignSelf: "center" }}
      >
        - Die Konferenz für Entwickler, Architekten Technologie-Interessierte
        und Software-Innovation -
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        onClick={() => {
          window.scrollTo({ top: 1400, behavior: "smooth" });
        }}
        sx={{
          minWidth: 200,
          borderRadius: "12px",
          boxShadow: 3,
          alignSelf: "center",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            transform: "translateY(-1px)",
          },
          "& > *": {
            minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
          },
        }}
      >
        Anmelden
      </Button> */}
      {/* <Typography
        variant="body1"
        color="inherit"
        sx={{ mt: 2, alignSelf: "center" }}
      >
        Jetzt noch bis zum 15.03.2023 Themen einreichen!
      </Typography> */}
    </HeroLayout>
  );
}
