import React, { useContext } from "react";
import { AuthContext } from "../../App";
import SuggestionTable from "../views/SuggestionTable";
import { Grid, Box } from "@mui/material";

export default function Admin(props) {
  const { handleError } = props;
  const { user } = useContext(AuthContext);

  const handle_Error = (errorMessage) => {
    handleError(errorMessage);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flexGrow: 1,
        bgcolor: "secondary.lighter",
      }}
    >
      <SuggestionTable handleError={handle_Error} />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexGrow: 1,
          bgcolor: "secondary.lighter",
          height: "100px",
        }}
      />
    </Grid>
  );
}
