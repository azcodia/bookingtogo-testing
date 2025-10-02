import { Sun, Moon } from "lucide-react";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeToggle = ({
  darkMode,
  toggleDarkMode,
}: DarkModeToggleProps) => (
  <button
    onClick={toggleDarkMode}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
  >
    {darkMode ? (
      <Sun className="w-5 h-5 text-yellow-400" />
    ) : (
      <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
    )}
  </button>
);
