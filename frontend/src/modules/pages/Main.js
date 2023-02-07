import React from "react";
import Overview from "../views/Overview";
import SignUp from "../views/SignUp";
import VoteForm from "../views/VoteForm";
import Timetable from "../views/Timetable";
import HowItWorks from "../views/HowItWorks";

function Main(props) {
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
      <VoteForm />
      <Timetable />
      <HowItWorks />
    </div>
  );
}

export default Main;
