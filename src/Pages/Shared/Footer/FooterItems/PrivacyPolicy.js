import { Grid } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Grid
      container
      style={{
        color: "white",
        backgroundColor: "#303030",
        borderRadius: "5px",
      }}
    >
      <Grid item xs={12} md={6}>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>Legal</li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>
            Privacy Policy
          </li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>
            Cookie Policy
          </li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>
            Submit your privacy request
          </li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>Contacts</li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>
            Media Centre
          </li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>Career</li>
          <li style={{ fontSize: "12px" }}>Corporate</li>
        </ul>
      </Grid>
      <Grid item xs={12} md={6}>
        <h3 style={{ marginRight: "20px", float: "right" }}>INTERNATIONAL</h3>
      </Grid>
    </Grid>
  );
};

export default PrivacyPolicy;
