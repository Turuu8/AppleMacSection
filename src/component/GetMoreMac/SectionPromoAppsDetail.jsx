import { Box, Typography } from "@mui/material";

const SectionPromoAppsDetail = (props) => {
  return (
    <Box
      sx={{
        height: `${props.height}`,
        width: "100%",
      }}
    >
      <Box
        width="100%"
        height="100%"
        sx={{
          backgroundColor: props.backColor,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.backUrl})`,
            backgroundSize: `${props.backWidth} ${props.backHeight}`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${props.position}`,
          }}
        >
          <Box pt="59px" textAlign="center">
            <div>
              <img
                src={props.headlineUrl}
                width={props.headWidth}
                height={props.headHeight}
                alt="head"
              />
            </div>
            <Typography
              variant="h3"
              fontSize="21px"
              fontWeight="300"
              p="23px 24% 0.8em 23%"
              sx={{
                color: props.textColor,
              }}
            >
              {props.intro}
            </Typography>
            <div
              style={{
                color: props.backColor === "#fa3455" ? "#F5F5F7" : "#06c",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                fontSize="21px"
                pr="0.8em"
                sx={{
                  display: props.try === "" ? "none" : "block",
                }}
              >
                {props.try}
              </Typography>
              <Typography fontSize="21px" pl="0.8em">
                {props.learnMore}
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionPromoAppsDetail;
