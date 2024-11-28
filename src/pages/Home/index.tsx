import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import {
  Clock8,
  CalendarCheck,
  Users,
  Headset,
  ClipboardCheck,
  CircleCheck,
} from "lucide-react";
import "./styles.css";

function Home() {
  return (
    <div>
      {/* Header component */}
      <Header />
      {/* Slider component */}
      <div className="flex justify-center pb-10">
        <Slider />
      </div>
      {/* Beneficios */}
      <div className="flex justify-center bg-gray-50 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <Clock8 className="size-5 mb-2" />
            <h3 className="text-lg font-semibold">
              Tranquilidade 24 horas por dia, 7 dias por semana
            </h3>
            <p className="text-sm text-gray-600">
              Suporte individual de um cuidador de confiança.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <CalendarCheck className="size-5 mb-2" />
            <h3 className="text-lg font-semibold">Mantenha sua rotina</h3>
            <p className="text-sm text-gray-600">
              O cuidado é moldado em torno do estilo de vida deles.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <Users className="size-5 mb-2" />
            <h3 className="text-lg font-semibold">Escolha seu cuidador</h3>
            <p className="text-sm text-gray-600">
              Escolha o seu favorito entre as correspondências personalizadas.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <Headset className="size-5 mb-2" />
            <h3 className="text-lg font-semibold">Especialistas disponíveis</h3>
            <p className="text-sm text-gray-600">
              Equipes de suporte disponíveis 7 dias por semana.
            </p>
          </div>
        </div>
      </div>
      {/* Info cuidadores */}
      <div className="pb-10">
        <h2 className="px-4 text-2xl font-semibold">
          Serviços e cuidados para idosos
        </h2>
        <div className="grid grid-cols-4 mx-2 font-cairo">
          <div>
            <p className="font-cairo">
              Todos os cuidadores aprovados por idosos:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ClipboardCheck className="text-teal-400" />
            <p>Forneça 2+ refêrencias verificadas</p>
          </div>
          <div className="flex items-center ">
            <CalendarCheck className="text-teal-400" />
            <p>Ter no mínimo 6 meses de experiência</p>
          </div>
          <div className="flex items-center justify-center">
            <CircleCheck className="text-teal-400" />
            <p>Tenha um DBS/PVG limpo e aprimorado</p>
          </div>
        </div>
      </div>

      {/* Serviços */}
      <div className="flex justify-center pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="bg-green-50 rounded-2xl shadow-md flex flex-col">
            <img src="./servico1.png" alt="serviço 1" className="rounded-2xl" />
            <h2 className="pl-4 pt-4 text-2xl font-semibold">
              Cuidados ao Domicílio
            </h2>
            <p className="text-xs pl-4 pb-4">Suporte 24 horas em sua casa</p>
            <p className=" text-base pl-4 pr-4">
              Um cuidador se muda para sua casa para fornecer cuidados
              personalizados. Ele se adaptará à sua rotina e estilo de vida, e
              apoiará sua independência.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl shadow-md flex flex-col">
            <img src="./servico2.png" alt="serviço 1" className="rounded-2xl" />
            <h2 className="pl-4 pt-4 text-2xl font-semibold">
              Cuidados de Curto Prazo
            </h2>
            <p className="text-xs pl-4 pb-4">
              Suporte 24 horas, por apenas 3 dias por vez
            </p>
            <p className=" text-base pl-4 pb-4 pr-4">
              Um cuidador se muda para sua casa por alguns dias ou semanas,
              oferecendo cuidados paliativos personalizados enquanto seu
              cuidador principal estiver ausente ou após alta hospitalar ou
              emergência.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl shadow-md flex flex-col">
            <img src="./servico3.png" alt="serviço 1" className="rounded-2xl" />
            <h2 className="pl-4 pt-4 text-2xl font-semibold">
              Visitas de cuidados
            </h2>
            <p className="text-xs pl-4">
              Um cuidador fará uma visita por algumas horas nos dias escolhidos,
              em um horário pré-acordado.
            </p>
            <p className=" text-base p-4">
              De visitas domiciliares ocasionais a visitas semanais regulares,
              nossa plataforma online é tudo o que você precisa para encontrar
              um cuidador adequado e criar uma programação que se adapte
              perfeitamente à sua vida.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
