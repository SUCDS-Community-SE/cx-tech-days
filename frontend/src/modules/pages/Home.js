import React from "react";
import Overview from "../views/Overview";
import HowItWorks from "../views/HowItWorks";
import InputForm from "../views/InputForm";

function Home() {
  return (
    <div>
      <Overview />
      <InputForm />
      <HowItWorks />
    </div>
  );
}

export default Home;
