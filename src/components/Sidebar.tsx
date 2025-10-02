interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar = ({ open, onClose }: SidebarProps) => (
  <>
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    ></div>

    <aside
      className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-md z-50 transform transition-transform ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold dark:text-white">Menu</h2>
        <button onClick={onClose} className="text-gray-700 dark:text-gray-300">
          ✕
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-3">
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
    </aside>
  </>
);
