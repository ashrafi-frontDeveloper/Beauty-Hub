// src/App.jsx
import { RouterProvider } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import router from "./lib/routes";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;