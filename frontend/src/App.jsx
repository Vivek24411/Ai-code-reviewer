import React from "react";
import { Route, Routes } from "react-router-dom";
import Coding from "./pages/Coding";
import Start from "./pages/Start";


function App(){
  return <>
   <Routes>
    <Route path="/" element={<Start/>}/>
    <Route path="/code" element={<Coding/>} />
   </Routes>
  </>
}

export default App