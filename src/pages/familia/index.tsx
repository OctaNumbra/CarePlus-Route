import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check, Quote } from "lucide-react";

function Familia() {
  return (
    <div>
      <Header />
      {/* banner */}
      <div className="pl-14 text-5xl pb-5">
        <p>Como é ser um cuidador autônomo na plataforma CarePlus?</p>
      </div>
      <div className="flex justify-center bg-gray-50">
        <img
          src="./6.png"
          alt="Oferecemos ajuda"
          className="rounded-xl size-[95%]"
        />
      </div>
      {/* sobre */}
      <div className="grid grid-cols-2 border-black p-4 m-10 border-2 rounded-2xl shadow-md">
        <div className="">
          <h3 className="text-3xl py-2">O que é trabalho autônomo?</h3>
          <p className="text-lg">
            Em termos mais básicos, o trabalho autônomo implica trabalhar por
            conta própria, ao invés de trabalhar para um empregador. Isso pode
            proporcionar maior controle sobre aspectos como quando e onde você
            trabalha, além de quem você supervisiona.
          </p>
          <p className="text-lg py-2">Como cuidador autônomo, você pode –</p>
        </div>
        <div className="flex items-center">
          <div className="text-lg">
            <div className="flex gap-1">
              <Check />
              <p>
                Trabalhe com mais flexibilidade, escolhendo quando e onde
                trabalhar
              </p>
            </div>
            <div className="flex gap-1">
              <Check />
              <p>Encontre oportunidades de ajudar o próximo.</p>
            </div>
            <div className="flex gap-1">
              <Check />
              <p>
                Escolha os clientes com quem você trabalha, em vez de receber
                atribuições de cargos.
              </p>
            </div>
            <div className="flex gap-1">
              <Check />
              <p>
                Adquira novas habilidades em áreas como saúde e organização.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-black p-4 m-10 border-2 rounded-2xl shadow-md">
        <div className="flex px-5">
          <h3 className="text-3xl pb-3">
            As pessoas tornam-se cuidadores por uma ampla gama de razões
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div>
            <p className="text-xl">
              Não importa se começou apoiando alguém da própria família ou se
              sempre teve paixão em ajudar. 
            </p>
          </div>
          <div className="border-black p-4 border-2 rounded-2xl shadow-md text-center">
            <Quote />
            <p className="py-2">
              Uma das minhas coisas favoritas sobre ser cuidador é a
              comunicação. Cuidei de um cavalheiro que serviu na guerra e
              aprendi muito.
            </p>
            <p>*Cuidador anônimo</p>
          </div>
          <div className="border-black p-4 border-2 rounded-2xl shadow-md text-center">
            <Quote />
            <p className="py-2">
              Cuidar é algo que eu sempre quis fazer desde que me lembro. Sempre
              gostei de cuidar de idosos, mesmo desde muito jovem.
            </p>
            <p>*Maria Eduarda</p>
          </div>
          <div className="border-black p-4 border-2 rounded-2xl shadow-md text-center">
            <Quote />
            <p className="py-2">
              Minha introdução ao cuidado começou quando ajudei a cuidar de um
              dos meus pais idosos na casa da família em Cornwall por mais
              alguns anos.
            </p>
            <p>*Caroline</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Familia;
