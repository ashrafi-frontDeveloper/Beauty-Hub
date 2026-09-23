/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <div>Page Home</div> },
      { path: "", element: <div>Pages</div> },
      { path: "", element: <div>Pages</div> },
      { path: "", element: <div>Pages</div> },

      {
        path: "auth",
        element: <AuthLayout />,
        children: [{ index: true, element: <div>Auth</div> }],
      },


      { path: "*", element: <div className="">Not Found</div> },
    ],
  },

  {
    path: "/admin",
    element: <AppLayout />,
    children: [
      { index: true, element: <div className="">Pages</div> },
      { path: "", element: <div className="">Pages</div> },
      { path: "", element: <div className="">Pages</div> },
      { path: "", element: <div className="">Pages</div> },
      { path: "", element: <div className="">Pages</div> },
    ],
  },
]);

export default router;
