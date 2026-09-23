// src/App.jsx
import { RouterProvider } from "react-router";
import router from "./lib/routes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;