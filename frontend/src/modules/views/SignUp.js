import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Anmelden from "../form/Anmelden";
import Registrieren from "../form/Registrieren";
import MHP18_00173 from "../../pictures/MHP18_00173.jpg";

export default function SignUp(props) {
  const { userChange } = props;
  const { handleError } = props;
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

  const handle_Error = (errorMessage) => {
    handleError(errorMessage);
  };

  return (
    <Container
      component="section"
      sx={{
        mb: 10,
        mt: 13,
        display: "flex",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            zIndex: 1,
          }}
        >
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
            <Box
              component="form"
              sx={{
                maxWidth: 400,
              }}
            >
              <Typography variant="h3" component="h2" gutterBottom>
                Login
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
                  sx={{
                    width: "40%",
                    borderRadius: "12px",
                    mt: 3,
                    transition: "transform 0.3s, border 0.3s",
                    "&:hover": {
                      transform: "translateY(-1px)",
                    },
                    "& > *": {
                      minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                    },
                  }}
                  onClick={handleAnmeldenClickOpen}
                >
                  Anmelden
                </Button>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  align="center"
                  sx={{
                    width: "40%",
                    borderRadius: "12px",
                    mt: 3,
                    transition: "transform 0.3s, border 0.3s",
                    "&:hover": {
                      transform: "translateY(-1px)",
                    },
                    "& > *": {
                      minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                    },
                  }}
                  onClick={handleRegestrierenClickOpen}
                >
                  Registrieren
                </Button>
              </Box>
              <Anmelden
                open={si_open}
                onClose={handleUserChange}
                handleError={handle_Error}
              />
              <Registrieren
                open={su_open}
                onClose={handleUserChange}
                handleError={handle_Error}
              />
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
            }}
          />
          <Box
            component="img"
            src={MHP18_00173}
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
