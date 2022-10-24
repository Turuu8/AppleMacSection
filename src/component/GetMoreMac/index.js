import { Typography, Box } from "@mui/material";
import React from "react";
import {
  AppleWorkEducationItems,
  GetmoreoutofMac,
  GetmoreoutofMacApps,
  GiftCardItems,
} from "../../utils/GetMoreMac";
import { SectionCartPromo } from "../retail/SectionCartPromo";
import AppleWorkEducation from "./AppleWorkEducation";
import SectionPromoApps from "./SectionPromoApps";
import SectionPromoAppsDetail from "./SectionPromoAppsDetail";
import { styles } from "./styles";

export const SectionGetMoreMac = () => {
  return (
    <Box
      width="100%"
      maxWidth="1440px"
      style={{
        paddingTop: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box width="980px" m="auto" textAlign="center">
        <Typography variant="h2" fontWeight="600" height="68px">
          Get more out of Mac
        </Typography>
      </Box>
      <Box mt="80px"></Box>
      {GetmoreoutofMac.map((el, i) => (
        <SectionPromoApps key={i} {...el} />
      ))}
      <Box sx={styles.sectionDetail}>
        {GetmoreoutofMacApps.map((el, i) => (
          <SectionPromoAppsDetail key={i} {...el} />
        ))}
      </Box>
      <Box component="div" width="100%">
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
          {GiftCardItems.map((el, index) => (
            <SectionCartPromo key={index} {...el} />
          ))}
        </Box>
      </Box>
      <Box>
        {AppleWorkEducationItems.map((el, i) => (
          <AppleWorkEducation key={i} {...el} />
        ))}
      </Box>
    </Box>
  );
};
