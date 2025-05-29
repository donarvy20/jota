
import React from 'react';
import Card from '../ui/Card';
import { BookOpenIcon, UsersIcon, AcademicCapIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const IntroduccionContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="ANEXO: Orientaciones para la Implementación de Programas de Segunda Especialidad (PSE) en EESP" icon={<BookOpenIcon className={iconClass} />}>
        <p>Las Escuelas de Educación Superior Pedagógica (EESP) están facultadas por la Ley N° 30512 para desarrollar Programas de Segunda Especialidad (PSE). Estos programas se enmarcan en estudios previamente licenciados, son altamente especializados y se clasifican en el nivel de posgrado.</p>
      </Card>

      <Card title="Finalidad de los PSE" icon={<LightBulbIcon className={iconClass} />}>
        <p>Los PSE tienen como objetivo:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>Profundizar y/o ampliar las competencias profesionales de los docentes en servicio.</li>
          <li>Permitir un desenvolvimiento con mayor solvencia en su campo de especialidad.</li>
          <li>Contribuir a elevar la calidad educativa.</li>
        </ul>
      </Card>

      <Card title="Dirigido a" icon={<UsersIcon className={iconClass} />}>
        <p>Docentes graduados y titulados en:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>EESP.</li>
          <li>Universidades.</li>
          <li>Instituciones de educación superior del extranjero (con previo reconocimiento del título en Perú por Sunedu).</li>
        </ul>
      </Card>

      <Card title="Requisitos para la Titulación en PSE" icon={<AcademicCapIcon className={iconClass} />}>
        <p>La propuesta formativa de los PSE conduce al otorgamiento del título de segunda especialidad profesional (con mención en un campo específico). Para ello se requiere:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>Haber aprobado todos los cursos y/o módulos del plan de estudios del PSE.</li>
          <li>Haber sustentado y aprobado una tesis o un trabajo académico.</li>
        </ul>
        <p className="mt-2">Las propuestas formativas de los PSE son formuladas por las EESP y deben responder a políticas educativas, intereses y necesidades del Sector Educación, y demandas regionales/nacionales, alineadas con los avances científicos, tecnológicos, artísticos y culturales.</p>
        <p className="mt-2">El MINEDU brinda estas orientaciones para implementar el servicio educativo de las EESP con calidad, eficiencia, eficacia y pertinencia.</p>
      </Card>
    </div>
  );
};

export default IntroduccionContent;
