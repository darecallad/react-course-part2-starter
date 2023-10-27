import "./App.css";
import LogProvider from "./LogProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskProvider from "./taskProvider";

function App() {
  return (
    <>
      <LogProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </LogProvider>
    </>
  );
}

export default App;
