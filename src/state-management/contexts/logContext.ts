import { Dispatch } from "react";
import { LogAction } from "../reducer/logReducer";
import React from "react";

interface LogContextType {
  user: string;
  dispatch: Dispatch<LogAction>;
}

const logContext = React.createContext<LogContextType>({} as LogContextType);

export default logContext;
