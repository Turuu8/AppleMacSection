import { Box } from "@mui/system";
import { newProductFirst } from "../../utils/newProductPromo";
import { NewProduct } from "../home-new-product";
import { MainStyles } from "../MainStyles";
import { styles } from "./styles";

export const SectionMacbookAir = () => {
  return (
    <Box sx={styles.sectionMacbookAir}>
      <Box sx={MainStyles.productName}>
        {newProductFirst.map((el, index) => (
          <NewProduct key={index} {...el} />
        ))}
      </Box>
    </Box>
  );
};
