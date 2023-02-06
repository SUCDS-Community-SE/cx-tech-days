import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import Box from "@mui/material/Box";

export default function Registrieren(props) {
  const { onClose, open } = props;
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        onClose(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleBackdropClick = () => {
    onClose();
  };

  // function checkEmail(emailaddress) {
  //   auth
  //     .createUserWithEmailAndPassword(emailaddress, "")
  //     .then((userCredential) => {})
  //     .catch((error) => {
  //       switch (error.code) {
  //         case "auth/email-already-in-use":
  //           signInEmail(emailaddress);
  //       }
  //     });
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // validate email
  //   if (!validateEmail(emailaddress)) {
  //     alert("Please enter a valid email address");
  //   } else {
  //     // adds email to the list
  //     signUpEmail(emailaddress);
  //     setOpen(true);
  //     // clears the input fields
  //     setEmailaddress("");
  //   }
  // };

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
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          align="center"
          // sx={{ width: "40%", borderRadius: "12px", mt: 3 }}
          onSubmit={handleSignUp}
        >
          Registrieren
        </Button>
      </Box>
    </Dialog>
  );
}
