
import React from 'react';
import Card from '../ui/Card';
import { DocumentChartBarIcon, CheckBadgeIcon, ChatBubbleLeftRightIcon, PencilIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const EvaluacionAprendizajesContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="2.4 Evaluación de los Aprendizajes" icon={<DocumentChartBarIcon className={iconClass}/>}>
        <p>La evaluación de los aprendizajes de los estudiantes del PSE se realiza bajo el <strong>enfoque de evaluación formativa</strong>.</p>
        <p className="mt-2">Este enfoque prioriza:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>La identificación y valoración de los niveles de desempeño del estudiante respecto a las competencias profesionales esperadas al finalizar el programa.</li>
          <li>La <strong>autorregulación de los aprendizajes</strong>.</li>
          <li>La <strong>retroalimentación oportuna</strong>.</li>
        </ul>
        <p className="mt-2">Ambos (autorregulación y retroalimentación) son el centro de la evaluación formativa y se orientan a la mejora continua.</p>
      </Card>

      <Card title="Características de la Evaluación" icon={<CheckBadgeIcon className={iconClass}/>}>
        <ul className="list-none space-y-3">
          <li className="p-3 border-l-4 border-sky-500 bg-sky-50 rounded-r-md">
            <h4 className="font-semibold text-sky-700">Cualitativa y Descriptiva</h4>
            <p className="text-sm text-slate-600">Basada en la valoración de las evidencias de aprendizaje.</p>
          </li>
          <li className="p-3 border-l-4 border-teal-500 bg-teal-50 rounded-r-md">
            <h4 className="font-semibold text-teal-700">Uso de Criterios y Desempeños Específicos</h4>
            <p className="text-sm text-slate-600">Consignados en los sílabos de cada curso/módulo.</p>
          </li>
          <li className="p-3 border-l-4 border-indigo-500 bg-indigo-50 rounded-r-md">
            <h4 className="font-semibold text-indigo-700">Consenso Docente</h4>
            <p className="text-sm text-slate-600">Los criterios se establecen de manera consensuada a través del trabajo colegiado del equipo de docentes formadores del PSE durante el año académico.</p>
          </li>
        </ul>
      </Card>

      <Card title="Resultados de la Evaluación" icon={<PencilIcon className={iconClass}/>}>
        <p>Los resultados de la evaluación se entregan a los estudiantes como:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li><strong>Conclusiones descriptivas.</strong></li>
          <li>Su equivalencia en <strong>valores cuantitativos</strong>, usando la escala vigesimal conforme a la calificación para el sistema de educación superior.</li>
        </ul>
        <p className="mt-2">En correspondencia al nivel académico de los PSE, se requiere obtener el nivel logrado para aprobar los cursos/módulos del Plan de estudios.</p>
      </Card>
    </div>
  );
};

export default EvaluacionAprendizajesContent;
