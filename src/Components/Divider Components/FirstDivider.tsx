import { useMediaQuery } from "react-responsive";
import { Divider } from "../Divider";

export function FirstDivider() {
  const tablet = useMediaQuery({ query: "(min-width: 768px)" });
  const desktop = useMediaQuery({ query: "(min-width: 1440px)" });

  if (desktop) {
    return <Divider marginTop="13.69rem" marginBottom="4.5rem" />;
  } else if (tablet) {
    return <Divider marginTop="3.75rem" marginBottom="3.25rem" />;
  } else {
    return <Divider marginTop="5rem" marginBottom="2.5rem" />;
  }
}
