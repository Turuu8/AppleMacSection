import { Box, Typography } from "@mui/material";
import { VentureSection, WhatMakesMacItmes } from "../../utils/WhatMakesMac";
import { SectionCartPromo } from "../retail/SectionCartPromo";
import { SectionTileGrid } from "../retail/SectionTileGrid";
import { styles } from "../retail/styles";

export const SectionWhatMakesMac = () => {
  return (
    <>
      <Box pt="150px" textAlign="center">
        <Typography variant="h2" sx={{ fontSize: "64px", fontWeight: "500" }}>
          What makes a Mac a Mac?
        </Typography>
        <Box mt="80px"></Box>
      </Box>
      <Box width="100%" maxWidth="1440px">
        <Box sx={styles.tileGrid}>
          {WhatMakesMacItmes.map((el, i) => (
            <SectionTileGrid key={i} {...el} />
          ))}
        </Box>
      </Box>

      <Box component="div" width="100%" maxWidth="1440px">
        <Box
          height="509px"
          margin="30px 2.08333%"
          sx={{
            backgroundColor: "#fbfbfb",
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {VentureSection.map((el, index) => (
            <SectionCartPromo key={index} {...el} />
          ))}
        </Box>
      </Box>
    </>
  );
};
