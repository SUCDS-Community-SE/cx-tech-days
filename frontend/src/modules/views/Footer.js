import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import { Divider } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Copyright() {
  return (
    <React.Fragment>
      <Box sx={{ ml: 5, mb: 0, mt: 2 }}>
        <Link color="inherit" href="https://www.mhp.com/de/">
          <Typography
            component={"p"}
            variant={"caption"}
            color={"textSecondary"}
          >
            © 2023 MHP Management- und IT-Beratung GmbH{" "}
            {new Date().getFullYear()}
          </Typography>
        </Link>{" "}
      </Box>
    </React.Fragment>
  );
}
const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0,
};
//

export default function Footer() {
  return (
    <Box bgcolor={"background.paper"} width={"100%"} boxShadow={2}>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: 2,
          mt: 2,
        }}
      >
        <Grid>
          <Box sx={{ mr: 15 }}>
            <Typography variant={"h6"} color={"textSecondary"}>
              Service
            </Typography>
            <List>
              <ListItem>
                <Link href="/contact" underline="hover">
                  Kontakt
                </Link>
              </ListItem>
              {/* <ListItem>
                <Link href="/impress" underline="hover">
                  Impressum
                </Link>
              </ListItem> */}
            </List>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Typography variant={"h6"} color={"textSecondary"}>
              Social
            </Typography>
            <List style={flexContainer}>
              <ListItem>
                <Link href={"https://www.facebook.com/MHP.A.Porsche.Company"}>
                  <FacebookOutlinedIcon fontSize="large" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  brand={"Instagram"}
                  href={"https://www.instagram.com/mhp_com/"}
                >
                  <InstagramIcon fontSize="large" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  brand={"LinkedIn"}
                  href={
                    "https://www.linkedin.com/company/mhp-a-porsche-company/"
                  }
                >
                  <LinkedInIcon fontSize="large" />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  brand={"Youtube"}
                  href={"https://www.youtube.com/user/MHPProzesslieferant"}
                >
                  <YouTubeIcon fontSize="large" />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Container>
      <Copyright />
    </Box>
  );
}
