import React from "react";
import { Card, Grid, Stack, Typography } from "@mui/material";

export default function AdminStats(props) {
  const { title, value } = props;
  return (
    <Card
      sx={{
        ml: 7,
        mt: 2,
        mb: 1,
        boxShadow: 3,
        padding: 2,
        borderRadius: "12px",
      }}
    >
      <Stack spacing={0.5}>
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h4" color="inherit">
              {value}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Card>
  );
}
