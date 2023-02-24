import React from "react";
import Box from "@mui/material/Box";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { auth } from "../../FirebaseConfig";
import { signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router";
import MHP17_00208_powerpoint from "../../pictures/MHP17_00208_powerpoint.jpg";

const image = MHP17_00208_powerpoint;

export default function AppAppBar(props) {
  const { user, setUser } = React.useContext(AuthContext);
  const { handleError } = props;

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

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
        <Toolbar sx={{ justifyContent: "flex-start", overflow: "hidden" }}>
          <Box />
          <Button
            onClick={navigateHome}
            style={{ backgroundColor: "transparent" }}
            sx={{ borderRadius: 10 }}
          >
            <img src={image} alt="MHP Logo" width="160" height="100" />
          </Button>
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
