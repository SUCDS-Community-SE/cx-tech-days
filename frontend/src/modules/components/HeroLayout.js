import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import ExpandMore from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

function HeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <HeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
        }}
      >
        <Typography color="inherit" align="center" variant="h1" marked="center">
          2023 MHP CX Tech Days
        </Typography>
      </Container>
      <Container
        sx={{
          mt: 3,
          mb: 15,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <IconButton
          alt="arrow down"
          onClick={() => {
            window.scrollTo({ top: 1045, behavior: "smooth" });
          }}
          sx={{
            mt: 2,
            position: "absolute",
            bottom: 32,
            left: "50%",
            borderRadius: "50px",
            boxShadow: 2,
          }}
        >
          <ExpandMore color="secondary" fontSize="large" />
        </IconButton>
      </Container>
    </HeroLayoutRoot>
  );
}

HeroLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default HeroLayout;
