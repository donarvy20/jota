
import React from 'react';
import Card from '../ui/Card';
import { ArrowRightOnRectangleIcon, CheckBadgeIcon, DocumentMagnifyingGlassIcon, MegaphoneIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const AccesoPSEContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="1.1 Acceso a los Programas de Segunda Especialidad (PSE)" icon={<ArrowRightOnRectangleIcon className={iconClass}/>}>
        <p>Las EESP pueden realizar procesos de admisión al PSE si cumplen con las siguientes condiciones:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-2">
          <li><strong>EESP Pública:</strong> Deben contar con la aprobación de las metas de cada PSE por parte de la Dirección Regional de Educación (DRE).</li>
          <li><strong>EESP Privada:</strong> Deben comunicar sus metas a la DRE.</li>
        </ul>
      </Card>

      <Card title="Proceso de Admisión Sugerido" icon={<CheckBadgeIcon className={iconClass}/>}>
        <p>Se sugiere que la EESP organice el proceso de admisión (similar a la admisión en FID) a través de una <strong>comisión técnica</strong> aprobada por el Consejo Asesor (o similar). Esta comisión atenderá los aspectos pedagógicos y administrativos de forma articulada.</p>
        <p className="mt-2">Se recomienda definir etapas y actividades para garantizar el cumplimiento de las acciones del proceso. Etapas recomendadas:</p>
        
        <div className="mt-4 space-y-3">
          <div className="p-4 border border-sky-200 rounded-lg bg-sky-50">
            <h3 className="font-semibold text-sky-700 flex items-center"><MegaphoneIcon className="h-6 w-6 mr-2"/>1. Convocatoria Pública</h3>
            <p className="text-sm text-slate-600">En cumplimiento de los principios de mérito, transparencia y equidad. La EESP debe comunicar su proceso de admisión a PSE mediante una convocatoria abierta y transparente, según el cronograma de su Plan de Ejecución (PAT). Deben estar bien establecidos:</p>
            <ul className="list-disc list-inside ml-6 text-sm text-slate-500 space-y-1">
              <li>Requisitos de acceso.</li>
              <li>Organización del plan de estudios.</li>
              <li>Título a obtener.</li>
              <li>Plana docente, entre otros.</li>
            </ul>
            <p className="text-sm text-slate-600 mt-1">Se deben emplear diferentes medios y estrategias de difusión.</p>
          </div>

          <div className="p-4 border border-sky-200 rounded-lg bg-sky-50">
            <h3 className="font-semibold text-sky-700 flex items-center"><DocumentMagnifyingGlassIcon className="h-6 w-6 mr-2"/>2. Evaluación del Expediente del Postulante</h3>
            <p className="text-sm text-slate-600">La EESP verifica el cumplimiento del requisito del postulante de contar con:</p>
            <ul className="list-disc list-inside ml-6 text-sm text-slate-500 space-y-1">
              <li>Grado académico de Bachiller en Educación.</li>
              <li>Licenciatura en un programa de estudios o carrera profesional específica de la Formación Inicial Docente, vinculado con la especialidad del PSE ofrecido.</li>
            </ul>
            <p className="text-sm text-slate-600 mt-1">Los resultados de esta etapa deben ser comunicados oportunamente. <strong>Esta etapa tendría carácter eliminatorio.</strong></p>
          </div>

          <div className="p-4 border border-sky-200 rounded-lg bg-sky-50">
            <h3 className="font-semibold text-sky-700 flex items-center"><PencilSquareIcon className="h-6 w-6 mr-2"/>3. Examen de Admisión</h3>
            <p className="text-sm text-slate-600">Evaluar las competencias básicas del postulante en los siguientes aspectos:</p>
            <ul className="list-disc list-inside ml-6 text-sm text-slate-500 space-y-1">
              <li><strong>Comunicación escrita y oral.</strong></li>
              <li><strong>Campo de la especialidad:</strong> Demostración de nivel de solvencia disciplinar en la especialidad del PSE.</li>
              <li><strong>Propuesta de investigación:</strong> Medición de expectativas investigativas respecto al campo específico del PSE (sondeo de antecedentes, objetivos, población, trascendencia, etc.).</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Post-Admisión" icon={<CheckBadgeIcon className={iconClass}/>}>
        <p>Culminado el proceso de admisión, corresponde que la EESP:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-1">
          <li>Publique los resultados en estricto orden de mérito (según puntaje y vacantes).</li>
          <li>Informe a la DRE sobre el desarrollo y resultados del proceso de admisión.</li>
        </ul>
        <p className="mt-2">La EESP puede establecer en su Reglamento Institucional (RI) requisitos y condiciones adicionales para el postulante al PSE, destinados a garantizar el perfil del ingresante, como nivel de dominio del idioma, siempre que no contravengan el marco normativo.</p>
      </Card>
    </div>
  );
};

export default AccesoPSEContent;
