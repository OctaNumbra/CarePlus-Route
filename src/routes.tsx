import { Route, Routes } from "react-router-dom";
import Cuidadores from "./pages/Cuidadores";
import Home from "./pages/Home";
import './index.css'

function MainRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cuidadores" element={<Cuidadores/>} />
    </Routes>
  )
}

export default MainRoutes;