import React from "react";
import Typography from "../components/Typography";
import Box from "@mui/material/Box";
import MHP18_00184_powerpoint from "../../pictures/MHP18_00184_powerpoint.jpg";

export default function Contact() {
  return (
    <React.Fragment>
      <Box
        style={{
          backgroundImage: `url(${MHP18_00184_powerpoint})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "25vh",
        }}
      />
      <Box
        sx={{
          margin: 3,
          height: "250px",
          width: "350px",
          boxShadow: 3,
          borderRadius: "12px",
          backgroundColor: "white",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
          },
          "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
        }}
      >
        <Typography variant="h3" sx={{ paddingTop: 1, ml: 5, mb: 3 }}>
          Kontakt
        </Typography>
        <Typography variant="h5" sx={{ ml: 5, mb: 1 }}>
          CX Tech Day
        </Typography>
        <Typography sx={{ ml: 5 }}>Hindenburgstraße 45,</Typography>
        <Typography sx={{ ml: 5 }}>71638 Ludwigsburg</Typography>
        <Typography sx={{ ml: 5 }}>
          <a href="mailto:TR-cxtechday@mhp-group.com">
            TR-cxtechday@mhp-group.com
          </a>
        </Typography>
      </Box>
    </React.Fragment>
  );
}
