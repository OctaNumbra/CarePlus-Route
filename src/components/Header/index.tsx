import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <header className="flex justify-center rounded-[3rem] p-3 mx-5 my-3 bg-header">
      <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
        <img src="/CarePlus.svg" alt="CarePlus Logo" className="size-12 col-span-2 md:col-span-1" />
        <div className=" justify-center items-center flex gap-4">
          <Link to="/" className="no-underline hover:underline text-black">Home</Link>
          <Link to="/familia" className="no-underline hover:underline text-black">Para Familiares</Link>
          <Link to="/cuidadores" className="no-underline hover:underline text-black">Para Cuidadores</Link>
          <Link to="/cuidados" className="no-underline hover:underline text-black">Cuidados Residenciais</Link>
          <Link to="/sobre" className="no-underline hover:underline text-black">Sobre Nós</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
