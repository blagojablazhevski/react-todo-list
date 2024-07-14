import { ScrollArea } from "@radix-ui/react-scroll-area";
import TaskCard from "./taskcard";

interface Task {
  task_id: number;
  task_name: string;
  completed: boolean;
}

interface TaskMapProps {
  tasks: Task[];
  fetchTasks: () => void;
}

const TaskMap: React.FC<TaskMapProps> = ({ tasks, fetchTasks }) => {
  const toggleTaskCompletion = (task_id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.task_id === task_id ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    fetchTasks();
  };

  const deleteTask = (task_id: number) => {
    const updatedTasks = tasks.filter((task) => task.task_id !== task_id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    fetchTasks();
  };

  return tasks.length === 0 ? (
    <div className="text-center">🕸️ No tasks available at the moment.</div>
  ) : (
    <ScrollArea className="h-96 overflow-y-scroll">
      {tasks.map((task) => (
        <div className="col-start-1 col-end-7 mx-auto" key={task.task_id}>
          <TaskCard
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        </div>
      ))}
    </ScrollArea>
  );
};

export default TaskMap;
