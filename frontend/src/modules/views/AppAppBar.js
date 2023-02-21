import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { auth } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import { AuthContext } from "../../App";

export default function AppAppBar(props) {
  const { user, setUser } = React.useContext(AuthContext);
  const { handleError } = props;

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
            setUser(null);
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
    <div />
    // <Button
    //   variant="text"
    //   underline="none"
    //   disableElevation
    //   disableRipple
    //   size="large"
    //   sx={{
    //     color: "secondary.main",
    //     fontSize: 15,
    //     fontWeight: "bold",
    //     bgcolor: "transparent",
    //   }}
    //   onClick={() => {
    //     window.scrollTo({ top: 1045, behavior: "smooth" });
    //   }}
    // >
    //   Login
    // </Button>
  );

  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "flex-start" }}>
          <Box />
          <Link variant="h7" underline="none" href={""} sx={{ fontSize: 45 }}>
            {"MHP"}
          </Link>
          {/* Login für User zunächst onhold */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {loginState}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
