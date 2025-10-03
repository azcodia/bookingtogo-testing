import { ShoppingCart } from "lucide-react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE, LOGIN_ROUTE } from "../constant/routeList.constant";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../store/slices/authSlice";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar = ({ open, onClose }: SidebarProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            Menu
          </h2>
          <nav className="flex flex-col gap-4">
            {["Home", "Products", "Categories"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}

            <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </button>

            {isLoggedIn ? (
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => {
                  dispatch(setLoginStatus(false));
                  navigate(APP_ROUTE, { replace: true });
                  onClose();
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => {
                  navigate(LOGIN_ROUTE, { replace: true });
                  onClose();
                }}
              >
                Login
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};
