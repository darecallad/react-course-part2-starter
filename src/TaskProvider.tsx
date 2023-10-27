import { ReactNode, useReducer } from "react";
import tasksContext from "./state-management/contexts/tasksContext";
import taskReducer from "./state-management/reducer/taskReducer";

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <tasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </tasksContext.Provider>
  );
};

export default TaskProvider;
