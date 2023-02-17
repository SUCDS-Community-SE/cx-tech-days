import React from "react";
import Hero from "./modules/views/Hero";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import withRoot from "./modules/withRoot";
import { PUBLIC_URL, auth } from "./FirebaseConfig";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Home from "./modules/pages/Home";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  const [user, setUser] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining());

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleUserChange = (user) => {
    setUser(user);
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
    <Router>
      <React.Fragment>
        <AppAppBar
          userChange={handleUserChange}
          user={user}
          handleError={handle_Error}
        />
        <Hero timeRemaining={timeRemaining} />
        <Routes>
          <Route
            path={PUBLIC_URL}
            element={
              <Home
                user={user}
                handleError={handle_Error}
                userChange={handleUserChange}
              />
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
        <AppFooter />
      </React.Fragment>
    </Router>
  );
}

export default withRoot(App);

function Secured(props) {
  const { user } = props;

  if (!user || user === undefined) {
    // Redirect them to the /homepage, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    redirect({ PUBLIC_URL });
  }

  return props.children;
}
