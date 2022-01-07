import { Grid } from "@mui/material";
import React from "react";

const InfoArea = () => {
  return (
    <Grid container spacing={2} style={{ color: "white" }}>
      <Grid item xs={6} md={3}>
        <h4>AUTO</h4>
        <ul style={{ lineHeight: "35px" }}>
          <li>Ferrari Line Up</li>
          <li>Ferrari Car Configurator</li>
          <li>Personalization</li>
          <li>Officine Classiche</li>
        </ul>
      </Grid>
      <Grid item xs={6} md={3}>
        <h4>SCUDERIA FERRARI</h4>
        <ul style={{ lineHeight: "35px" }}>
          <li>SF21 Reveal</li>
          <li>Charles Leclerc</li>
          <li>Media Galleries</li>
          <li>Scuderia Ferrari History</li>
        </ul>
      </Grid>
      <Grid item xs={6} md={3}>
        <h4>UNIVERSE</h4>
        <ul style={{ lineHeight: "35px" }}>
          <li>News</li>
          <li>The Official Ferrari Magazine</li>
          <li>Ferrari Museums</li>
          <li>Ristorante Cavallino</li>
        </ul>
      </Grid>
      <Grid item xs={6} md={3}>
        <h4>RACES</h4>
        <ul style={{ lineHeight: "35px" }}>
          <li>Competizioni GT</li>
          <li>Corse Clienti</li>
          <li>Ferrari Challenge</li>
          <li>Club Competizioni GT</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default InfoArea;
