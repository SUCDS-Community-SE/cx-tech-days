import React from "react";
import Overview from "../views/Overview";
import SignUp from "../views/SignUp";
import HowItWorks from "../views/HowItWorks";

function Home(props) {
  const { userChange } = props;

  const handleUserChange = (user) => {
    userChange(user);
  };

  return (
    <div>
      <Overview />
      <SignUp userChange={handleUserChange} />
      <HowItWorks />
    </div>
  );
}

export default Home;
