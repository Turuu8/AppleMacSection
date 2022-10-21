import { Box } from "@mui/system";
import { Bannar } from "../home-new-product";

export const BannerImage = () => {
  return (
    <Box width="100%">
      <Box height="600px" margin="30px 2.08333%" position="relative">
        {banner.map((el, index) => (
          <Bannar key={index} {...el} />
        ))}
      </Box>
    </Box>
  );
};
export const banner = [
  {
    url: "https://www.apple.com/v/mac/home/bq/images/overview/skywalker-btm/btm_tile__foyxdms85eum_large_2x.jpg",
    eyeBrow: "Behind the Mac",
    headline: "Hear the Force.",
    productPromoIntro:
      "Learn how the pros at Skywalker Sound push the limits of sonic storytelling.",
    filmLink: "Watch the film",
  },
];
