import { BuiltApps, ProApps } from "../../utils/apps";
import { SectionBuiltApps } from "./SectionBuiltApps";

export const Apps = () => {
  return (
    <>
      {BuiltApps.map((el, index) => (
        <SectionBuiltApps key={index} {...el} />
      ))}
      {ProApps.map((el, index) => (
        <SectionBuiltApps key={index} {...el} />
      ))}
    </>
  );
};
