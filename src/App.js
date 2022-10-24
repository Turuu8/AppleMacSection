import { Box } from "@mui/system";
import {
  Navbar,
  SectionMacbookAir,
  SectionMacbookPro,
  Retail,
  PromoSection,
  SectionWhatMakesMac,
  Apps,
  Footer,
  SectionGetMoreMac,
} from "./component";
import { CustomTheme } from "./context";

function App() {
  return (
    <CustomTheme>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Navbar />
        <SectionMacbookAir />
        <SectionMacbookPro />
        <PromoSection />
        <Retail />
        <SectionWhatMakesMac />
        <Apps />
        <SectionGetMoreMac />
        <Footer />
      </Box>
    </CustomTheme>
  );
}

export default App;
