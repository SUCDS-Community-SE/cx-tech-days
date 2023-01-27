import React from "react";
import Hero from "./modules/views/Hero";
import AppFooter from "./modules/views/AppFooter";
import Overview from "./modules/views/Overview";
import SignUp from "./modules/views/SignUp";
import InputForm from "./modules/views/InputForm";
import HowItWorks from "./modules/views/HowItWorks";
import AppAppBar from "./modules/views/AppAppBar";
import VoteForm from "./modules/views/VoteForm";
import withRoot from "./modules/withRoot";

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Hero />
      <Overview />
      <InputForm />
      <VoteForm />
      <SignUp />
      <HowItWorks />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
