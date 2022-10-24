import { Box, Typography } from "@mui/material";
import React from "react";

export const FooterLinks = (props) => {
  return (
    <Box width="176px" m="0 20px 0.8em 0">
      <Box>
        <Typography
          fontSize="12px"
          mb="0.8em"
          fontWeight="500"
          sx={{ color: "#1d1d1f" }}
        >
          {props.title}
        </Typography>
        {props.items?.map((el, i) => (
          <Typography
            fontSize="12px"
            fontWeight="300"
            mb="0.8em"
            sx={{ color: "#424245" }}
            key={i}
          >
            {el.text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
