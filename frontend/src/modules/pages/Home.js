import React from "react";
import Overview from "../views/Overview";
import SignUp from "../views/SignUp";
import HowItWorks from "../views/HowItWorks";
import InputForm from "../views/InputForm";

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
      <InputForm />
      {/* <SignUp userChange={handleUserChange} handleError={handle_Error} /> */}
      <HowItWorks />
    </div>
  );
}

export default Home;
