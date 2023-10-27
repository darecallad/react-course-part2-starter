import { ReactNode, useReducer } from "react";
import logContext from "./state-management/contexts/logContext";
import logReducer from "./state-management/reducer/logReducer";

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
