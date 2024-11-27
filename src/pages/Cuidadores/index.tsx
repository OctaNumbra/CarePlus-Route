import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";
import { Quote } from "lucide-react";

function Cuidadores() {
  return (
    <div>
      {/* Header component */}
      <Header />
      {/* banner */}
      <div className="pl-14 text-5xl pb-5">
        <h1>Conectamos cuidadores com clientes</h1>
      </div>
      <div className="flex justify-center bg-gray-50">
        <img
          src="./1.png"
          alt="Oferecemos ajuda"
          className="rounded-xl size-[95%]"
        />
      </div>
      {/* Compromisso */}
      <div className="px-14 ">
        <h1 className="text-5xl text">
          Estamos comprometidos em fazer o que é certo por você...
        </h1>
        <div className="flex py-5">
          <div className="text-xl content-center text-center">
            <p>
              Compreendemos que a vida adulta deve ser vivida intensamente.
              Indivíduos mais velhos devem receber o suporte necessário sem
              perder a sua dignidade. A sua autonomia precisa ser salvaguardada,
              e elas precisam de alguém em quem possam depositar confiança para
              conversar e oferecer companhia.{" "}
            </p>
            <p className="pt-5">
              Ao aderir à nossa rede de cuidadores extraordinários, você pode
              contribuir para que isso se concretize.
            </p>
          </div>
          <img src="./13.png" alt="idoso sendo ajudado" />
        </div>
      </div>

      {/* Experiencias */}
      <div>
        <h1 className="text-5xl px-14">
          O que os cuidadores dizem sobre começar a trabalhar com o auxílio da
          CarePlus?
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 py-5 px-28">
            {/* celeste */}
            <div className="border-black p-4 border-2 rounded-lg shadow-md mx-5">
              <Quote />
              <div className="justify-center flex">
                <img src="./14.png" alt="Celeste foto" className="" />
              </div>
              <div className="text-center p-1">
                <h3>Celeste</h3>
                <p>
                  "Passar o tempo com meus clientes e conversar sobre suas
                  vidas, famílias e hobbies, é gratificante, é graças a CarePlus
                  que tenho um direcionamento e uma organização melhor"
                </p>
              </div>
            </div>
            {/* Carlos */}
            <div className="border-black p-4 border-2 rounded-lg shadow-md mx-5">
              <Quote />
              <div className="justify-center flex">
                <img src="./15.png" alt="Carlos foto" className="" />
              </div>
              <div className="text-center p-1">
                <h3>Carlos</h3>
                <p>
                  "A flexibilidade do trabalho é boa, mas também achei que o
                  atendimento domiciliar é mais gratificante em termos de
                  satisfação no trabalho."
                </p>
              </div>
            </div>
            {/* Dora */}
            <div className="col-span-2 border-black p-4 my-10 mx-80 border-2 rounded-lg shadow-md">
              <Quote />
              <div className="justify-center flex">
                <img src="./16.png" alt="Dora foto" className="" />
              </div>
              <div className="text-center p-1">
                <h3>Dora</h3>
                <p>
                  "A flexibilidade do trabalho é boa, mas também achei que o
                  atendimento domiciliar é mais gratificante em termos de
                  satisfação no trabalho."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Cuidadores;
