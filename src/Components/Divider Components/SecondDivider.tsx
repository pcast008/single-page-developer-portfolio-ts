import { useMediaQuery } from "react-responsive";
import { Divider } from "../Divider";

export function SecondDivider() {
  const tablet = useMediaQuery({ query: "(min-width: 768px)" });
  const desktop = useMediaQuery({ query: "(min-width: 1440px)" });

  if (tablet) {
    return <Divider height="0" />;
  } else if (desktop) {
    return <Divider height="0" />;
  } else {
    return <Divider marginTop="2.5rem" marginBottom="5rem" />;
  }
}
