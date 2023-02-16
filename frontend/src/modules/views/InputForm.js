import React, { useState } from "react";
import uuid from "react-uuid";
import TextField from "@mui/material/TextField";
import Button from "../components/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SuccessMessage from "../components/SuccessMessage";
import API from "../../api";

function addNewSuggestion(
  title,
  topic,
  type,
  speaker,
  abstract,
  speakerShortInfo
) {
  const suggestion = {
    id: uuid(),
    title: title,
    topic: topic,
    type: type,
    speaker: speaker,
    abstract: abstract,
    speakerShortInfo: speakerShortInfo,
    votes: 0,
  };
  console.log(suggestion);
  API.getAPI().addSuggestion(suggestion);
}

export default function InputForm(props) {
  const { handleError } = props;

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [abstract, setAbstract] = useState("");
  const [speakerShortInfo, setSpeakerShortInfo] = useState("");

  const handle_Error = (errorMessage) => {
    handleError(errorMessage);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //checks if any of the input fields is empty
    if (
      title === "" ||
      topic === "" ||
      type === "" ||
      speaker === "" ||
      abstract === "" ||
      speakerShortInfo === ""
    ) {
      handle_Error("Bitte alle Felder ausfüllen");
    } else {
      //adds new suggestion to the list
      addNewSuggestion(title, topic, type, speaker, abstract, speakerShortInfo);
      // clears the input fields
      setOpen(true);
      setTitle("");
      setTopic("");
      setType("");
      setSpeaker("");
      setAbstract("");
      setSpeakerShortInfo("");
    }
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "white",
        mt: 10,
        mb: 15,
      }}
    >
      <Typography variant="h3" marked="center" component="h2" sx={{ mb: 3 }}>
        Thema einreichen
      </Typography>
      <Container
        sx={{
          bgcolor: "white",
          paddingTop: 4,
          paddingBottom: 4,
          margin: 3,
          boxShadow: 2,
          borderRadius: "12px",
          width: "70%",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            autoComplete="off"
            label="Titel"
            name="title"
            value={title}
            sx={{
              paddingBottom: 2,
            }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            autoComplete="off"
            label="Thema"
            name="topic"
            value={topic}
            sx={{
              paddingBottom: 2,
            }}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
          <FormControl sx={{ paddingBottom: 2 }}>
            <InputLabel id="Type">Format</InputLabel>
            <Select
              labelId="Type-label"
              id="Type-select-helper"
              value={type}
              label="Type"
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <MenuItem value={"Session"}>Session</MenuItem>
              <MenuItem value={"Pecha Kucha"}>Pecha Kucha</MenuItem>
              <MenuItem value={"Workshop"}>Workshop</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoComplete="off"
            label="Speaker"
            name="speaker"
            value={speaker}
            sx={{ paddingBottom: 2 }}
            onChange={(e) => {
              setSpeaker(e.target.value);
            }}
          />
          <TextField
            autoComplete="off"
            label="Abstract"
            name="abstract"
            multiline
            rows={4}
            value={abstract}
            sx={{ paddingBottom: 2 }}
            onChange={(e) => {
              setAbstract(e.target.value);
            }}
          />
          <TextField
            autoComplete="off"
            label="Speaker Short Info"
            name="speakerShortInfo"
            multiline
            rows={4}
            value={speakerShortInfo}
            sx={{ paddingBottom: 2 }}
            onChange={(e) => {
              setSpeakerShortInfo(e.target.value);
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ width: 100 }}
          >
            Submit
          </Button>
        </Box>
      </Container>
      <SuccessMessage open={open} handleClose={handleClose} />
    </Box>
  );
}
