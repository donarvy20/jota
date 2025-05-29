
import React from 'react';
import Card from '../ui/Card';
import { BeakerIcon, CheckCircleIcon, DocumentArrowUpIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const TituloProfesionalContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="1.3 Obtención y Registro del Título de Segunda Especialidad Profesional" icon={<BeakerIcon className={iconClass}/>}>
        <p>El Título de Segunda Especialidad Profesional (con mención en un campo específico) es otorgado y emitido por la EESP siempre que se cumpla con los siguientes requisitos:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>Haber aprobado el <strong>100% de los créditos</strong> del plan de estudios del PSE.</li>
          <li>Haber aprobado la sustentación de una <strong>tesis o trabajo académico</strong>.</li>
        </ul>
        <p className="mt-1">Ambos requisitos se sustentan con documentos.</p>
        <p className="mt-2">El título solo puede obtenerse en la EESP donde se culminaron los estudios del PSE, salvo que esta haya dejado de funcionar. En ese caso, la DRE determinará la EESP que atenderá la titulación.</p>
      </Card>

      <Card title="Requisitos en el Reglamento Interno (RI) de la EESP" icon={<CheckCircleIcon className={iconClass}/>}>
        <p>La EESP debe establecer en su RI:</p>
        <ul className="list-decimal list-inside ml-4 text-slate-600 space-y-2">
          <li>
            <strong>Asignación, estructura y exigencias de la(s) modalidad(es) de titulación:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Trabajo académico y/o</li>
              <li>Tesis.</li>
            </ul>
            Conducente al título de segunda especialidad profesional en un campo específico.
          </li>
          <li>
            <strong>Protocolos de presentación del documento</strong> de la modalidad de titulación elegida o asignada.
          </li>
          <li>
            <strong>Protocolo del procedimiento para la sustentación</strong> en la modalidad de titulación, conducente a la obtención del título. Debe considerar un jurado idóneo y la emisión del acta con los resultados de la evaluación.
          </li>
        </ul>
      </Card>

      <Card title="Inscripción del Título en Sunedu" icon={<DocumentArrowUpIcon className={iconClass}/>}>
        <p>La EESP realiza el proceso de inscripción del título en Sunedu, conforme al Reglamento del Registro Nacional de Grados y Títulos (Resolución N°009-2015-SUNEDU/CD) y al modelo único nacional del MINEDU (Norma Técnica de Lineamientos Académicos Generales, RM N° 441-2019-MINEDU).</p>
        <p className="mt-2">Se recomienda que la EESP establezca en su RI:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>Una ruta para la admisión de expedientes de registro de títulos.</li>
          <li>Plazos institucionales (desde admisión del expediente hasta remisión a Sunedu, y desde recepción del título inscrito hasta entrega al administrado).</li>
          <li>Servicios administrativos de titulación (competencia de Secretaría Académica, con capacidad de informar sobre el estado del registro).</li>
        </ul>
      </Card>

      <Card title="Situaciones de Ex Estudiantes o Egresados" icon={<BriefcaseIcon className={iconClass}/>}>
        <p>Se recomienda incluir en el RI aspectos para abordar situaciones que afecten la titulación:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-2">
          <li>
            <strong>Ex estudiantes que no culminaron el plan de estudios:</strong> La EESP puede establecer condiciones y/o plazos en su RI para que realicen procesos de convalidación en un nuevo PSE vinculado al mismo programa.
          </li>
          <li>
            <strong>Egresados que no sustentaron/aprobaron tesis o trabajo académico en plazo perentorio:</strong> Se sugiere a la EESP establecer un periodo perentorio (contado desde la aprobación total de créditos del PSE) para presentar, sustentar y aprobar el proyecto. Se debe considerar la vigencia del PSE y del tema del proyecto.
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default TituloProfesionalContent;
