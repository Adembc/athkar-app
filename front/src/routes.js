import { Suspense, Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
// import LoadingScreen from "./components/LoadingScreen";

export const renderRoutes = (routes = []) => (
  <Suspense>
    <Routes>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    path: "/",
    layout: MainLayout,
    component: lazy(() => import("./views/Morning")),
  },
  {
    path: "/morning",
    layout: MainLayout,
    component: lazy(() => import("./views/Morning")),
  },
  {
    path: "/evening",
    layout: MainLayout,
    component: lazy(() => import("./views/Evening")),
  },
  {
    path: "/sleep",
    layout: MainLayout,
    component: lazy(() => import("./views/Sleep")),
  },
  {
    path: "/wake-up",
    layout: MainLayout,
    component: lazy(() => import("./views/Wakeup")),
  },
  {
    path: "/prayer",
    layout: MainLayout,
    component: lazy(() => import("./views/Morning")),
  },
  {
    path: "/after-prayer",
    layout: MainLayout,
    component: lazy(() => import("./views/Morning")),
  },
  {
    path: "/roukia-qu",
    layout: MainLayout,
    component: lazy(() => import("./views/Morning")),
  },
  {
    path: "/roukia-sn",
    layout: MainLayout,
    component: lazy(() => import("./views/Morning")),
  },
  {
    path: "/other",
    layout: MainLayout,
    component: lazy(() => import("./views/Morning")),
  },
  {
    path: "*",
    layout: MainLayout,
    component: lazy(() => import("./views/Morning")),
  },
];

export default routes;
