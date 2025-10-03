import { APP_ROUTE, LOGIN_ROUTE } from "../constant/routeList.constant";
import Login from "../pages/login";
import { Home } from "../pages/home";

interface RouteConfig {
  path?: string;
  element: React.ReactNode;
  index?: boolean;
  children?: RouteConfig[];
}

export const getRoutes = (): RouteConfig[] => [
  {
    path: LOGIN_ROUTE,
    element: <Login />,
  },
  {
    path: APP_ROUTE,
    element: <Home />,
  },
  {
    path: "*",
    element: <Home />,
  },
];
