import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Clock, Headset, CircleCheck, Quote } from "lucide-react";

function Sobre() {
  return (
    <div>
      {/* Header Components */}
      <Header />
      {/* diferenciais */}
      <div>
        <div className="flex px-10 items-center justify-center pb-10">
          <div className="">
            <h3 className="text-5xl">Por que CarePlus?</h3>
            <p className="text-lg py-4">
              Descubra o que nos torna diferentes e como podemos ajudar, não
              importa onde você esteja em sua jornada.
            </p>
          </div>
          <img src="./19.png" alt="Casal de Senhores" />
        </div>
        <div className="grid grid-cols-3 gap-10 px-4 pb-10">
          <div className="border-black rounded-full border-2 p-4 bg-azul bg-opacity-50 text-center shadow-md">
            <div className=" flex justify-center">
              <Clock className="size-10" />
            </div>
            <p className="text-lg">Mais controle</p>
          </div>
          <div className="border-black rounded-full border-2 p-4 bg-azul bg-opacity-50 text-center shadow-md">
            <div className=" flex justify-center">
              <Headset className="size-10" />
            </div>
            <p className="text-lg">Mais suporte</p>
          </div>
          <div className="border-black rounded-full border-2 p-4 bg-azul bg-opacity-50 text-center shadow-md">
            <div className=" flex justify-center">
              <CircleCheck className="size-10" />
            </div>
            <p className="text-lg">Buscando a excelência</p>
          </div>
        </div>
        <div className="border-black rounded-lg border-2 px-4 mb-10 mx-4 gap-3 shadow-md">
          <Quote className="" />
          <div className="flex justify-center">
            <p className="pl-3 text-lg">
              Nossa missão é reinventar o que significa envelhecer. Mudar
              conversas e percepções, para que envelhecer não signifique abrir
              mão de escolhas, independência ou das coisas que nos fazem ser
              quem somos. Estamos sempre buscando a excelência - Elevamos o
              nível, quebramos padrões e nos comprometemos a resolver problemas
              complexos para clientes, cuidadores e parceiros. <br /> Fazemos
              isso nos unindo. Somos movidos por insight, ambição e propósito.
              Trabalhamos juntos em ritmo acelerado e garantimos que todos
              tenham voz. <br /> E somos apaixonados por apoiar as pessoas em
              suas próprias casas à medida que envelhecem. Valorizamos aqueles
              que se importam e estamos trabalhando para mudar a sociedade para
              melhor.
            </p>
          </div>
          <div className="justify-end flex text-blue-500">
            <p className="text-lg">*Equipe CarePlus</p>
          </div>
        </div>
        <h3 className="text-3xl px-10 pb-10">Por que usar nosso aplicativo?</h3>
        <div className="border-black rounded-lg border-2 p-4 mx-4 mb-10 gap-3 shadow-md">
          <p className="text-lg ">
            O CarePlus é um aplicativo desenvolvido para auxiliar cuidadores de
            pessoas com debilidade, incluindo Alzheimer, oferecendo ferramentas
            para gerenciar e otimizar o cuidado diário. O app integra
            funcionalidade que facilitam a comunicação entre cuidadores e
            familiares, o gerenciamento de prontuários dos pacientes, lembretes
            de medicamentos e dicas práticas sobre cuidados.
          </p>
        </div>
        <div className="flex justify-center pb-10">
            <img src="./18.png" alt="Download"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Sobre;
