import React from "react";
import { Routes , Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Layout from "./layout";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home";
import Editor from "./pages/EditorPage";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/editor/:roomId" element={<Editor/>}></Route>
      {/* <Route path="/editor" element={<Layout></Layout>}> 
        <Route index element={<Dashboard />}></Route>
      </Route> */}
    </Routes>
  )
 
}

export default App;