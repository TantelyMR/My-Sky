import { useContext } from "react";
import SkyContext from "./SkyProvider";

const useSky = () => useContext(SkyContext);

export { useSky };