import React, { useEffect, useState } from "react";
import { Input } from "../../../@/components/ui/input";
import { Button } from "../ui/button";

const flavorText: Array<string> = [
  "☕ Have a cup of coffee.",
  "🌞 Enjoy the sun.",
  "🤖 Hello world.",
  "📞 Call mom.",
  "🧹 Clean up.",
  "🍺 Crack open a cold one.",
  "🛒 Buy groceries.",
  "🐕 Walk the dog.",
  "🍃 Create a лист.",
  "🗑️ Take out the trash.",
  "🍔 Treat myself.",
  "👽 Bogos binted.",
  "🌀 Practice rasengan.",
  "🌙 Enable dark mode.",
];

interface AddTaskProps {
  fetchTasks: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ fetchTasks }) => {
  const [input, setInput] = useState("");

  const randomPlaceholder =
    flavorText[Math.floor(Math.random() * flavorText.length)];

  useEffect(() => {
    // Initialize local storage with an empty array if 'tasks' doesn't exist
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, []);

  const addTask = () => {
    if (input !== "") {
      const newTask = {
        task_id: Date.now(),
        task_name: input,
        completed: false,
      };

      const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const updatedTasks = [...existingTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      fetchTasks();
      setInput("");
    } else {
      const newTask = {
        task_id: Date.now(),
        task_name: randomPlaceholder,
        completed: false,
      };

      const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const updatedTasks = [...existingTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      fetchTasks();
      setInput("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="grid grid-rows-1 grid-flow-col gap-4 mb-2 ">
      <Input
        className=""
        placeholder={randomPlaceholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button className="" onClick={addTask}>
        Add to 🍃 Лист
      </Button>
    </div>
  );
};

export default AddTask;
