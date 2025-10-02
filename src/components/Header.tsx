import { DarkModeToggle } from "./DarkModeToggle";

interface HeaderProps {
  onOpenSidebar: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header = ({
  onOpenSidebar,
  darkMode,
  toggleDarkMode,
}: HeaderProps) => (
  <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MyMarketplace
        </h1>

        <nav className="space-x-6 hidden md:flex">
          {["Home", "Products", "Categories", "Cart"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={onOpenSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
);
