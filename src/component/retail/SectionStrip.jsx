import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const SectionStrip = ({ url, headline, intro, learMore }) => {
  return (
    <Box textAlign="center" p="0 70px">
      <Box width="100%" height="44px" mb="12px">
        <img
          style={{
            width: "50px",
            backgroundImage: `url${url}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 44px",
            backgroundPosition: "center",
          }}
          src={url}
          alt="ok"
        />
      </Box>
      <Typography sx={{ fontSize: "21px", fontWeight: "600" }}>
        {headline}
      </Typography>
      <Typography sx={{ fontSize: "21px", fontWeight: "300" }}>
        {intro}
      </Typography>
      <Typography
        mt="5px"
        sx={{ fontSize: "21px", fontWeight: "300", color: "#06c" }}
      >
        {learMore}
      </Typography>
    </Box>
  );
};
