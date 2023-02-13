import React from "react";
import Overview from "../views/Overview";
import HowItWorks from "../views/HowItWorks";
import InputForm from "../views/InputForm";

function Home(props) {
  const { handleError } = props;

  const handle_Error = (errorMessage) => {
    handleError(errorMessage);
  };

  return (
    <div>
      <Overview />
      <InputForm handleError={handle_Error} />
      <HowItWorks />
    </div>
  );
}

export default Home;
