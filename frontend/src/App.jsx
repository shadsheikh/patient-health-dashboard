import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthorizationForm from "./components/AuthorizationForm";
import AuthorizationSuccess from "./components/AuthorizationSuccess";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/authorization/:patientId",
        element: <AuthorizationForm />,
      },
      {
        path: "/authorization-success",
        element: <AuthorizationSuccess />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
