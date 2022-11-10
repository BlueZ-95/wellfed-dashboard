import { createContext } from "react";
import { SessionProps } from "../scripts/UIConfigs.types";

export const UserContext = createContext<SessionProps>(null);
