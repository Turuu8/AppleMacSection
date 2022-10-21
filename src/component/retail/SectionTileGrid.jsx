import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "./styles";
export const SectionTileGrid = ({
  url,
  width,
  height,
  marginBottom,
  eyeBrow,
  headline,
  productPromoIntro,
  shop,
  display,
  find,
  color,
  learnMore,
}) => {
  return (
    <>
      <Box style={styles.SectionTile} sx={{ backgroundColor: `${color}` }}>
        <div>
          <img
            src={url}
            style={{
              width: `${width}`,
              height: `${height}`,
              marginBottom: `${marginBottom}`,
            }}
            alt="ok"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "60px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            mb="8px"
            sx={{ fontSize: "24px", fontWeight: "600" }}
          >
            {eyeBrow}
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: "48px", fontWeight: "600", width: "500px" }}
          >
            {headline}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: "300",
              height: "36px",
              width: "71px",
              color: "primary.light",
              justifyContent: "center",
              display: `${display}`,
              alignItems: "center",
              backgroundColor: "#0071e3",
              borderRadius: "980px",
              marginTop: "13px",
            }}
          >
            {shop}
          </Typography>
          <Typography
            mt="20px"
            variant="h3"
            sx={{ fontSize: "17px", fontWeight: "300", width: "430px" }}
          >
            {productPromoIntro}
          </Typography>
          <Typography
            mt="14px"
            sx={{ fontSize: "17px", fontWeight: "300", color: "#06c" }}
          >
            {find}
          </Typography>
          <Typography
            mt="-24px"
            sx={{
              fontSize: "17px",
              fontWeight: "300",
              color: "#06c",
            }}
          >
            {learnMore}
          </Typography>
        </div>
      </Box>
    </>
  );
};
