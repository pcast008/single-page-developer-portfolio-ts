import { useMediaQuery } from "react-responsive";
import { Divider } from "../Divider";

export function ThirdDivider() {
    const tablet = useMediaQuery({ query: "(min-width: 768px)" });
    const desktop = useMediaQuery({ query: "(min-width: 1440px)" });
  
    if (tablet) {
      return <Divider marginTop="5.75rem" marginBottom="1.87rem" />;
    } else if (desktop) {
      return <Divider marginTop="5.75rem" marginBottom="2.94rem" />;
    } else {
      return <Divider marginTop="5.44rem" marginBottom="2.44rem" />;
    }
  }