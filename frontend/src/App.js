import React from "react";
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
  Navigate,
} from "react-router-dom";
import Home from "./modules/pages/Home";
import Admin from "./modules/pages/Admin";
import AdminSignIn from "./modules/pages/AdminSignIn";

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
  const [errorMessage, setErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining());

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //setUser(user);
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
    <AuthProvider>
      <Router>
        <AppAppBar userChange={handleUserChange} handleError={handle_Error} />
        <React.Fragment>
          <Routes>
            <Route
              path={PUBLIC_URL}
              element={
                <Home
                  handleError={handle_Error}
                  userChange={handleUserChange}
                  timeRemaining={timeRemaining}
                />
              }
            />
            <Route
              path={PUBLIC_URL + "admin/signin"}
              element={<AdminSignIn />}
            ></Route>
            <AdminSecured
              exact
              path={PUBLIC_URL + "/admin"}
              component={Admin}
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
    </AuthProvider>
  );
}

export default withRoot(App);

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged(setUser, setAdmin);
  }, []);
  return (
    <AuthContext.Provider value={{ user, admin }}>
      {children}
    </AuthContext.Provider>
  );
}

const AdminSecured = ({ component: Route, ...rest }) => {
  const { admin } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!admin ? (
          <Route {...routeProps} />
        ) : (
          <Navigate to={PUBLIC_URL + "/admin/signin"} />
        )
      }
    />
  );
};
