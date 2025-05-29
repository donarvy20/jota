
import React from 'react';
import Card from '../ui/Card';
import { UsersIcon, StarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const PerfilEgresoContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="2.1 Perfil de Egreso del PSE" icon={<UsersIcon className={iconClass}/>}>
        <p>El egresado del PSE desarrolla competencias profesionales específicas orientadas a un campo de su especialidad, convirtiéndolo en <strong>experto</strong> en una línea de su programa de estudios o carrera profesional, factible de continuar profundizando.</p>
        <p className="mt-2">Su pericia le permite:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>Desarrollar con eficiencia el servicio de la docencia.</li>
          <li>Desempeñar funciones vinculadas a su segunda especialidad, requeridas en el ámbito público y privado.</li>
          <li>Ampliar sus opciones de empleabilidad.</li>
        </ul>
      </Card>

      <Card title="Definición del Perfil de Egreso por las EESP" icon={<StarIcon className={iconClass}/>}>
        <p>Se propone que las EESP definan el Perfil de Egreso de cada PSE que ofertan, considerando:</p>
        <ul className="list-decimal list-inside ml-4 text-slate-600 space-y-2">
          <li>
            La priorización de las competencias profesionales del <strong>Marco del Buen Desempeño Docente (MBDD)</strong>, aprobado por RM N° 0547-2012-ED.
          </li>
          <li>
            La Norma Técnica sobre <strong>estándares en progresión de competencias del MBDD</strong>, aprobada por RVM N° 005-2020-MINEDU.
          </li>
          <li>
            Los procesos de <strong>análisis y reflexión crítica</strong> de la comunidad educativa de la EESP.
          </li>
        </ul>
      </Card>

      <Card title="Consideraciones Específicas" icon={<GlobeAltIcon className={iconClass}/>}>
        <p>Conforme a la Norma Técnica precitada, es importante incluir en los PSE vinculados a <strong>Educación Intercultural Bilingüe</strong> las competencias asociadas a:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>La gestión de entornos digitales.</li>
          <li>Las competencias relacionadas con las lenguas originarias.</li>
        </ul>
      </Card>
    </div>
  );
};

export default PerfilEgresoContent;
