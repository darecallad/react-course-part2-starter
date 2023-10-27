import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import logContext from "./state-management/contexts/logContext";
import tasksContext from "./state-management/contexts/tasksContext";
import logReducer from "./state-management/reducer/logReducer";
import taskReducer from "./state-management/reducer/taskReducer";

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, logDispatch] = useReducer(logReducer, "");
  return (
    <>
      <logContext.Provider value={{ user, dispatch: logDispatch }}>
        <tasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
          <NavBar />
          <HomePage />
        </tasksContext.Provider>
      </logContext.Provider>
    </>
  );
}

export default App;
