import React, { useState } from "react";
import uuid from "react-uuid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import API from "../../api";

function addNewSuggestion(topic, type, speaker) {
  const suggestion = {
    id: uuid(),
    topic: topic,
    type: type,
    speaker: speaker,
    time: "00:00",
    votes: 0,
  };
  console.log(suggestion);
  API.getAPI().addSuggestion(suggestion);
}

export default function InputForm() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");
  const [speaker, setSpeaker] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(topic, type, speaker);
    //adds new suggestion to the list
    addNewSuggestion(topic, type, speaker);
    // clears the input fields
    setTopic("");
    setType("");
    setSpeaker("");
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: "primary",
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
          width: "43%",
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
            label="Topic"
            name="topic"
            value={topic}
            sx={{
              paddingBottom: 2,
              width: "43%",
            }}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
          <FormControl sx={{ paddingBottom: 2 }}>
            <InputLabel id="Type">Type</InputLabel>
            <Select
              labelId="Type-label"
              id="Type-select-helper"
              value={type}
              label="Type"
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <MenuItem value={"45min Session"}>45min Session</MenuItem>
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
