import { Route, Routes } from "react-router-dom";
import { getRoutes } from "./router";

interface AppRoute {
  path?: string;
  element: React.ReactNode;
  index?: boolean;
  children?: AppRoute[];
}

function renderRoutes(routes: AppRoute[]) {
  return routes.map((route, index) => {
    if (route.index) {
      return <Route key={index} index element={route.element} />;
    }
    return (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
}

function App() {
  const routes = getRoutes();

  return <Routes>{renderRoutes(routes)}</Routes>;
}

export default App;
