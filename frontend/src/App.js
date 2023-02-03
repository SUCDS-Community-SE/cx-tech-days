import React from "react";
import Hero from "./modules/views/Hero";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";
import { PUBLIC_URL } from "./FirebaseConfig";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./modules/pages/Home";
import Main from "./modules/pages/Main";

function App(props) {
  const { userChange } = props;
  const [user, setUser] = React.useState();

  const handleUserChange = () => {
    setUser(userChange);
  };

  return (
    <Router>
      <React.Fragment>
        <AppAppBar />
        <Hero />
        <Routes>
          <Route
            path={PUBLIC_URL}
            element={<Home userChange={handleUserChange} />}
          >
            <Route
              path={PUBLIC_URL + "/"}
              element={<Home userChange={handleUserChange} />}
            />
            <Route
              path={PUBLIC_URL + "/*"}
              element={<Home userChange={handleUserChange} />}
            />
            <Route
              path={PUBLIC_URL + "/main*"}
              element={
                <Secured user={user}>
                  <Main user={user} />
                </Secured>
              }
            />
          </Route>
        </Routes>
        <AppFooter />
      </React.Fragment>
    </Router>
  );
}

export default withRoot(App);

function Secured(props) {
  let location = useLocation();

  if (!props.user) {
    // Redirect them to the /homepage, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={PUBLIC_URL} state={{ from: location }} replace />;
  }

  return props.children;
}
