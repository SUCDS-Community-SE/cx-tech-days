import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { PUBLIC_URL, auth } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";
import Button from "@mui/material/Button";

export default function AppAppBar(props) {
  const { user, userChange, handleError } = props;

  const loginState = user ? (
    <Button
      variant="text"
      underline="none"
      disableElevation
      disableRipple
      size="large"
      sx={{
        color: "secondary.main",
        fontSize: 15,
        fontWeight: "bold",
        bgcolor: "transparent",
      }}
      onClick={() => {
        signOut(auth)
          .then(() => {
            userChange(null);
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
            handleError(error.message);
          });
      }}
    >
      Logout
    </Button>
  ) : (
    <Button
      variant="text"
      underline="none"
      disableElevation
      disableRipple
      size="large"
      sx={{
        color: "secondary.main",
        fontSize: 15,
        fontWeight: "bold",
        bgcolor: "transparent",
      }}
      onClick={() => {
        window.scrollTo({ top: 1045, behavior: "smooth" });
      }}
    >
      Login
    </Button>
  );

  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "flex-start" }}>
          <Box />
          <Link
            variant="h7"
            underline="none"
            href={PUBLIC_URL}
            sx={{ fontSize: 45 }}
          >
            {"MHP"}
          </Link>
          {/* Login für User zunächst onhold */}
          {/* <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {loginState}
          </Box> */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
