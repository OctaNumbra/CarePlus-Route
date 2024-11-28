import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="p-0 bg-footer grid grid-cols-1 gap-2">
      <div className="w-full p-2 justify-center border-b-[1px] border-black items-center flex">
        <img src="./CarePlus.svg" alt="Care Plus Logo" className="h-14" />
      </div>
      <div className="px-10 text-2xl">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
            <Link to="/" className="text-4xl font-medium">
              CarePlus
            </Link>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex flex-col space-y-4">
                <h4 className="font-semibold">Acesso rápido</h4>
                <ul className="list-none p-0">
                  <li>
                    <Link to="/cuidados">Cuidados residenciais</Link>
                  </li>
                  <li>
                    <Link to="/cuidadores">Para cuidadores</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4">
                <ul className="list-none p-0">
                  <li>
                    <Link to="/familia">Para famílias</Link>
                  </li>
                  <li>
                    <Link to="/sobre">Sobre nós</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // <footer className="p-0 bg-footer grid grid-cols-1 gap-2">
    //   <div className=" w-full p-2 justify-center border-b-[1px] border-black items-center flex">
    //     <img src="./CarePlus.svg" alt="Care Plus Logo" className="size-14" />
    //   </div>
    //   <div className="px-10 text-2xl">
    //     <div>
    //       <div className="">
    //         <div className="flex items-center justify-between">
    //           <div className=" items-center grid grid-cols-4">
    //             <Link to="/" className=" text-4xl">
    //               CarePlus
    //             </Link>
    //             <h4 className="font-semibold">Acesso rápido</h4>
    //             <ul className="justify-between">
    //               <li>
    //                 <Link to="/cuidados">Cuidados residenciais</Link>
    //               </li>
    //               <li>
    //                 <Link to="/cuidadores">Para cuidadores</Link>
    //               </li>
    //             </ul>
    //             <ul>
    //               <li>
    //                 <Link to="/familia">Para famílias</Link>
    //               </li>
    //               <li>
    //                 <Link to="/sobre">Sobre nós</Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}

export default Footer;
