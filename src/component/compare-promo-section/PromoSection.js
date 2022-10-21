import { Box, ListItemText, Typography } from "@mui/material";
import { promoCompareTableProduct } from "../../utils/newProductPromo";
import { PromoProductSection } from "../home-new-product";
import { styles } from "./styles";

export const PromoSection = () => {
  return (
    <Box sx={styles.promoSection}>
      <Box sx={styles.sectionContent}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "48px",
            fontWeight: "500",
            textAlign: "center",
            lineHeight: 1.08349,
          }}
        >
          Which Mac is right for you?
        </Typography>
        <Box sx={styles.tabnav}>
          <Box
            sx={{
              borderBottom: "1px solid #d2d2d7",
              display: "flex",
              height: "43px",
            }}
          >
            <ListItemText
              primaryTypographyProps={{ fontSize: "17px", fontWeight: "300" }}
              primary="Notebook"
              sx={{
                textAlign: "center",
                height: "39px",
                borderBottom: "1px solid #000",
              }}
            />
            <ListItemText
              primaryTypographyProps={{ fontSize: "17px", fontWeight: "300" }}
              primary="Desktop"
              sx={{
                textAlign: "center",
                padding: "0 0 0 60px",
                opacity: "0.5",
              }}
            />
          </Box>
          <Box sx={styles.compareTable}>
            {promoCompareTableProduct.map((el, index) => (
              <PromoProductSection key={index} {...el} />
            ))}
          </Box>
          <Box width="100%">
            <Box display="flex" p="42px 0 113px" gap="36px">
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "21px",
                  fontWeight: "300",
                  textAlign: "end",
                }}
                primary="Compare all Mac models >"
                sx={{
                  color: "#06c",
                  width: "240px ",
                }}
              />
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "21px",
                  fontWeight: "300",
                  textAlign: "start",
                }}
                primary="Shop Mac >"
                sx={{
                  width: "110px",
                  color: "#06c",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
