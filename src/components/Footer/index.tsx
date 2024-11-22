import { Link } from "react-router-dom";
import "./style.css"

function Footer() {
  return (
    <footer className="bg-footer flex justify-evenly">
        <div className="grid grid-cols-7  gap-10 items-center">
          <h2 className="col-span-3 text-7xl">CarePlus</h2>
          <img src="./CarePlus.svg" alt="Care Plus Logo" className="size-12" />
          <div className="col-span-3"></div>
        </div>
    </footer>
  );
}

export default Footer;
