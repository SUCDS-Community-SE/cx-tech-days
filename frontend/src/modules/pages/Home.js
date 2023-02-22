import React from "react";
import Overview from "../views/Overview";
import HowItWorks from "../views/HowItWorks";
import InputForm from "../views/InputForm";
import SignUp from "../views/SignUp";
import VoteForm from "../views/VoteForm";
import Hero from "../views/Hero";
import Timetable from "../views/Timetable";
import Speaker from "../views/Speaker";
import AppFooter from "../views/AppFooter";
import { Divider } from "@mui/material";

function Home(props) {
  const { handleError } = props;
  const { userChange } = props;
  const { user } = props;
  const { timeRemaining } = props;

  const handleUserChange = (user) => {
    userChange(user);
  };

  const handle_Error = (errorMessage) => {
    handleError(errorMessage);
  };

  const loginState = user ? (
    <VoteForm user={user} />
  ) : (
    <SignUp userChange={handleUserChange} handleError={handle_Error} />
  );

  return (
    <div>
      <Hero timeRemaining={timeRemaining} />
      <Overview />
      {/* {loginState}
      <Divider />
      <Timetable />
      <Speaker />
      <Divider /> */}
      <InputForm handleError={handle_Error} />
      <HowItWorks />
      <AppFooter />
    </div>
  );
}

export default Home;
