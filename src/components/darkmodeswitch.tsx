import { Switch } from "./ui/switch";
import { Moon, Sun } from "lucide-react";

interface DarkModeSwitchProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <div className="flex items-center space-x-2 col-start-1 col-end-7 mx-auto">
      <Sun />
      <Switch id="dark-mode" checked={darkMode} onClick={handleToggle} />
      <Moon />
    </div>
  );
};

export default DarkModeSwitch;
