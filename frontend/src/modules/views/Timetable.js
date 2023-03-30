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

const secondrow = secondrows[0];

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
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ textDecoration: "underline" }}
            display="inline"
          >
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
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ textDecoration: "underline" }}
            display="inline"
          >
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
                </Typography>
                <Typography fontWeight="bold">
                  {secondrow.speaker} {secondrow.type}
                </Typography>
                <Typography sx={{ color: "primary.light" }}></Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent variant="h5">
                {"16:25"}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
    </Container>
  );
}
