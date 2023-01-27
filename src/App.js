import React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import InputForm from "./modules/views/InputForm";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import AppAppBar from "./modules/views/AppAppBar";
import VoteForm from "./modules/views/VoteForm";
import withRoot from "./modules/withRoot";

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <InputForm />
      <VoteForm />
      <ProductCategories />
      <ProductHowItWorks />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
