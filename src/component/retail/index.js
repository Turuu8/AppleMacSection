import { Box } from "@mui/material";
import { CartSectionPromo } from "../../utils/newProductPromo";
import { BannerImage } from "./BannerImage";
import { SectionCartPromo } from "./SectionCartPromo";
import { styles } from "./styles";
import { SectionTileGrid } from "./SectionTileGrid";
import { promoTileItmes } from "../../utils/tileGrid";
import { SectionStrip } from "./SectionStrip";
import { SectionStripItems } from "../../utils/Strip";

export const Retail = () => {
  return (
    <Box maxWidth="1440px">
      <BannerImage />
      {/* ------------- CART PROMO ------------- */}
      <Box component="div" width="100%">
        <Box
          height="509px"
          margin="30px 2.08333%"
          sx={{
            backgroundColor: "secondary.light",
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {CartSectionPromo.map((el, index) => (
            <SectionCartPromo key={index} {...el} />
          ))}
        </Box>
      </Box>
      {/* ------------- CART PROMO ------------- */}

      {/* ------------- TILE GRID ------------- */}
      <Box sx={styles.tileGrid}>
        {promoTileItmes.map((e, i) => (
          <SectionTileGrid key={i} {...e} />
        ))}
      </Box>
      {/* ------------- TILE GRID ------------- */}

      {/* ------------- THE STRIP ------------- */}
      <Box sx={styles.sectionStrip}>
        {SectionStripItems.map((el, i) => (
          <SectionStrip key={i} {...el} />
        ))}
      </Box>
      {/* ------------- THE STRIP ------------- */}
    </Box>
  );
};
