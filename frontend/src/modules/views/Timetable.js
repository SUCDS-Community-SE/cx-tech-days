import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Box from "@mui/material/Box";
import Typography from "../components/Typography";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Container } from "@mui/material";
import { rows, secondrows } from "../objects/TimeTableData";

export default function Timetable() {
  return (
    <Container
    // sx={{
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   mt: 5,
    //   mb: 10,
    // }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          mb: 5,
        }}
      >
        <Typography variant="h3" marked="center" sx={{ mb: 2 }}>
          Timetable
        </Typography>
        <Typography variant="h5">Mittwoch 26.04.2023</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          bgcolor: "white",
          position: "relative",
          alignItems: "flex-start",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Main Stage
          </Typography>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
              mr: 0,
            }}
          >
            {rows.map((row) => (
              <TimelineItem key={row.id}>
                <TimelineOppositeContent variant="h5">
                  {row.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5" component="span">
                    {row.title}
                    {/* {row.topic}
                  {row.type} */}
                  </Typography>
                  <Typography fontWeight="bold">
                    {row.speaker}
                    {/* {row.speakerShortInfo} */}
                  </Typography>
                  <Typography sx={{ color: "primary.light" }}>
                    {/* {row.abstract} */}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Break Out Room #1
          </Typography>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
              ml: 0,
              mt: 30,
            }}
          >
            {secondrows.map((secondrow) => (
              <TimelineItem key={secondrow.id}>
                <TimelineOppositeContent variant="h5">
                  {secondrow.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5" component="span">
                    {secondrow.title}
                    {/* {"("}
                  {secondrow.topic}
                  {", "}
                  {secondrow.type}
                  {")"} */}
                  </Typography>
                  <Typography fontWeight="bold">
                    {secondrow.speaker}
                    {/* {"("}
                  {secondrow.speakerShortInfo}
                  {")"} */}
                  </Typography>
                  <Typography sx={{ color: "primary.light" }}>
                    {/* {secondrow.abstract} */}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>
    </Container>
  );
}
