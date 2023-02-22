import React, { useContext } from "react";
import { AuthContext } from "../../App";
import SuggestionTable from "../views/SuggestionTable";

export default function Admin() {
  const { user } = useContext(AuthContext);

  return (
    <React.Fragment>
      <SuggestionTable />
    </React.Fragment>
  );
}
