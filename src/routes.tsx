import { Route, Routes } from "react-router-dom";
import Cuidadores from "./pages/cuidadores";
import Home from "./pages/Home";
import Cuidados from "./pages/cuidados";
import './index.css'
import Familia from "./pages/familia";
import Sobre from "./pages/sobre";

function MainRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/familia" element={<Familia/>} />
      <Route path="/cuidadores" element={<Cuidadores/>} />
      <Route path="/cuidados" element={<Cuidados/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
    </Routes>
  )
}

export default MainRoutes;