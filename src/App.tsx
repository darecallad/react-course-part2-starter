import { useReducer } from "react";
import "./App.css";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/reducer/taskReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import tasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <>
      <tasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </tasksContext.Provider>
    </>
  );
}

export default App;
