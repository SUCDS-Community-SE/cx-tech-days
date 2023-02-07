import React, { useState } from "react";
import uuid from "react-uuid";
import TextField from "@mui/material/TextField";
import Button from "../components/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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

export default function InputForm() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [abstract, setAbstract] = useState("");
  const [speakerShortInfo, setSpeakerShortInfo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //adds new suggestion to the list
    addNewSuggestion(title, topic, type, speaker, abstract, speakerShortInfo);
    // clears the input fields
    setTitle("");
    setTopic("");
    setType("");
    setSpeaker("");
    setAbstract("");
    setSpeakerShortInfo("");
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: "white",
        mt: -20,
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 10,
          bgcolor: "white",
          padding: 3,
          margin: 3,
          boxShadow: 3,
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
          <Typography variant="h2" component="h2" gutterBottom>
            Anmeldung
          </Typography>
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
            value={abstract}
            sx={{ paddingBottom: 2 }}
            onChange={(e) => {
              setAbstract(e.target.value);
            }}
          />
          <TextField
            id="speakerShortInfo"
            label="Speaker Short Info"
            multiline
            maxRows={4}
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
    </Box>
  );
}
