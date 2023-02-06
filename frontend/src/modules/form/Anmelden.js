import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function Anmelden(props) {
  const { onClose, open } = props;
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        onClose(userCredential.user);
        navigate("/main");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch ((errorCode, errorMessage)) {
          case "auth/invalid-email":
            alert(errorMessage);
            break;
          case "auth/wrong-password":
            alert(errorMessage);
            break;
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
      PaperProps={{ sx: { width: "40%", height: "20%" } }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DialogTitle>Anmelden</DialogTitle>
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
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          align="center"
          // sx={{ width: "40%", borderRadius: "12px", mt: 3 }}
          onClick={handleSignIn}
        >
          Anmelden
        </Button>
      </Box>
    </Dialog>
  );
}
