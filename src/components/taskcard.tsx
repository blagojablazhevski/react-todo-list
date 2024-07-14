import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CircleCheck, RotateCcw, CircleMinus } from "lucide-react"; // Adjust the import path as needed

interface Task {
  task_id: number;
  task_name: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
  toggleTaskCompletion: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  toggleTaskCompletion,
  deleteTask,
}) => {
  return (
    <Card className="mb-1 card-hover">
      <CardHeader>
        <CardTitle className="text-lg">
          {" "}
          <Button
            className="p-2"
            variant={"ghost"}
            onClick={() => toggleTaskCompletion(task.task_id)}
          >
            {!task.completed ? (
              <CircleCheck className="h-4 w-4 complete-hover" />
            ) : (
              <RotateCcw className="h-4 w-4" />
            )}
          </Button>
          {task.task_name}
          <Button
            className="p-2"
            onClick={() => deleteTask(task.task_id)}
            variant={"ghost"}
          >
            <CircleMinus className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription className="select-none">
          {task.completed
            ? "✔️ Task is completed."
            : "❌ Task is not completed."}
        </CardDescription>
      </CardHeader>
      <div className="flex gap-2 "></div>
    </Card>
  );
};

export default TaskCard;
