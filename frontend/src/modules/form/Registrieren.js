import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@mhp.com$");

export default function Registrieren(props) {
  const { onClose, open } = props;
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
            switch ((errorCode, errorMessage)) {
              case "auth/email-already-in-use":
                alert(errorMessage);
                break;
              case "auth/invalid-email":
                alert(errorMessage);
                break;
              case "auth/weak-password":
                alert(errorMessage);
                break;
              default:
              // do nothing
            }
          });
      } else {
        alert("Passwörter stimmen nicht überein");
      }
    } else {
      alert("Bitte geben Sie eine gültige MHP-Emailadresse ein.");
    }
  };

  const handleBackdropClick = () => {
    onClose();
  };

  return (
    <Dialog
      onBackdropClick={handleBackdropClick}
      open={open}
      PaperProps={{ sx: { width: "40%", height: "30%" } }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DialogTitle>Registrieren</DialogTitle>
        <TextField
          required
          placeholder="Deine email"
          variant="standard"
          autoComplete="off"
          sx={{
            width: "70%",
            mt: 3,
            mb: 2,
            borderRadius: "12px",
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
            width: "70%",
            mt: 3,
            mb: 2,
            borderRadius: "12px",
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
            width: "70%",
            mt: 3,
            mb: 2,
            borderRadius: "12px",
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
