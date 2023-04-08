import React from "react";
import { useRoutes } from "react-router";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  let element = useRoutes(
    [
      { path: "/", element: <Login></Login> },
      { path: "/dashboard", element: <Dashboard></Dashboard> }
    ]
    );

  return element;
}

export default App;
