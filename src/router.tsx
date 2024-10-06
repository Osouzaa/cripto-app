import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./_layouts";
import { Home } from "./pages/Home";
import { Detail } from "./pages/details";
import { NotFound } from "./pages/notFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:cripto",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
