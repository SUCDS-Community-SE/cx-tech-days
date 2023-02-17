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
import Typography from "../components/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import API from "../../api";
import SuggestionObject from "../objects/suggestionObject";
import VoteObject from "../objects/voteObject";

async function getData() {
  const data = await API.getAPI().getSuggestions();
  return data;
}

async function getVote(userID) {
  const voteArray = await API.getAPI().getVoteByUser(userID);
  const vote = new VoteObject(voteArray[0].userID, voteArray[0].suggestionID);
  return vote;
}

function addVote(suggestion) {
  suggestion.votes++;
  const votes = suggestion.votes.toString();
  let suggestionObject = new SuggestionObject(
    suggestion.id,
    suggestion.title,
    suggestion.topic,
    suggestion.type,
    suggestion.speaker,
    suggestion.abstract,
    suggestion.speakerShortInfo,
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
    suggestion.title,
    suggestion.topic,
    suggestion.type,
    suggestion.speaker,
    suggestion.abstract,
    suggestion.speakerShortInfo,
    votes
  );
  API.getAPI().updateSuggestion(suggestionObject);
  return suggestionObject;
}

function updateVote(voteObject) {
  const vote = new VoteObject(voteObject.userID, voteObject.suggestionID);
  API.getAPI().updateVote(vote);
}

export default function VoteForm(props) {
  const { user } = props;
  const [rows, setRows] = useState([]);
  const [selectedButton, setSelectedButton] = useState();
  const [voteObject, setVoteObject] = useState({
    userID: "",
    suggestionID: "",
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData().then((data) => setRows(data));
      getVote(user.uid)
        .then((vote) =>
          setVoteObject({
            ...voteObject,
            userID: vote.getUserId(),
            suggestionID: vote.getSuggestionId(),
          })
        )
        .then(() => setSelectedButton(voteObject.suggestionID));
    }
    return () => (mounted = false);
  }, []);

  const handleChange = (suggestion) => {
    if (selectedButton === suggestion.id) {
      setSelectedButton(null);
      setVoteObject({
        ...voteObject,
        suggestionID: "",
      });

      removeVote(suggestion);
    } else {
      setSelectedButton(suggestion.id);
      setVoteObject({
        ...voteObject,
        suggestionID: suggestion.id,
      });

      addVote(suggestion);
    }
  };

  const selectedVote = (suggestionID) => {
    //console.log(selectedButton);
    //console.log(suggestionID);
    if (selectedButton === suggestionID) {
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
          {row.title}
        </TableCell>
        <TableCell align="left">{row.topic}</TableCell>
        <TableCell align="left">{row.type}</TableCell>
        <TableCell align="left">{row.speaker}</TableCell>
        <TableCell align="left">{row.votes}</TableCell>
        <TableCell align="center">
          <IconButton
            sx={{ color: "secondary.main" }}
            key={row.id}
            onClick={(e) => {
              e.preventDefault();
              handleChange(row);
            }}
          >
            {selectedVote(row.id)}
          </IconButton>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "primary",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" marked="center" component="h2" sx={{ mb: 2 }}>
        Voting
      </Typography>
      <Typography variant="h5" marked="center" component="h2">
        Jetzt abstimmen
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
                <TableCell align="left">
                  <Typography variant="h5" marked="center" component="h2">
                    Votes
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h5" marked="center" component="h2">
                    Vote
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{sortAndMap(rows)}</TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
