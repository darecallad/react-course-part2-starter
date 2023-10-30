import "./App.css";
import { LogProvider } from "./auth";
import Counter from "./counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./tasks";

function App() {
  return (
    <>
      <LogProvider>
        <TaskProvider>
          <Counter />
          <NavBar />
          <HomePage />
        </TaskProvider>
      </LogProvider>
    </>
  );
}

export default App;
