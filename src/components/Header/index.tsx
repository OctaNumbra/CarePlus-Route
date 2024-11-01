import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <header>
      <img src="/CarePlus.svg" alt="CarePlus Logo" className="careplus-logo " />
      <div>
        <Link to="/">Home</Link>
        <Link to="/familia">Para Familiares</Link>
        <Link to="/cuidadores">Para Cuidadores</Link>
        <Link to="/cuidados">Cuidados Residenciais</Link>
        <Link to="/sobre">Sobre Nós</Link>
      </div>
    </header>
  );
}

export default Header;
