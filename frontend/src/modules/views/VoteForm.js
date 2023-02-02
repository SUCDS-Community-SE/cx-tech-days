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
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import API from "../../api";
import SuggestionObject from "../objects/suggestionObject";

async function getData() {
  const data = await API.getAPI().getSuggestions();
  return data;
}

function addVote(suggestion) {
  suggestion.votes++;
  const votes = suggestion.votes.toString();
  let suggestionObject = new SuggestionObject(
    suggestion.id,
    suggestion.topic,
    suggestion.type,
    suggestion.speaker,
    votes
  );
  API.getAPI().updateSuggestion(suggestionObject);
  return suggestionObject;
}

function removeVote(suggestion) {
  suggestion.votes--;
  const votes = suggestion.votes.toString();
  let suggestionObject = new SuggestionObject(
    suggestion.id,
    suggestion.topic,
    suggestion.type,
    suggestion.speaker,
    votes
  );
  API.getAPI().updateSuggestion(suggestionObject);
  return suggestionObject;
}

export default function VoteForm() {
  const [rows, setRows] = useState([]);
  const [selectedButton, setSelectedButton] = useState();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData().then((rows) => setRows(rows));
    }
    return () => (mounted = false);
  }, []);

  const handleChange = (suggestion) => {
    if (selectedButton === suggestion.id) {
      setSelectedButton(null);
      removeVote(suggestion);
    } else {
      setSelectedButton(suggestion.id);
      addVote(suggestion);
    }
    //console.log(selectedButton);
    //updateSuggestions(suggestion);
  };

  const selectedVote = (suggestion) => {
    if (selectedButton === suggestion.id) {
      return <FavoriteIcon />;
    } else {
      return <FavoriteBorderIcon />;
    }
  };

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
        <TableCell align="center">{row.speaker}</TableCell>
        <TableCell align="right">{row.votes}</TableCell>
        <TableCell align="right">
          <IconButton
            key={row.id}
            onClick={() => {
              handleChange(row);
            }}
          >
            {selectedVote(row)}
          </IconButton>
        </TableCell>
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
                <TableCell align="center">Speaker</TableCell>
                <TableCell align="right">Votes</TableCell>
                <TableCell align="right">Vote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{sortAndMap(rows)}</TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
