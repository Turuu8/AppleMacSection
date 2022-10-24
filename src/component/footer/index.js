import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FooterLinkItems, FooterText, Last } from "../../utils/footer";
import { FooterLinks } from "./FooterLinks";
import { FooterNote } from "./FooterNote";
import { styles } from "./styles";

export const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Box width="980px" m="0 22px">
        <Box p="17px 0 11px " borderBottom="1px solid #d2d2d7">
          {FooterText.map((el, i) => (
            <FooterNote key={i} {...el} />
          ))}
        </Box>
        <Box p="17px 0" display="flex">
          <Box width="px" sx={{ opacity: "0.7" }}>
            
          </Box>
          <Typography
            fontSize="12px"
            fontWeight="400"
            ml="40px"
            sx={{ color: "#424245" }}
          >
            Mac
          </Typography>
        </Box>
        <Box display="flex">
          {FooterLinkItems.map((el, i) => (
            <FooterLinks key={i} {...el} />
          ))}
        </Box>
        <Box width="100%" p="34px 0 21px">
          <Typography
            pb="8px"
            mb="7px"
            borderBottom="1px solid #d2d2d7"
            fontSize="12px"
            sx={{
              color: "#6e6e73",
            }}
          >
            More ways to shop: Find an Apple Store or other retailer near you.
            Or call 1-800-MY-APPLE.
          </Typography>
          <Box display="flex" position="relative">
            <Typography
              m="5px 30px 0 0"
              fontSize="12px"
              sx={{
                color: "#6e6e73",
              }}
            >
              Copyright © 2022 Apple Inc. All rights reserved.{" "}
            </Typography>
            {Last.map((el, i) => (
              <Typography
                m="5px 7px 0 0"
                p="0 10px 0 0"
                fontSize="12px"
                borderRight="1px solid #d2d2d7"
                sx={{
                  color: "#6e6e73",
                }}
              >
                {el.text}
              </Typography>
            ))}
            <Typography
              m="5px 7px 0 0"
              p="0 10px 0 0"
              fontSize="12px"
              sx={{
                color: "#6e6e73",
              }}
            >
              Site Map
            </Typography>
            <Typography
              position="absolute"
              right="0"
              m="5px 7px 0 0"
              fontSize="12px"
              sx={{
                color: "#6e6e73",
              }}
            >
              United States
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
