import * as React from "react";
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

function createData(id, time, topic, type, speaker) {
  return { id, time, topic, type, speaker };
}

const rows = [
  createData(0, "12:00", "Topic 1", "Type 1", "Speaker 1"),
  createData(1, "12:30", "Topic 2", "Type 1", "Speaker 1"),
  createData(2, "13:00", "free", "free", "free"),
  createData(3, "13:30", "Topic 3", "Type 1", "Speaker 1"),
  createData(4, "14:00", "Topic 4", "Type 1", "Speaker 1"),
  createData(5, "14:30", "Topic 5", "Type 1", "Speaker 1"),
];

export default function Timetable() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "white" }}
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
            Timetable
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Time</TableCell>
                <TableCell align="left">Topic</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">Speaker</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {row.time}
                  </TableCell>
                  <TableCell align="left">{row.topic}</TableCell>
                  <TableCell align="left">{row.type}</TableCell>
                  <TableCell align="left">{row.speaker}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
