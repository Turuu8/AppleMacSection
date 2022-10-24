import { Typography, Box } from "@mui/material";
import React from "react";

export const FooterNote = (props) => {
  return (
    <Box sx={{ color: "#6e6e73", fontSize: "12px" }}>
      <Box display="flex" pb="0.8em">
        <Typography textAlign="end" fontSize="12px">
          {props.num}
        </Typography>
        &nbsp;
        <Typography fontSize="12px">{props.footnote}</Typography>
      </Box>
    </Box>
  );
};
