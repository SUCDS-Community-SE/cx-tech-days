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
//import { getSuggestions } from "../../api";

function createData(id, topic, type, speaker, time, date, votes) {
  return { id, topic, type, speaker, time, date, votes };
}

const data = [
  createData(1, "React", "45min Session", "Hans", "11:00", "01.10.2023", 4),
  createData(2, "JavaScript", "Pecha Kucha", "Anna", "14:30", "01.10.2023", 8),
  createData(3, "SQL", "Workshop", "Otto", "16:00", "01.10.2023", 6.0, 9),
  createData(4, "TypeScript", "Workshop", "Martin", "13:00", "01.10.2023", 4),
  createData(5, "Python", "Workshop", "Sebastian", "17:00", "01.10.2023", 3),
];

export default function VoteForm() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    //mock data
    setRows(data);
    //fetch data from api
    //setRows(getSuggestions());
    //sort the array rows by votes descendent
    rows.sort((a, b) => {
      return b.votes - a.votes;
    });
    console.log(rows);
  });

  const sortAndMap = (rows) => {
    rows.sort((a, b) => {
      return b.votes - a.votes;
    });
    return rows.map((row) => (
      <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="left">
          {row.topic}
        </TableCell>
        <TableCell align="left">{row.type}</TableCell>
        <TableCell align="left">{row.speaker}</TableCell>
        <TableCell align="left">{row.time}</TableCell>
        <TableCell align="left">{row.date}</TableCell>
        <TableCell align="left">{row.votes}</TableCell>
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
                <TableCell align="left">Time</TableCell>
                <TableCell align="left">Date</TableCell>
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
