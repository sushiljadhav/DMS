import React from "react";
import { Routes , Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Layout from "./layout";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/dashboard" element={<Layout></Layout>}> 
        <Route index element={<Dashboard />}></Route>
      </Route>
    </Routes>
  )
 
}

export default App;