import { Box, List, ListItemText, Typography } from "@mui/material";
import { styles } from "./styles";
import {
  chapternavProduct,
  globalnavItmes,
  ribbonContentWrapper,
  globalnavItmeResponsive,
} from "../../utils/header";
import { keyframes } from "@emotion/react";
const chapternavAnimation = keyframes`
  from {
    transform: translateX(200px);
  }
  to {
    transform: translateX(0);
  }
`;

const ribbonContentWrapperAnimation = keyframes`
  from {
    z-index: -100;
    background-color: #0071e3;
    color: white;
    transform: translateY(-50px);
  } 
  to {
    transform: translateY(0);
  }
`;
export const Navbar = () => {
  return (
    <Box width="100%" sx={{ padding: 0 }}>
      <Box sx={styles.globalnav}>
        <List sx={styles.globalnavItmes}>
          {globalnavItmes.map(({ url }, index) => (
            <Box
              key={index}
              boxSizing="border-box"
              padding="0 8px "
              component="img"
              display={{
                xs: "none",
                md: "block",
              }}
              sx={{
                cursor: "pointer",
                opacity: "0.8",
                transition: "0.3s",
                ":hover": {
                  opacity: "1",
                },
              }}
              src={url}
            />
          ))}
          <Box
            item
            gap={0.8}
            display={{
              xs: "flex",
              md: "none",
            }}
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            height="48px"
            width="48px"
          >
            <Box sx={{ background: "#fff", width: "15px", height: "0.4px" }} />
            <Box sx={{ background: "#fff", width: "15px", height: "0.3px" }} />
          </Box>
          {globalnavItmeResponsive.map(({ url }, index) => (
            <Box
              key={index}
              boxSizing="border-box"
              padding="0 16px "
              component="img"
              display={{
                xs: "block",
                md: "none",
              }}
              sx={{
                cursor: "pointer",
                opacity: "0.8",
                transition: "0.3s",
                ":hover": {
                  opacity: "1",
                },
              }}
              src={url}
            />
          ))}
        </List>
      </Box>
      <Box
        style={styles.chapternav}
        sx={{ animation: `${chapternavAnimation} 0.5s ease` }}
      >
        {chapternavProduct.map(({ url, productName, periodProduct }, index) => (
          <Box
            height="100%"
            key={index}
            m="0 18px"
            boxSizing="content-box"
            sx={styles.chapternavItems}
          >
            <Box
              boxSizing="border-box"
              component="img"
              height="54px"
              objectFit="fill"
              src={url}
            />
            <Box width="100%">
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "12px",
                  fontWeight: "300",
                }}
                sx={{ marginTop: "3px", textAlign: "center", height: "0" }}
                primary={productName}
              />
            </Box>
            <ListItemText
              primaryTypographyProps={{ fontSize: "10px" }}
              sx={{
                color: "secondary.main",
                textAlign: "center",
              }}
              primary={periodProduct}
            />
          </Box>
        ))}
      </Box>
      <Box
        style={styles.ribbonContentWrapper}
        sx={{
          animation: `${ribbonContentWrapperAnimation} 1.5s ease-out`,
          backgroundColor: "primary.light",
          padding: "9px 0",
        }}
      >
        <Box
          width={{
            xs: "275px",
            sm: "692px",
            md: "980px",
          }}
        >
          {ribbonContentWrapper.map(({ caption, learnMore }, i) => (
            <div key={i}>
              <Typography fontSize="11.8px" fontWeight="400" textAlign="center">
                {caption}
                <Typography
                  variant="p"
                  sx={{ color: "#06c" }}
                  fontSize="12px"
                  textAlign="center"
                >
                  {learnMore}
                </Typography>
              </Typography>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
