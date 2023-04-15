import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,

} from "react-router-dom";



function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Home page</h1>
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
