import { useContext } from "react";
import taskContext from "../state-management/contexts/tasksContext";

const useTask = () => useContext(taskContext);

export default useTask;
