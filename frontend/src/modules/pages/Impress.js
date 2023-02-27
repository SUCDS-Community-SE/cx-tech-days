import React from "react";
import Typography from "../components/Typography";
import Box from "@mui/material/Box";
import MHP18_00184_powerpoint from "../../pictures/MHP18_00184_powerpoint.jpg";

export default function Impress(props) {
  return (
    <div>
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
          height: "400px",
          width: "970px",
          boxShadow: 3,
          margin: 3,
          borderRadius: "12px",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
          },
          "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
        }}
      >
        <Typography variant="h3" sx={{ paddingTop: 1, ml: 5, mt: 3, mb: 3 }}>
          Impressum
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", ml: 5, mb: 1 }}>
          Verantwortlich für den Inhalt dieser Website ist die MHP Management-
          und IT-Beratung GmbH
        </Typography>
        <Typography sx={{ ml: 5 }}>Film- und Medienzentrum</Typography>
        <Typography sx={{ ml: 5 }}>
          Königsallee 49 | 71638 Ludwigsburg | Germany
        </Typography>
        <Typography sx={{ ml: 5 }}>
          Tel. +49 (0)7141 7856-0 | Fax +49 (0)7141 7856-199 |{" "}
          <a href="mailto:info@mhp.com">info(at)mhp.com</a>
        </Typography>
        <Typography sx={{ fontWeight: "bold", mt: 2, ml: 5 }}>
          Vertreten durch die Geschäftsführung:
        </Typography>
        <Typography sx={{ ml: 5 }}>
          Dr.-Ing. Ralf Hofmann (Vorsitzender)
        </Typography>
        <Typography sx={{ ml: 5 }}>Marc Zimmermann</Typography>
        <Typography sx={{ ml: 5 }}>Amtsgericht Stuttgart HRB 205571</Typography>
        <Typography sx={{ ml: 5 }}>Ust-Ident.-Nr. DE183227978</Typography>
      </Box>
    </div>
  );
}
