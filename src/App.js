import {
  Navbar,
  SectionMacbookAir,
  SectionMacbookPro,
  Retail,
  PromoSection,
  SectionWhatMakesMac,
  Apps,
} from "./component";
import SectionGetMoreMac from "./component/GetMoreMac";
import { CustomTheme } from "./context";

function App() {
  return (
    <CustomTheme>
      <Navbar />
      <SectionMacbookAir />
      <SectionMacbookPro />
      <PromoSection />
      <Retail />
      <SectionWhatMakesMac />
      <Apps />
      <SectionGetMoreMac />
    </CustomTheme>
  );
}

export default App;
