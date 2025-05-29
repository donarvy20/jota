
import React from 'react';
import Card from '../ui/Card';
import { AcademicCapIcon, BuildingLibraryIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const RegimenAcademicoContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="1. Respecto al Régimen Académico" icon={<AcademicCapIcon className={iconClass}/>}>
        <p>Dado que los PSE desarrollan estudios profesionales, se requiere que las EESP:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>Establezcan un plan de estudios específico.</li>
          <li>Regulen los procesos académicos inherentes a dichos estudios (matrícula, subsanación, retiro, certificación, obtención y registro del título, etc.).</li>
        </ul>
        <p className="mt-2">Para ello, las EESP se basan en los <strong>Lineamientos Académicos Generales (LAG)</strong> para Escuelas de Educación Superior Pedagógica (Públicas y Privadas), aprobados por Resolución Ministerial N° 441-2019-MINEDU.</p>
        <p className="mt-2">Las EESP también regulan en su <strong>Reglamento Interno (RI)</strong> las acciones y documentos técnicos normativos derivados de la gestión de procesos académicos en el marco del PSE.</p>
        <p className="mt-3 font-semibold text-sky-600">Navegue a las subsecciones para más detalles:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
            <li>1.1 Acceso a los PSE</li>
            <li>1.2 Proceso de Matrícula</li>
            <li>1.3 Obtención y Registro del Título Profesional</li>
        </ul>
      </Card>
      
      <Card title="Puntos Clave del Régimen Académico" icon={<DocumentTextIcon className={iconClass}/>}>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-2">
          <li><strong>Plan de Estudios Específico:</strong> Cada PSE debe contar con un plan detallado.</li>
          <li><strong>Procesos Académicos Regulados:</strong> Matrícula, evaluación, titulación, etc., deben estar normados.</li>
          <li><strong>Base Normativa:</strong> Lineamientos Académicos Generales (LAG) y Reglamento Interno (RI) de la EESP.</li>
        </ul>
      </Card>
    </div>
  );
};

export default RegimenAcademicoContent;
