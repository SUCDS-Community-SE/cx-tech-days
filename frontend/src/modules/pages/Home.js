import React from "react";
import Overview from "../views/Overview";
import SignUp from "../views/SignUp";
import HowItWorks from "../views/HowItWorks";

function Home(props) {
  const { userChange } = props;
  const { handleError } = props;

  const handleUserChange = (user) => {
    userChange(user);
  };

  const handle_Error = (errorMessage) => {
    handleError(errorMessage);
  };

  return (
    <div>
      <Overview />
      <SignUp userChange={handleUserChange} handleError={handle_Error} />
      <HowItWorks />
    </div>
  );
}

export default Home;
