import { Box, List, ListItemText, Typography } from "@mui/material";
import { styles } from "./styles";
import { styled } from "@mui/material/styles";
import {
  chapternavProduct,
  globalnavItmes,
  ribbonContentWrapper,
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

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const Navbar = () => {
  return (
    <Root>
      <Box sx={{ padding: 0 }}>
        <Box sx={styles.globalnav}>
          <List sx={styles.globalnavItmes}>
            {/* <Box
            component="img"
            color="warning"
            // src={apple}
            sx={{ padding: " 0 8px", marginTop: "-3px" }}
          />
            {globalnavItmes.map(({ title }, index) => (
            <div key={index} style={{ padding: "0 8px" }}>
              <ListItemText
                primaryTypographyProps={{ fontSize: "12px" }}
                primary={title}
              />
            </div>
          ))}
            <Box
            marginTop="44px"
            component="img"
            color="warning"
            src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg"
            sx={{ padding: " 0 8px" }}
          />
          <Box
            component="img"
            color="warning"
            src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"
            sx={{ padding: " 0 8px" }}
          /> */}
            {globalnavItmes.map(({ url }, index) => (
              <Box
                key={index}
                boxSizing="border-box"
                padding="0 8px "
                component="img"
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
          style={styles.ribbonContentWrapper}
          m="116px 0 0 0"
          zIndex="-1"
          sx={{
            animation: `${ribbonContentWrapperAnimation} 1.5s ease-out`,
            backgroundColor: "primary.light",
          }}
        >
          <Box width="980px" height="32px">
            {ribbonContentWrapper.map(({ caption, learnMore }, i) => (
              <div key={i}>
                <Typography
                  fontSize="11.8px"
                  fontWeight="400"
                  textAlign="center"
                >
                  {caption}
                </Typography>
                <Typography
                  sx={{ color: "#06c" }}
                  fontSize="11.5px"
                  textAlign="center"
                >
                  {learnMore}
                </Typography>
              </div>
            ))}
          </Box>
        </Box>
        <Box
          m="-166px 0 50px 0"
          style={styles.chapternav}
          sx={{ animation: `${chapternavAnimation} 0.5s ease` }}
        >
          {chapternavProduct.map(
            ({ url, productName, periodProduct }, index) => (
              <Box
                height="100%"
                key={index}
                p="0 18px"
                sx={styles.chapternavItems}
              >
                <Box
                  boxSizing="border-box"
                  component="img"
                  maxHeight="54px"
                  src={url}
                />
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "12px",
                    fontWeight: "300",
                  }}
                  sx={{ marginTop: "3px", textAlign: "center", height: "0" }}
                  primary={productName}
                />
                <ListItemText
                  primaryTypographyProps={{ fontSize: "10px" }}
                  sx={{
                    color: "secondary.main",
                    textAlign: "center",
                  }}
                  primary={periodProduct}
                />
              </Box>
            )
          )}
        </Box>
      </Box>
    </Root>
  );
};
