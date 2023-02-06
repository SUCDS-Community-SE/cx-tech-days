import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { PUBLIC_URL } from "../../FirebaseConfig";

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            href={PUBLIC_URL}
            sx={{ fontSize: 24 }}
          >
            {"MHP"}
          </Link>
          <Box
            sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
          ></Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
