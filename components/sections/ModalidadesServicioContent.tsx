
import React from 'react';
import Card from '../ui/Card';
import { PresentationChartLineIcon, ComputerDesktopIcon, UsersIcon as GroupIcon, WifiIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const ModalidadesServicioContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="2.2 Modalidades del Servicio Educativo en PSE" icon={<PresentationChartLineIcon className={iconClass}/>}>
        <p>Las EESP brindan PSE vinculados a los programas de estudios previamente licenciados. Por tanto, la modalidad del servicio educativo prestado mediante PSE será <strong>la misma que el programa de estudios licenciado</strong> al que se encuentra vinculado.</p>
        <p className="mt-2">Las modalidades pueden ser:</p>
      </Card>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="Modalidad Presencial" icon={<GroupIcon className="h-6 w-6 text-sky-500 inline-block mr-1"/>} className="border-sky-500 border-t-4">
          <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
            <li>Asistencia a cursos/módulos es presencial y obligatoria.</li>
            <li>Puede admitir uso de entornos virtuales de aprendizaje hasta en un <strong>30%</strong> del total de créditos del plan de estudios.</li>
            <li>Se caracteriza por la interacción directa en tiempo y espacio real entre estudiantes y docentes.</li>
            <li>Requiere condiciones adecuadas para el servicio educativo.</li>
          </ul>
        </Card>

        <Card title="Modalidad Semipresencial" icon={<ComputerDesktopIcon className="h-6 w-6 text-sky-500 inline-block mr-1"/>} className="border-teal-500 border-t-4">
          <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
            <li>Se desarrolla en un mínimo de <strong>30%</strong> y un máximo de <strong>50%</strong> del total de créditos del plan, a través de tecnologías de la información y comunicación (TIC).</li>
            <li>TICs deben estar debidamente estructuradas en espacios virtuales de aprendizaje organizados y monitoreados.</li>
            <li>Requiere soporte tutorial suficiente para atención de todos los estudiantes.</li>
            <li>Genera espacios de interacción entre estudiante y docente en tiempo y espacio real (física y virtual, sincrónica y asincrónica).</li>
          </ul>
        </Card>

        <Card title="Modalidad a Distancia" icon={<WifiIcon className="h-6 w-6 text-sky-500 inline-block mr-1"/>} className="border-indigo-500 border-t-4">
          <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
            <li>Se desarrolla empleando el <strong>100%</strong> de los créditos del plan de estudios con el uso de medios tecnológicos para el aprendizaje autónomo.</li>
            <li>La EESP garantiza espacios virtuales de aprendizaje donde se organizan recursos y actividades académicas.</li>
            <li>Se garantiza de forma suficiente el soporte tutorial y tecnológico a los estudiantes.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ModalidadesServicioContent;
