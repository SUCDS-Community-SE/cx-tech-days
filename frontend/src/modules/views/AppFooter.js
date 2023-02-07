import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://www.mhp.com/de/">
        2023 MHP Management- und IT-Beratung GmbH
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="">Kontakt</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="">Impressum</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="">Datenschutz</Link>
              </Box>
            </Box>
          </Grid> */}
          <Grid item xs={6} sm={8} md={4}></Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
