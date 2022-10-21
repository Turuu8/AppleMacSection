import { Box } from "@mui/system";
import { newProductSecond } from "../../utils/newProductPromo";
import { NewProduct } from "../home-new-product";
import { MainStyles } from "../MainStyles";
import { styles } from "./styles";

export const SectionMacbookPro = () => {
  return (
    <Box padding="60px 0 0" sx={styles.sectionMacbookPro}>
      <Box sx={MainStyles.productName} padding="40px 0 0 0 ">
        {newProductSecond.map((el, index) => (
          <NewProduct key={index} {...el} />
        ))}
      </Box>
    </Box>
  );
};
