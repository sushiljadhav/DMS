import React from "react";
import { Routes , Route } from "react-router-dom";
import Login from "./pages/Login/login";
import EditorPage from "./pages/Editor/EditorPage";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/editor/:roomId" element={<EditorPage/>}></Route>
    </Routes>
  )
 
}

export default App;