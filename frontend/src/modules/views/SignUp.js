import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Anmelden from "../form/Anmelden";
import Registrieren from "../form/Registrieren";

export default function SignUp(props) {
  const { userChange } = props;
  const [si_open, setSignInOpen] = React.useState(false);
  const [su_open, setSignUpOpen] = React.useState(false);

  const handleAnmeldenClickOpen = (e) => {
    e.preventDefault();
    setSignInOpen(true);
  };

  const handleUserChange = (user) => {
    setSignInOpen(false);
    setSignUpOpen(false);
    userChange(user);
  };

  const handleRegestrierenClickOpen = (e) => {
    e.preventDefault();
    setSignUpOpen(true);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
              py: 8,
              px: 3,
              boxShadow: 3,
              borderRadius: "12px",
            }}
          >
            <Box component="form" sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Anmeldung
              </Typography>
              <Typography variant="h5">
                Werde Teil eines neuen Formats, um den Austausch untereinander
                zu fördern und nutze die Chance dein Wissen weiterzugeben.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  align="center"
                  sx={{ width: "40%", borderRadius: "12px", mt: 3 }}
                  onClick={handleAnmeldenClickOpen}
                >
                  Anmelden
                </Button>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  align="center"
                  sx={{ width: "40%", borderRadius: "12px", mt: 3 }}
                  onClick={handleRegestrierenClickOpen}
                >
                  Registrieren
                </Button>
              </Box>
              <Anmelden open={si_open} onClose={handleUserChange} />
              <Registrieren open={su_open} onClose={handleUserChange} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background: "url(/static/themes/onepirate/CTAImageDots.png)",
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="call to action"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: 600,
              boxShadow: 3,
              borderRadius: "12px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
