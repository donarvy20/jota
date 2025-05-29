
import React from 'react';
import Card from '../ui/Card';
import { AdjustmentsHorizontalIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const GestionCurricularContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="2. Respecto de la Gestión Curricular" icon={<AdjustmentsHorizontalIcon className={iconClass}/>}>
        <p>Esta sección aborda los aspectos clave de la gestión curricular para los Programas de Segunda Especialidad (PSE), asegurando que estén alineados con las necesidades de los docentes y los estándares de calidad educativa.</p>
        <p className="mt-3 font-semibold text-sky-600">Navegue a las subsecciones para más detalles:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
            <li>2.1 Perfil de Egreso del PSE</li>
            <li>2.2 Modalidades del Servicio Educativo en PSE</li>
            <li>2.3 Plan de Estudios y Componentes Curriculares del PSE</li>
            <li>2.4 Evaluación de los Aprendizajes</li>
        </ul>
      </Card>
      
      <Card title="Enfoque de la Gestión Curricular" icon={<PuzzlePieceIcon className={iconClass}/>}>
        <p>La gestión curricular en los PSE se centra en:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-2">
          <li><strong>Desarrollo de Competencias Específicas:</strong> Orientar al egresado a ser un experto en su campo.</li>
          <li><strong>Flexibilidad y Pertinencia:</strong> Adaptar los programas a las demandas actuales y futuras.</li>
          <li><strong>Calidad Educativa:</strong> Asegurar que los planes de estudio y metodologías promuevan un aprendizaje significativo y de alto nivel.</li>
          <li><strong>Evaluación Formativa:</strong> Implementar sistemas de evaluación que guíen el proceso de aprendizaje y la mejora continua.</li>
        </ul>
      </Card>
    </div>
  );
};

export default GestionCurricularContent;
