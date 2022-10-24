import { Box } from "@mui/material";
import { BuiltApps, ProApps } from "../../utils/apps";
import { SectionBuiltApps } from "./SectionBuiltApps";

export const Apps = () => {
  return (
    <Box m="0 30px" maxWidth="1440px">
      {BuiltApps.map((el, index) => (
        <SectionBuiltApps key={index} {...el} />
      ))}
      {ProApps.map((el, index) => (
        <SectionBuiltApps key={index} {...el} />
      ))}
    </Box>
  );
};
