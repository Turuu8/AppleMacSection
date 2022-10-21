import { ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const NewProduct = ({
  period,
  productName,
  width,
  height,
  url,
  eyeBrow,
  price,
  learnMore,
  color,
  mar,
}) => {
  return (
    <>
      <ListItemText
        primaryTypographyProps={{ fontSize: "17px", fontWeight: "500" }}
        primary={period}
        sx={{ color: "secondary.main", padding: "0" }}
      />
      <Typography
        sx={{ fontWeight: "500", lineHeight: 1.07143, color: `${color}` }}
        fontSize="56px"
      >
        {productName}
      </Typography>
      {/* <ListItemText
        primaryTypographyProps={{ fontSize: "56px", fontWeight: "600" }}
        primary={productName}
      /> */}
      <Typography
        sx={{ fontWeight: "500", lineHeight: 1.14286, color: `${color}` }}
        fontSize="28px"
      >
        {eyeBrow}
      </Typography>
      {/* <ListItemText
        primaryTypographyProps={{ fontSize: "28px", fontWeight: "600" }}
        sx={{ marginBottom: " 0 0 0 11px" }}
        primary={eyeBrow}
      /> */}
      <ListItemText
        primaryTypographyProps={{ fontSize: "17px", fontWeight: "300" }}
        sx={{ marginTop: "1.35em", color: `${color}` }}
        primary={price}
      />
      <Box
        sx={{
          display: "flex",
          marginBottom: `${mar}px`,
          alignItems: "center",
          justifyContent: "center",
          marginTop: "6px",
        }}
      >
        <ListItemText
          primaryTypographyProps={{ fontSize: "17px", fontWeight: "300" }}
          primary="Buy"
          sx={{
            height: "36px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            color: "#fff",
            backgroundColor: "#0071e3",
            padding: "8px 16px",
            borderRadius: "980px",
            margin: "0 10px ",
          }}
        />
        <ListItemText
          primaryTypographyProps={{ fontSize: "17px", fontWeight: "300" }}
          primary={learnMore}
          sx={{ color: "#06c", margin: "0 15px " }}
        />
      </Box>
      <Box
        // position="absolute"
        // bottom="0"
        component="img"
        width={width}
        height={height}
        src={url}
      />
    </>
  );
};

export const PromoProductSection = ({
  url,
  name,
  chip,
  price,
  inch,
  display,
  chipUrl,
  chipName,
  up,
  cpuCore,
  cpu,
  GpuCore,
  gpu,
  memoryImage,
  memory,
  storageSize,
  storage,
  batteryImage,
  battery,
  cameraImage,
  camera,
  speakersImage,
  speakers,
  weightSize,
  weight,
  touchImage,
  touch,
  computerColorUrl,
  period,
  pad,
  pricePad,
  priceMargin,
  upto,
  chipSize,
}) => {
  return (
    <>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "323px",
            position: "relative",
          }}
        >
          <div style={{ margin: "0 0 12px", height: "167px" }}>
            <Box component="img" src={url} height="100%" />
          </div>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            // justifyContent="center"
            height="144px"
            sx={{ padding: `0 ${pad}` }}
          >
            <Box position="relative" height="56px">
              <Box
                component="img"
                src={computerColorUrl}
                height="14px"
                m="11px 0 31px"
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "300",
                  textAlign: "center",
                  color: "secondary.second",
                  position: "absolute",
                  bottom: "1%",
                  left: "0",
                  right: "0",
                  margin: "auto",
                }}
              >
                {period}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "500",
                lineHeight: 1.16667,
                textAlign: "center",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: 1.16667,
                textAlign: "center",
                marginTop: "4px",
              }}
            >
              {chip}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "300",
                lineHeight: 1.16667,
                textAlign: "center",
                height: "17px",
                paddingTop: `${pricePad}`,
                marginTop: `${priceMargin}`,
              }}
            >
              {price}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: " 0 0 22px",
            borderBottom: "1px solid #d2d2d7",
            margin: "8px 0 0",
          }}
        >
          <Typography
            sx={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              width: "45px",
              height: "24px",
              lineHeight: 1.33337,
              backgroundColor: "#0071e3",
              padding: "4px 11px",
              borderRadius: "980px",
              margin: "0 10px ",
              fontSize: "12px",
              fontWeight: "300",
            }}
          >
            Buy
          </Typography>
          <ListItemText
            primaryTypographyProps={{ fontSize: "14px", fontWeight: "300" }}
            primary="Learn more >"
            sx={{ margin: "8px 0 0", color: "#06c" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "39px",
            height: "56px",
          }}
        >
          <Typography sx={{ fontSize: "21px", fontWeight: "500" }} variant="h4">
            {inch}
          </Typography>
          <ListItemText
            primary={display}
            primaryTypographyProps={{ fontSize: "14px", fontWeight: "300" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "39px",
            height: "99px",
          }}
        >
          <Box
            component="img"
            src={chipUrl}
            sx={{ height: `${chipSize}` }}
            margin="0 0 4px 0"
          />
          <ListItemText
            primary={chipName}
            sx={{
              padding: "0 30px",
            }}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "15px",
            marginTop: "39px",
            height: "56px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "-5px",
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
              lineHeight: "15px",
            }}
          >
            {up}
          </Typography>
          <Typography sx={{ fontSize: "21px", fontWeight: "500" }} variant="h4">
            {cpuCore}
          </Typography>
          <ListItemText
            primary={cpu}
            sx={{
              padding: "0 30px",
            }}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "15px",
            marginTop: "39px",
            height: "56px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "-5px",
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
              lineHeight: "15px",
            }}
          >
            {upto}
          </Typography>
          <Typography sx={{ fontSize: "21px", fontWeight: "500" }} variant="h4">
            {GpuCore}
          </Typography>
          <ListItemText
            primary={gpu}
            sx={{
              margin: "0",
              padding: "0",
            }}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "39px",
            height: "78px",
          }}
        >
          <Box
            component="img"
            src={memoryImage}
            height="44px"
            margin="0 0 4px 0"
          />
          <ListItemText
            primary={memory}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "39px",
            height: "50px",
          }}
        >
          <Typography sx={{ fontSize: "21px", fontWeight: "500" }} variant="h4">
            {storageSize}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
              height: "20px",
            }}
            variant="h4"
          >
            {storage}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "39px",
            height: "64px",
          }}
        >
          <Box
            component="img"
            src={batteryImage}
            height="44px"
            margin="0 0 4px 0"
          />
          <ListItemText
            primary={battery}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "39px",
            height: "67px",
          }}
        >
          <Box
            component="img"
            src={cameraImage}
            height="44px"
            margin="0 0 4px 0"
          />
          <ListItemText
            primary={camera}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "39px",
            height: "116px",
          }}
        >
          <Box
            component="img"
            src={speakersImage}
            height="44px"
            margin="0 0 4px 0"
          />
          <ListItemText
            primary={speakers}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "39px",
            height: "56px",
            position: "relative",
          }}
        >
          <Typography sx={{ fontSize: "21px", fontWeight: "500" }} variant="h4">
            {weightSize}
          </Typography>
          <ListItemText
            primary={weight}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "39px",
            padding: "6px 0 45px",
            height: "78px",
            borderBottom: "1px solid #d2d2d7",
          }}
        >
          <Box
            component="img"
            src={touchImage}
            height="44px"
            margin="0 0 4px 0"
          />
          <ListItemText
            primary={touch}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: "300",
              textAlign: "center",
            }}
          />
        </Box>
      </div>
    </>
  );
};

export const Bannar = ({
  url,
  eyeBrow,
  headline,
  productPromoIntro,
  filmLink,
}) => {
  const styles = {
    bannerImage: {
      backgroundImage: `url(${url})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  };
  return (
    <>
      <Box sx={styles.bannerImage} width="100%" height="100%"></Box>
      <Box width="100%" height="100%" position="absolute" top="0">
        <Box
          width="324px"
          height="100%"
          marginLeft="98px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ color: "primary.light" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              textAlign: "center",
              marginBottom: "0.4em",
            }}
          >
            {eyeBrow}
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: "48px", fontWeight: "500", textAlign: "center" }}
          >
            {headline}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "17px",
              fontWeight: "300",
              textAlign: "center",
              marginTop: "20px",
              lineHeight: 1.167,
            }}
          >
            {productPromoIntro}
          </Typography>
          <Typography
            sx={{
              marginTop: "0.8em",
              fontSize: "17px",
              textAlign: "center",
              fontWeight: "300",
              color: "#2997ff",
            }}
          >
            {filmLink}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
