import { Box } from "@mui/system";
import { newProductSecond } from "../../utils/newProductPromo";
import { NewProduct } from "../home-new-product";
import { MainStyles } from "../MainStyles";
import { styles } from "./styles";

export const SectionMacbookPro = () => {
  return (
    <Box
      padding={{ xs: "54px 0 0 0 ", md: "60px 0 0 0" }}
      sx={styles.sectionMacbookPro}
    >
      <Box
        sx={MainStyles.productName}
        padding={{ xs: "20px 0 0 0", md: "40px 0 0 0" }}
      >
        {newProductSecond.map((el, index) => (
          <NewProduct key={index} {...el} />
        ))}
      </Box>
    </Box>
  );
};
