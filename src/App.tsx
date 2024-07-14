import { useEffect, useState } from "react";
import AddTask from "./components/main/addtask";
import Layout from "./components/main/layout";
import TaskMap from "./components/taskmap";
import Credits from "./components/credits";
import DarkModeSwitch from "./components/darkmodeswitch";
import ThemeSelector from "./components/main/themeselector";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const fetchTasks = () => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(existingTasks);
  };

  const fetchDarkMode = () => {
    const darkModeValue = localStorage.getItem("darkMode");
    setDarkMode(darkModeValue === "true");
  };

  const toggleDarkMode = () => {
    const newDarkModeValue = !darkMode;
    setDarkMode(newDarkModeValue);
    localStorage.setItem("darkMode", newDarkModeValue.toString());
  };

  useEffect(() => {
    fetchTasks();
    fetchDarkMode();
  }, []);

  return (
    <div className="test">
      <ThemeSelector>
        <Layout cssClass="gap-4 grid grid-flow-row auto-rows-max text-center w-96 mb-3">
          <DarkModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Layout>
        <Layout cssClass="">
          <AddTask fetchTasks={fetchTasks} />
        </Layout>

        <hr className="mb-2"></hr>
        <Layout cssClass="gap-4 grid grid-flow-row auto-rows-max text-center h-96 w-96">
          <TaskMap tasks={tasks} fetchTasks={fetchTasks} />
        </Layout>
        <hr className="mb-1"></hr>
        <Credits />
      </ThemeSelector>
    </div>
  );
};

export default App;
