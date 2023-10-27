import { useContext } from "react";
import logContext from "../state-management/contexts/logContext";

const useLog = () => useContext(logContext);

export default useLog;
