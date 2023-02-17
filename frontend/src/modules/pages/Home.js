import React from "react";
import Overview from "../views/Overview";
import HowItWorks from "../views/HowItWorks";
import InputForm from "../views/InputForm";
import SignUp from "../views/SignUp";
import VoteForm from "../views/VoteForm";
import Timetable from "../views/Timetable";
import Speaker from "../views/Speaker";
import { Divider } from "@mui/material";

function Home(props) {
  const { handleError } = props;
  const { userChange } = props;
  const { user } = props;

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
      <Overview />
      {/* {loginState}
      <Divider />
      <Timetable />
      <Speaker />
      <Divider /> */}
      <InputForm handleError={handle_Error} />
      <HowItWorks />
    </div>
  );
}

export default Home;
