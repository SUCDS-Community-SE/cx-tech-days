import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import API from "../../api";

async function getData() {
  const object = await API.getAPI().getSuggestions();
  return object;
}

export default function VoteForm() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData().then((rows) => setRows(rows));
    }
    return () => (mounted = false);
  }, []);

  const sortAndMap = (rows) => {
    rows.sort((a, b) => {
      return b[4] - a[4];
    });
    return rows.map((row) => (
      <TableRow
        key={row[0]}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="left">
          {row[1]}
        </TableCell>
        <TableCell align="left">{row[2]}</TableCell>
        <TableCell align="left">{row[3]}</TableCell>
        <TableCell align="left">{row[4]}</TableCell>
      </TableRow>
    ));
  };

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "primary" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <TableContainer
          component={Paper}
          sx={{
            mt: 10,
            mb: 10,
            bgcolor: "white",
            padding: 3,
            margin: 3,
            boxShadow: 3,
            borderRadius: "12px",
          }}
        >
          <Typography variant="h4" component="h4" gutterBottom>
            Jetzt abstimmen
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Topic</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">Speaker</TableCell>
                <TableCell align="left">Votes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{sortAndMap(rows)}</TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
