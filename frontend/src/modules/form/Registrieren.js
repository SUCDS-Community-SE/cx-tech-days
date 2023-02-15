import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "../components/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@mhp.com$");

export default function Registrieren(props) {
  const { onClose, open, handleError } = props;
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [confPassword, setConfPassword] = React.useState();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validEmail.test(email)) {
      if (confPassword === password) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            onClose(userCredential.user);
            navigate("/main");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            handleError(errorMessage);
          });
      } else {
        let errorMessage = "Passwörter stimmen nicht überein";
        handleError(errorMessage);
      }
    } else {
      let errorMessage = "Bitte geben Sie eine gültige MHP-Emailadresse ein.";
      handleError(errorMessage);
    }
  };

  const handleBackdropClick = () => {
    onClose();
  };

  return (
    <Dialog
      onBackdropClick={handleBackdropClick}
      open={open}
      PaperProps={{ sx: { width: "500px", height: "400px" } }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DialogTitle variant="h4">
          Registrieren
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <TextField
          required
          placeholder="Deine email"
          variant="standard"
          autoComplete="off"
          sx={{
            width: "80%",
            mt: 3,
            mb: 2,
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          placeholder="Dein Passwort"
          variant="standard"
          type="password"
          autoComplete="current-password"
          sx={{
            width: "80%",
            mt: 3,
            mb: 2,
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          required
          placeholder="Confirm Passwort"
          variant="standard"
          type="password"
          autoComplete="current-password"
          sx={{
            width: "80%",
            mt: 3,
            mb: 2,
            marginBottom: "45px",
          }}
          onChange={(e) => {
            setConfPassword(e.target.value);
          }}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          align="center"
          // sx={{ width: "40%", borderRadius: "12px", mt: 3 }}
          onClick={handleSignUp}
        >
          Registrieren
        </Button>
      </Box>
    </Dialog>
  );
}
