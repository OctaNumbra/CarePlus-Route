import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  HandHeart,
  Accessibility,
  UserRoundPlus,
  HeartPulse,
  ChefHat,
  WashingMachine,
  ShoppingBag,
  PawPrint,
  Headset,
  CalendarCheck2,
} from "lucide-react";

function Cuidados() {
  return (
    <div>
      {/* Header component */}
      <Header />
      {/* info */}
      <div className="flex items-center pb-10">
        <div className="items-center px-20">
          <div className="flex">
            <h2 className="text-5xl">De quem vou cuidar?</h2>
          </div>
          <div className="text-center">
            <p className="text-xl">
              Os clientes provavelmente ainda serão bastante independentes,
              então o cuidado domiciliar pode incluir apoio ou incentivo com
              coisas como:
            </p>
          </div>
        </div>
        <img src="./17.png" alt="senhor andando" className="size-[45%] px-20" />
      </div>
      {/* tipo de cuidados */}
      <div className="grid grid-cols-4 px-20 pb-10 gap-5 justify-center items-center ">
        <div className="flex gap-1 rounded-md bg-azul bg-opacity-50 justify-center items-center h-16 p-2">
          <HandHeart />
          <p>Cuidados pessoais</p>
        </div>
        <div className="flex gap-1 rounded-md bg-azul bg-opacity-50 justify-center items-center h-16 p-2">
          <Accessibility />
          <p>Suporte de mobilidade</p>
        </div>
        <div className="flex gap-1 rounded-md bg-azul bg-opacity-50 justify-center items-center h-16 p-2">
          <UserRoundPlus />
          <p>Companhia</p>
        </div>
        <div className="flex gap-1 rounded-md bg-azul bg-opacity-50 justify-center items-center h-16 p-2">
          <HeartPulse />
          <p>Verificações de bem-estar</p>
        </div>
        <div className="flex gap-1 rounded-md bg-azul bg-opacity-50 justify-center items-center h-16 p-2">
          <ChefHat />
          <p>Cozinhar e preparar refeições</p>
        </div>
        <div className="flex gap-1 rounded-md bg-azul bg-opacity-50 justify-center items-center h-16 p-2">
          <WashingMachine />
          <p>Limpeza leve</p>
        </div>
        <div className="flex gap-1 rounded-md bg-azul bg-opacity-50 justify-center items-center h-16 p-2">
          <ShoppingBag />
          <p>Compras de alimentos</p>
        </div>
        <div className="flex gap-1 rounded-md bg-azul bg-opacity-50 justify-center items-center text-center h-16 p-2">
          <PawPrint />
          <p>Cuidados com animais de <br /> estimação</p>
        </div>
      </div>
      {/* Download */}
      <div>
        <div className="flex justify-center pb-10">
          <img src="./18.png" alt="Download" />
        </div>
        <div className="px-14">
          <h2 className="text-5xl pb-3">Como funciona?</h2>
          <p className="text-3xl pb-10">
            Nossa plataforma facilita a busca por cuidadores autônomos de
            confiança, o gerenciamento de seus cuidados e o acesso a suporte
            dedicado quando você precisar.
          </p>
        </div>

        <div className="grid grid-cols-2 px-20 pb-10 gap-5">
          <div className="justify-center p-4 bg-azul bg-opacity-50 rounded-xl">
            <div className="flex gap-2 justify-center items-center text-3xl">
              <Headset className="size-8" />
              <h3>Selecione seu cuidador</h3>
            </div>
            <p className="text-lg text-justify">
              Selecionar um cuidador de idosos é uma tarefa delicada que envolve
              o bem-estar dos nossos entes queridos. É essencial considerar a
              experiência e a compatibilidade emocional do cuidador. Com a
              CarePlus, você conta com orientação especializada para fazer a
              melhor escolha, garantindo segurança e tranquilidade para sua
              família.
            </p>
          </div>
          <div className="justify-center p-4 bg-azul bg-opacity-50 rounded-xl">
            <div className="flex gap-2 justify-center items-center text-3xl">
              <CalendarCheck2 className="size-8" />
              <h3>Prepare-se para o atendimento</h3>
            </div>
            <p className="text-lg text-justify">
              Preparar-se para o atendimento é essencial para uma experiência
              positiva. Organize informações sobre a rotina e necessidades do
              idoso, criando um ambiente acolhedor. Uma comunicação clara e
              aberta com o cuidador fortalece a relação e contribui para um
              atendimento mais eficaz.
            </p>
          </div>
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Cuidados;
