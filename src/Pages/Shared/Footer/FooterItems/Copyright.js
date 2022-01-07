import { Box, Typography } from "@mui/material";
import React from "react";

const Copyright = () => {
  return (
    <Box
      style={{
        textAlign: "center",
        color: "white",
        borderTop: "2px solid gray",
        padding: "20px 0",
      }}
    >
      <Typography variant="h6">
        Ferrari S.p.A. Copyright © 2022 - All Rights Reserved Powered by YOOX
        NET-A-PORTER GROUP
      </Typography>
      <Typography>
        <span>Site map</span>
        <span style={{ marginLeft: "20px" }}>Cookie Policy</span>
        <span style={{ marginLeft: "20px" }}>Privacy Policy</span>
        <span style={{ marginLeft: "20px" }}> Vendor information</span>
      </Typography>
    </Box>
  );
};

export default Copyright;
