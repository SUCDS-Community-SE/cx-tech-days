import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../App";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import API from "../../api";
import SuggestionObject from "../objects/suggestionObject";

async function getData() {
  const data = await API.getAPI().getSuggestions();
  return data;
}

export default function SuggestionTable() {
  const { user } = useContext(AuthContext);
  const [rows, setRows] = useState([]);
  //   const [selectedButton, setSelectedButton] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData().then((data) => setRows(data));
    }
    return () => (mounted = false);
  }, []);

  //   const handleChange = (suggestion) => {
  //     if (selectedButton === suggestion.id) {
  //       setSelectedButton(null);
  //     } else {
  //       setSelectedButton(suggestion.id);
  //     }
  //   };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "primary",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Typography variant="h3" marked="center" component="h2" sx={{ mb: 2 }}>
        Einreichungen
      </Typography>
      <Container sx={{ mt: 2, mb: 10, display: "flex", position: "relative" }}>
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
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Typography
                    variant="h5"
                    marked="center"
                    component="h2"
                  ></Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h5" marked="center" component="h2">
                    Title
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h5" marked="center" component="h2">
                    Thema
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h5" marked="center" component="h2">
                    Format
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h5" marked="center" component="h2">
                    Speaker
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="left">{row.topic}</TableCell>
        <TableCell align="left">{row.type}</TableCell>
        <TableCell align="left">{row.speaker}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <TableRow>
                <TableCell align="left">
                  <Typography variant="h6" marked="center" component="h2">
                    Abstract
                  </Typography>
                </TableCell>
                <TableCell align="left">{row.abstract}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <Typography variant="h6" marked="center" component="h2">
                    Speaker Short Info
                  </Typography>
                </TableCell>
                <TableCell align="left">{row.speakerShortInfo}</TableCell>
              </TableRow>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
