import { Box, Typography } from "@mui/material";

export const SectionBuiltApps = ({
  headline,
  backgroundColor,
  intro,
  tabnavItems,
  itmesIntro,
  learnMore,
  galleryComouter,
  builtAppsGallery,
  footerUrl,
  footerIntro,
  footerlearnMore,
  computerWidth,
  computerHeight,
  galleryWidth,
  galleryHeight,
  tabnavItemsWidth,
  tabnavItemsHeight,
  display,
}) => {
  return (
    <Box
      m="30px 30px 0 30px"
      sx={{
        backgroundColor: `${backgroundColor}`,
      }}
      display="flex"
      justifyContent="center"
    >
      <Box textAlign="center" maxWidth="58.333%" pt="75px">
        <Typography variant="h2" fontSize="48px" fontWeight="500">
          {headline}
        </Typography>
        <Typography mt="0.8em" p="0 5px" fontSize="17px" fontWeight="300">
          {intro}
        </Typography>
        <Box
          display="flex"
          p="32px 0px 5px 0px"
          borderBottom="1px solid #d2d2d7"
          sx={{
            justifyContent: "space-between",
            margin: display === "space-around" ? "0 80px" : "0 10px",
          }}
        >
          {tabnavItems?.map(({ url, items }, index) => (
            <Box key={index} p="9px 0 11px 0px">
              <img
                src={url}
                alt="ok"
                // width="48px"
                // height="59px"
                style={{
                  marginBottom: "5px",
                  width: `${tabnavItemsWidth}`,
                  height: `${tabnavItemsHeight}`,
                }}
              />
              <Typography
                fontSize="17px"
                fontWeight="300"
                sx={{ color: "#6e6e73", lineHeight: "1" }}
              >
                {items}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          fontSize="17px"
          fontWeight="300"
          p="34px 50px 0"
          sx={{
            padding: display === "space-around" ? "34px 60px 0" : "34px 50px 0",
          }}
        >
          {itmesIntro}
        </Typography>
        <Typography
          pt="14px"
          fontSize="17px"
          fontWeight="300"
          sx={{ color: "#06c" }}
        >
          {learnMore}
        </Typography>
        <Box position="relative" m="52px 0 66px 0">
          <div>
            <img
              src={galleryComouter}
              style={{ width: `${computerWidth}`, height: `${computerHeight}` }}
              alt="ok"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "16px",
              margin: "auto",
              left: "0",
              right: "0",
            }}
          >
            <img
              src={builtAppsGallery}
              style={{ width: `${galleryWidth}`, height: `${galleryHeight}` }}
              alt="ok"
            />
          </div>
        </Box>
        <Box
          p="61px 0 90px 0"
          sx={{
            display: footerUrl === "" ? "none" : "flex",
            alignItems: "center",
            borderTop: "1px solid #d2d2d7",
          }}
        >
          <div style={{ marginLeft: "18px" }}>
            <img src={footerUrl} alt="ok" width="71px" height="71px" />
          </div>
          <Box p="0 18px">
            <Typography>{footerIntro}</Typography>
            <Typography sx={{ color: "#06c" }} textAlign="start">
              {footerlearnMore}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
