import { GitBranch, Github } from "lucide-react";
import { Button } from "./ui/button";

const Credits = () => {
  return (
    <div className="text-center">
      <a href="https://github.com/blagojablazhevski">
        <Button variant="ghost" className="">
          <Github />
          /blagojablazhevski
        </Button>
      </a>
      <a href="https://github.com/blagojablazhevski/react-todo-list">
        <Button variant="ghost" className="">
          <GitBranch />
          /repo
        </Button>
      </a>
      <h1></h1>
    </div>
  );
};

export default Credits;
