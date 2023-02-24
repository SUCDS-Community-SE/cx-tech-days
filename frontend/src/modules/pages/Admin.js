import React, { useContext } from "react";
import { AuthContext } from "../../App";
import SuggestionTable from "../views/SuggestionTable";
import { Grid, Box } from "@mui/material";

export default function Admin() {
  const { user } = useContext(AuthContext);

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
      <SuggestionTable />
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
