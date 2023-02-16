import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "../components/Button";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Anmelden(props) {
  const { handleuserchange, open, onClose, handleError } = props;
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        handleuserchange(userCredential.user);
        console.log(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        handleError(errorMessage);
      });
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        let Message = "Email wurde gesendet";
        handleError(Message);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch ((errorCode, errorMessage)) {
          case "auth/invalid-email":
            return handleError(errorMessage);
          case "auth/user-not-found":
            return handleError(errorMessage);
          default:
          // do nothing
        }
      });
  };

  const handleBackdropClick = () => {
    onClose();
  };

  return (
    <Dialog
      onBackdropClick={handleBackdropClick}
      open={open}
      PaperProps={{ sx: { width: "500px", height: "325px" } }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DialogTitle variant="h4">
          Anmelden
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
            mb: 5,
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            align="center"
            sx={{ mr: 2 }}
            onClick={handleSignIn}
          >
            Anmelden
          </Button>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            align="center"
            sx={{ ml: 2 }}
            onClick={handlePasswordReset}
          >
            Passwort vergessen
          </Button>
        </Box>
      </Container>
    </Dialog>
  );
}
