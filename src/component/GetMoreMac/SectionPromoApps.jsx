import { Box, Typography } from "@mui/material";

const SectionPromoApps = (props) => {
  return (
    <Box height="629px">
      <Box
        m="0 30px 30px"
        display="flex"
        gap="10px"
        justifyContent="center"
        sx={{ backgroundColor: "#fbfbfd" }}
      >
        <Box pl="3%" maxWidth="58.33%">
          <img
            src={props.appsPng}
            width={props.width}
            height={props.height}
            alt="img"
            style={{
              margin: "145px 0 125px",
            }}
          />
        </Box>
        <Box
          width="575px"
          display="flex"
          flexDirection="column"
          sx={{ justifyContent: "center" }}
        >
          <div>
            <img
              src={props.one}
              width={props.oneWidth}
              height={props.oneHeight}
              alt="img"
            />
          </div>
          <Typography fontSize="28px" fontWeight="500" m="20px 70px 0 ">
            {props.intro}
          </Typography>
          <Box display="flex" justifyContent="center" gap="1.6em">
            <Typography
              fontSize="21px"
              fontWeight="400"
              sx={{
                color: "#06c",
              }}
            >
              {props.linksT}
            </Typography>
            <Typography
              fontSize="21px"
              fontWeight="400"
              sx={{
                color: "#06c",
              }}
            >
              {props.linksM}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionPromoApps;
