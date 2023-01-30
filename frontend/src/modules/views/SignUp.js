import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import API from "../../api";
import uuid from "react-uuid";

function signUpEmail(emailaddress) {
  let email = {
    id: uuid(),
    email: emailaddress,
  };
  API.getAPI().addEmail(email);
  console.log(emailaddress);
}

function validateEmail(emailaddress) {
  const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@mhp.com$");
  if (validEmail.test(emailaddress)) {
    return true;
  } else {
    return false;
  }
}

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [emailaddress, setEmailaddress] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate email
    if (!validateEmail(emailaddress)) {
      alert("Please enter a valid email address");
    } else {
      // adds email to the list
      signUpEmail(emailaddress);
      setOpen(true);
      // clears the input fields
      setEmailaddress("");
    }
  };

  const handleClose = () => {
    setOpen(false);
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
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography variant="h2" component="h2" gutterBottom>
                Anmeldung
              </Typography>
              <Typography variant="h5">
                Werde Teil eines neuen Formats, um den Austausch untereinander
                zu fördern und nutze die Chance dein Wissen weiterzugeben.
              </Typography>
              <TextField
                /* noBorder */
                placeholder="Deine email"
                variant="standard"
                autoComplete="off"
                sx={{
                  width: "100%",
                  mt: 3,
                  mb: 2,
                  borderRadius: "12px",
                }}
                onChange={(e) => {
                  setEmailaddress(e.target.value);
                }}
              />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                align="center"
                sx={{ width: "50%", borderRadius: "12px" }}
              >
                Keep me updated
              </Button>
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
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will keep you up to date."
      />
    </Container>
  );
}
