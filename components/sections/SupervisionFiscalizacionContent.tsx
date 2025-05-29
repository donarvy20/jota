
import React from 'react';
import Card from '../ui/Card';
import { DocumentMagnifyingGlassIcon, ShieldCheckIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const SupervisionFiscalizacionContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="5. Respecto de la Supervisión y Fiscalización" icon={<DocumentMagnifyingGlassIcon className={iconClass}/>}>
        <p>La Dirección Regional de Educación (DRE) y el MINEDU, en el marco de sus competencias, realizan acciones de supervisión y fiscalización a las EESP.</p>
        <p className="mt-2"><strong>Finalidad:</strong> Verificar el cumplimiento de las obligaciones supervisables, vinculadas a las actividades del proceso de admisión, diseño, régimen académico, entre otros, organizados en el Plan de Ejecución del PSE.</p>
      </Card>

      <Card title="Responsabilidades de las EESP" icon={<ShieldCheckIcon className={iconClass}/>}>
        <p>Las autoridades de las EESP son responsables de:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>Planificar, implementar e informar anualmente sobre la supervisión interna del PSE.</li>
        </ul>
        <p className="mt-2">Se recomienda incorporar estas regulaciones en su Reglamento Interno (RI), teniendo en cuenta indicadores de calidad del servicio educativo sobre:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1 mt-1">
          <li>Gestión curricular y académica.</li>
          <li>Investigación e innovación.</li>
          <li>Infraestructura, recursos para el aprendizaje y mantenimiento.</li>
          <li>Disponibilidad de docente responsable y especialistas formadores del PSE idóneos y suficientes.</li>
          <li>Previsión económica y financiera.</li>
        </ul>
        <p className="mt-2">Todo esto en el marco de la Ley N° 30512 (Ley de Institutos y Escuelas de Educación Superior y de la Carrera Pública de sus Docentes), su reglamento y demás normativa aplicable.</p>
      </Card>

      <Card title="Rol de la DRE" icon={<BuildingLibraryIcon className={iconClass}/>}>
        <p>La DRE es responsable de supervisar:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>El registro de los procesos académicos en la documentación interna de las EESP.</li>
          <li>El uso de los formatos técnico-pedagógicos establecidos por el MINEDU.</li>
        </ul>
      </Card>
    </div>
  );
};

export default SupervisionFiscalizacionContent;
