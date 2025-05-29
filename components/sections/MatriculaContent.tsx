
import React from 'react';
import Card from '../ui/Card';
import { ClipboardDocumentCheckIcon, UserPlusIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const MatriculaContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="1.2 Proceso de Matrícula" icon={<ClipboardDocumentCheckIcon className={iconClass}/>}>
        <p>La matrícula es responsabilidad del ingresante/estudiante al/del PSE.</p>
        <p>Los requisitos para este proceso se señalan en el Reglamento Interno (RI) de la EESP.</p>
      </Card>

      <Card title="Aptos para Matricularse" icon={<UserPlusIcon className={iconClass}/>}>
        <p>Se consideran aptos para matricularse:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-2">
          <li>
            <strong>Nuevos Ingresantes:</strong> Postulantes que aprobaron la etapa 2 (Evaluación del expediente) y la etapa 3 (Examen de admisión) del proceso de admisión del PSE.
          </li>
          <li>
            <strong>Estudiantes Continuantes:</strong> Estudiantes que acrediten haber aprobado como mínimo el <strong>75% de los créditos</strong> del ciclo anterior al de la matrícula.
          </li>
        </ul>
        <p className="mt-3">La EESP reporta al MINEDU la matrícula al PSE en el plazo y formatos establecidos, concordantes con la documentación remitida a la DRE.</p>
      </Card>
    </div>
  );
};

export default MatriculaContent;
