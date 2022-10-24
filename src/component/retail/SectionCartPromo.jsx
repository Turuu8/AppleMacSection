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
  displayL,
  headUrl,
  headUrlWidth,
  headUrlHeight,
  intro,
  buy,
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
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          sx={{
            width: displayL === "none" ? "300px" : "510px",
            padding: displayL === "none" ? "60px  0 0 80px" : "0",
          }}
        >
          {displayL === "none" ? (
            <>
              <div>
                <img
                  src={headUrl}
                  width={headUrlWidth}
                  height={headUrlHeight}
                  alt="ok"
                />
              </div>
              <Typography fontSize="21px" fontWeight="300" pt="18px">
                {intro}
              </Typography>
              <Box display="flex" gap="35px" mt="18px">
                <Typography
                  sx={{
                    fontSize: displayL === "none" ? "21px" : "17px",
                    fontWeight: "300",
                    color: "#06c",
                    lineHeight: 1.08349,
                  }}
                >
                  {learnMore}
                </Typography>
                <Typography
                  sx={{
                    fontSize: displayL === "none" ? "21px" : "17px",
                    fontWeight: "300",
                    color: "#06c",
                    lineHeight: 1.08349,
                  }}
                >
                  {buy}
                </Typography>
              </Box>
            </>
          ) : null}
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              display: `${displayL}`,
            }}
          >
            {eyeBrow}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              display: `${displayL}`,
              fontSize: "48px",
              fontWeight: "600",
              lineHeight: 1.08349,
              padding: `${padding}`,
            }}
          >
            {headline}
          </Typography>
          {displayL === "flex" ? (
            <Typography
              sx={{
                display: `${display}`,
                fontSize: "17px",
                fontWeight: "300",
                lineHeight: 1.08349,
                width: "333px",
                marginTop: "20px",
              }}
            >
              {productPromoIntro}
            </Typography>
          ) : null}
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
              marginBottom: displayL === "none" ? "78px" : "0",
            }}
            alt="ok"
          />
        </div>
      </Box>
    </>
  );
};
