import { useContext } from "react";
import { ItemContext } from "./itemContext";

export const useItems = () => useContext(ItemContext);

