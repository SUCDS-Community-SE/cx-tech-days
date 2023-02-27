import React from "react";
import AppAppBar from "./modules/views/AppAppBar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import withRoot from "./modules/withRoot";
import { auth } from "./FirebaseConfig";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/pages/Home";
import Admin from "./modules/pages/Admin";
import AdminSignIn from "./modules/pages/AdminSignIn";
import LinearProgress from "@mui/material/LinearProgress";
import Contact from "./modules/pages/Contact";
import Impress from "./modules/pages/Impress";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AuthContext = React.createContext(null);

function getTimeRemaining() {
  //UTC time 04/26/2023,11:00:00 (UTC+1 = 12:00:00)
  const date = "04/26/2023,11:00:00";
  const total = Date.parse(date) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function App() {
  const [errorMessage, setErrorMessage] = React.useState();
  const [authLoading, setAuthLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining());
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setAuthLoading(false);
    });
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleUserChange = (user) => {
    //setUser(user);
  };

  const handleAdminChange = (admin) => {
    //setAdmin(admin);
  };

  const handle_Error = (errorMessage) => {
    setErrorMessage(errorMessage);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <AppAppBar handleError={handle_Error} />

        <Routes>
          <Route
            path={""}
            element={
              <Home
                handleError={handle_Error}
                userChange={handleUserChange}
                timeRemaining={timeRemaining}
              />
            }
          />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/impress"} element={<Impress />} />
          <Route
            exact
            path={"/admin/signin"}
            element={
              authLoading ? (
                <LinearProgress color="secondary" />
              ) : !user ? (
                <AdminSignIn handleError={handle_Error} />
              ) : (
                <Admin />
              )
            }
          />
          <Route
            exact
            path={"/admin"}
            element={
              authLoading ? (
                <LinearProgress color="secondary" />
              ) : !user ? (
                <AdminSignIn handleError={handle_Error} />
              ) : (
                <Admin />
              )
            }
          />
        </Routes>
        <Snackbar
          onClose={handleClose}
          open={open}
          action={action}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={3000}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
      </Router>
    </AuthContext.Provider>
  );
}

export default withRoot(App);
