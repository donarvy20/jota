
import React, { useState } from 'react';
import Card from '../ui/Card';
import { ClipboardDocumentListIcon, InformationCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-300 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-slate-100 hover:bg-slate-200 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
      >
        <h3 className="font-semibold text-sky-700">{title}</h3>
        {isOpen ? <ChevronUpIcon className="h-5 w-5 text-sky-600" /> : <ChevronDownIcon className="h-5 w-5 text-sky-600" />}
      </button>
      {isOpen && (
        <div id={`content-${id}`} className="p-4 bg-white text-sm text-slate-600 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};


const PlanEjecucionContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="3. Respecto del Plan de Ejecución" icon={<ClipboardDocumentListIcon className={iconClass}/>}>
        <p>Se recomienda que la EESP cuente con toda la información de la propuesta formativa del PSE previo a su desarrollo. Por ello, se sugiere que elabore el <strong>Plan de Ejecución</strong> respectivo y lo socialice con las instancias educativas de las que depende.</p>
        <p className="mt-2">Es recomendable que la EESP incorpore en el expediente de gestión de aprobación o comunicación de metas a la DRE el Plan de Ejecución del PSE, conteniendo toda la información que la DRE requiera para la ejecución integral de las acciones de acompañamiento y supervisión.</p>
        <p className="mt-2">Asimismo, el Plan de Ejecución del PSE debe estar articulado con el Plan Curricular Institucional (PCI) y el Plan Anual de Trabajo (PAT) de la EESP.</p>
      </Card>

      <Card title="Contenido del Plan de Ejecución" icon={<InformationCircleIcon className={iconClass}/>}>
        <p>El Plan de Ejecución contiene información básica y fundamental del PSE. Se recomienda que contenga, entre otros, los siguientes aspectos:</p>
        
        <div className="mt-4">
          <AccordionItem title="a) Datos Generales" id="datos-generales">
            <ul className="list-disc list-inside ml-4">
              <li>Nombre, dirección, teléfono y correo electrónico institucional de la EESP.</li>
              <li>Nombre, teléfono y correo electrónico del director general y del responsable del PSE.</li>
              <li>Denominación del PSE.</li>
              <li>Nombre del programa de estudios licenciado al que está asociado.</li>
              <li>Número de vacantes y aulas.</li>
              <li>Modalidad en que se ofrece.</li>
              <li>Periodo de ejecución (fecha de inicio y fecha de término).</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="b) Justificación" id="justificacion">
             <ul className="list-disc list-inside ml-4">
              <li>Descripción de las necesidades formativas en el campo laboral profesional del PSE.</li>
              <li>Oferta formativa local o regional respectiva.</li>
              <li>Información y análisis estadístico de la población objetivo del PSE.</li>
              <li>Capacidad operativa de la EESP (física, recursos, etc.) para cumplir con el plan de estudios y el número de vacantes propuesto.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="c) Gestión Académica" id="gestion-academica">
            <p><strong>i) Proceso de admisión:</strong></p>
            <ul className="list-disc list-inside ml-6 mb-2">
              <li>Requisitos, cronograma, nombre y descripción de sus etapas.</li>
              <li>Tabla de especificaciones del instrumento a aplicar en evaluación de expedientes y examen de admisión.</li>
              <li>Puntaje mínimo para acceder al PSE.</li>
            </ul>
            <p><strong>ii) Procedimiento de obtención del título de segunda especialidad profesional:</strong></p>
            <ul className="list-disc list-inside ml-6">
              <li>Requisitos para la obtención del título.</li>
              <li>Estructura del trabajo académico/tesis.</li>
              <li>Acto de sustentación y conformación del jurado calificador.</li>
              <li>Procesos, responsabilidades y plazos para la inscripción del título en el RNGYT de la SUNEDU.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="d) Gestión Curricular" id="gestion-curricular-plan">
            <ul className="list-disc list-inside ml-4">
              <li>Perfil de egreso.</li>
              <li>Enfoques del PSE.</li>
              <li>Organización académica.</li>
              <li>Propuesta curricular (malla curricular, distribución de horas y créditos, plan de estudios, descripción de cursos/módulos y sílabos).</li>
              <li>Orientaciones con respecto a la investigación.</li>
              <li>Evaluación de los aprendizajes.</li>
            </ul>
          </AccordionItem>
          
          <AccordionItem title="e) Organigrama Nominal y Funcional" id="organigrama">
            <p>De la organización institucional en torno al PSE (directivos, docentes y administrativos).</p>
          </AccordionItem>
        </div>
      </Card>
    </div>
  );
};

export default PlanEjecucionContent;
