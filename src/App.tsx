import "./App.css";

import Counter from "./counter/Counter";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./tasks";

function App() {
  return (
    <>
      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>
    </>
  );
}

export default App;
