import { Box, Typography } from "@mui/material";
import React from "react";

function AppleWorkEducation(props) {
  return (
    <Box m="0 30px 30px">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "600px",
          backgroundImage: `url(${props.backUrl})`,
          backgroundSize: `${props.backWidth} ${props.backHeight}`,
          backgroundRepeat: "no-repeat",
          color: "primary.light",
        }}
      >
        <Typography fontSize="48px" fontWeight="500">
          {props.headline}
        </Typography>
        <Typography fontSize="21px" mt="20px" fontWeight="300">
          {props.intro}
        </Typography>
        <Typography fontSize="21px" mt="0.6em" fontWeight="300">
          {props.learn}
        </Typography>
        <Typography fontSize="21px" mt="0.2em" fontWeight="300">
          {props.whyMac}
        </Typography>
      </Box>
    </Box>
  );
}

export default AppleWorkEducation;
