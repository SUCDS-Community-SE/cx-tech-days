import React from "react";
import Overview from "../views/Overview";
import InputForm from "../views/InputForm";
import VoteForm from "../views/VoteForm";
import Timetable from "../views/Timetable";
import HowItWorks from "../views/HowItWorks";

function Main() {
  return (
    <div>
      <Overview />
      <InputForm />
      <VoteForm />
      <Timetable />
      <HowItWorks />
    </div>
  );
}

export default Main;
