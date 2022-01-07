import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Copyright from "./FooterItems/Copyright";
import InfoArea from "./FooterItems/InfoArea";
import PrivacyPolicy from "./FooterItems/PrivacyPolicy";

const Footer = () => {
  return (
    <footer>
      <Box style={{ background: "#AD0C0C" }}>
        <Container style={{}}>
          <InfoArea />
          <PrivacyPolicy />
          <Copyright />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
