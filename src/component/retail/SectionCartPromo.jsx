import { Box, Typography } from "@mui/material";

export const SectionCartPromo = ({
  url,
  eyeBrow,
  headline,
  width,
  height,
  productPromoIntro,
  learnMore,
  display,
  padding,
  margin,
}) => {
  return (
    <>
      <Box
        width="49.5%"
        height="100%"
        display="flex"
        alignItems="center"
        zIndex="10"
        sx={{ marginLeft: `${margin}` }}
      >
        <Box
          width="510px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              // height: "104px",
            }}
          >
            {eyeBrow}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "48px",
              fontWeight: "600",
              lineHeight: 1.08349,
              padding: `${padding}`,
            }}
          >
            {headline}
          </Typography>
          <Typography
            sx={{
              display: `${display}`,
              fontSize: "17px",
              fontWeight: "300",
              lineHeight: 1.08349,
              //   height: "75px",
              width: "333px",
              marginTop: "20px",
            }}
          >
            {productPromoIntro}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: "300",
              color: "#06c",
              lineHeight: 1.08349,
              marginTop: "14px",
            }}
          >
            {learnMore}
          </Typography>
        </Box>
      </Box>
      <Box width="49.5%" height="100%" sx={{ overflow: "hidden" }}>
        <div>
          <img
            src={url}
            style={{
              objectFit: "cover",
              width: `${width}`,
              height: `${height}`,
              marginLeft: "unset",
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
            alt="ok"
          />
        </div>
      </Box>
    </>
  );
};
