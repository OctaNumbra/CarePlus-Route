import { Link } from "react-router-dom";
import "./style.css"

function Footer() {
  return (
    <footer>
      <div>
        <div className="bg-slate-800">
          <h2>CarePlus</h2>
          <Link to={"/"} className="">Home</Link>
          <img src="./CarePlus.svg" alt="Care Plus Logo" />
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
