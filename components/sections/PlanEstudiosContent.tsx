
import React from 'react';
import Card from '../ui/Card';
import { ListBulletIcon, CogIcon, BookOpenIcon, AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const PlanEstudiosContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="2.3 Plan de Estudios y Componentes Curriculares del PSE" icon={<ListBulletIcon className={iconClass}/>}>
        <p>El plan de estudios del PSE es elaborado por la EESP considerando un <strong>mínimo de 40 créditos</strong> de acuerdo a la normativa.</p>
        <p className="mt-2">Para asegurar el desarrollo de capacidades en alto nivel de profundización y pericia, se recomienda que el PSE se desarrolle en <strong>tres (3) ciclos académicos</strong>.</p>
        <div className="mt-3 p-3 bg-sky-50 border border-sky-200 rounded-md">
          <p className="flex items-center text-sm text-sky-700"><ClockIcon className="h-5 w-5 mr-2"/> <strong>Equivalencia de Créditos:</strong> 1 crédito académico = 16 horas de teoría Ó 32 horas de práctica.</p>
          <p className="text-sm text-slate-600 mt-1">La proporcionalidad de créditos por curso/módulo se da según la significancia de las competencias a desarrollar en el componente curricular correspondiente.</p>
        </div>
      </Card>

      <Card title="Componentes Curriculares Priorizados" icon={<CogIcon className={iconClass}/>}>
        <p>El plan de estudios del PSE prioriza dos (2) componentes curriculares:</p>
        <ul className="list-none space-y-3 mt-2">
          <li className="p-4 border border-emerald-300 rounded-lg bg-emerald-50">
            <h4 className="font-semibold text-emerald-700 flex items-center"><BookOpenIcon className="h-6 w-6 mr-2"/>1. Componente de Formación Específica</h4>
            <p className="text-sm text-slate-600">Agrupa cursos que permiten profundizar conocimientos de la especialidad ofertada. Estrechamente vinculado a la innovación de marcos pedagógicos actuales desde una visión inter y transdisciplinaria, basada en evidencia científica.</p>
          </li>
          <li className="p-4 border border-indigo-300 rounded-lg bg-indigo-50">
            <h4 className="font-semibold text-indigo-700 flex items-center"><AcademicCapIcon className="h-6 w-6 mr-2"/>2. Componente de Formación en la Práctica e Investigación</h4>
            <p className="text-sm text-slate-600">Constituye el espacio de integración de las competencias del plan de estudios. Articula la práctica pedagógica de la especialidad en formación y la elaboración de la tesis o trabajo académico con fines de titulación.</p>
          </li>
        </ul>
      </Card>

      <Card title="Detalles del Plan de Estudios" icon={<ListBulletIcon className={iconClass}/>}>
        <p>El plan de estudios del PSE debe precisar la relación de cursos/módulos por cada componente curricular, y establecer para cada curso o módulo:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>La carga horaria semanal.</li>
          <li>Los prerrequisitos.</li>
          <li>La modalidad en la que se impartirá.</li>
        </ul>
      </Card>
    </div>
  );
};

export default PlanEstudiosContent;
