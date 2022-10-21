import { Box, Typography } from "@mui/material";
import { styles } from "./styles";

const SectionPromoAppsDetail = (props) => {
  return (
    <Box sx={styles.sectiobDetailOne}>
      <Box
        width="100%"
        height="100%"
        sx={{
          backgroundColor: props.backColor,
        }}
      >
        <div style={{ position: "absolute", top: "0" }}>
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
            sx={{
              color: props.textColor,
            }}
          >
            {props.intro}
          </Typography>
          <div>
            <Typography>{props.try}</Typography>
            <Typography>{props.learnMore}</Typography>
          </div>
        </div>
        <div style={styles.backgroundImg}>
          <img
            src={props.backUrl}
            width={props.backWidth}
            height={props.backHeight}
            alt="backgroundImage"
          />
        </div>
      </Box>
    </Box>
  );
};

export default SectionPromoAppsDetail;
