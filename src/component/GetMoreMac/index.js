import { Typography, Box } from "@mui/material";
import React from "react";
import { GetmoreoutofMac, GetmoreoutofMacApps } from "../../utils/GetMoreMac";
import SectionPromoApps from "./SectionPromoApps";
import SectionPromoAppsDetail from "./SectionPromoAppsDetail";
import { styles } from "./styles";

const SectionGetMoreMac = () => {
  return (
    <Box style={{ paddingTop: "150px", textAlign: "center" }}>
      <Box width="980px" m="auto">
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
    </Box>
  );
};

export default SectionGetMoreMac;
