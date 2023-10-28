import { ReactNode, useReducer } from "react";
import logContext from "./logContext";

interface LogIn {
  type: "LOGIN";
  username: string;
}

interface LogOut {
  type: "LOGOUT";
}

export type LogAction = LogIn | LogOut;

const logReducer = (state: string, action: LogAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
  }
};

interface Props {
  children: ReactNode;
}

const LogProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(logReducer, "");
  return (
    <logContext.Provider value={{ user, dispatch }}>
      {children}
    </logContext.Provider>
  );
};

export default LogProvider;
