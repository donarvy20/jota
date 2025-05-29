
import React from 'react';
import Card from '../ui/Card';
import { BuildingOffice2Icon, UserGroupIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const OrganizacionInstitucionalContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="6. Respecto a la Organización Institucional" icon={<BuildingOffice2Icon className={iconClass}/>}>
        <p>El desarrollo de los Programas de Segunda Especialidad (PSE) en la EESP pública involucra, como mínimo, la participación articulada de los siguientes actores:</p>
        <div className="mt-4 p-4 bg-sky-50 border border-sky-200 rounded-lg">
          <h3 className="font-semibold text-sky-700 mb-2 flex items-center"><UserGroupIcon className="h-6 w-6 mr-2"/>Actores Clave:</h3>
          <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
            <li>El (la) Director(a) General.</li>
            <li>El Jefe de la Unidad de Formación Continua.</li>
            <li>El Secretario Académico.</li>
            <li>El docente designado como responsable del PSE.</li>
            <li>Los docentes formadores del PSE.</li>
            <li>Personal administrativo y/o soporte técnico.</li>
          </ul>
        </div>
        <p className="mt-4 text-sm italic text-slate-500">
          <strong>Importante:</strong> Las EESP desarrollan los PSE sin perjudicar el normal funcionamiento de los programas de estudios licenciados, ni los demás servicios brindados.
        </p>
      </Card>
    </div>
  );
};

export default OrganizacionInstitucionalContent;
