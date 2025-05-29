
import React from 'react';
import Card from '../ui/Card';
import { DocumentTextIcon, ArrowUpTrayIcon, TvIcon } from '@heroicons/react/24/outline';

const iconClass = "h-8 w-8 text-sky-600 inline-block mr-2";

const RegistroReporteContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card title="4. Respecto del Registro y Reporte de la Información" icon={<DocumentTextIcon className={iconClass}/>}>
        <p>Se recomienda que la <strong>Unidad de Formación Continua</strong>, como instancia responsable del Programa de Perfeccionamiento Docente (PPD), se encargue de:</p>
        <ul className="list-disc list-inside ml-4 text-slate-600 space-y-2 mt-3">
          <li>
            <TvIcon className="h-5 w-5 inline mr-1 text-teal-600"/>
            Brindar las condiciones técnicas y monitorear a los docentes formadores para el registro de la información respecto del curso/módulo desarrollado bajo su conducción. Esta información es solicitada por la EESP en el plazo señalado dentro del ciclo académico.
          </li>
          <li>
            <ArrowUpTrayIcon className="h-5 w-5 inline mr-1 text-indigo-600"/>
            Registrar la información que genere la gestión académica y curricular del PSE respecto a la matrícula y calificaciones de los estudiantes, conforme los formatos y plazos fijados por el MINEDU.
          </li>
        </ul>
      </Card>

      <Card title="Reporte para Inscripción de Títulos" icon={<ArrowUpTrayIcon className={iconClass}/>}>
        <p>Las EESP que hayan culminado o se encuentren desarrollando PSE a la notificación de estas Orientaciones, deberán presentar el <strong>reporte de información de la gestión académica</strong> correspondiente al MINEDU.</p>
        <p className="mt-2">Este reporte debe realizarse de acuerdo a los formatos y plazos establecidos, para poder iniciar en la SUNEDU el trámite de la inscripción del título de Segunda Especialidad Profesional en el Registro Nacional de Grados y Títulos, de los egresados aptos, y conforme la regulación correspondiente.</p>
      </Card>
    </div>
  );
};

export default RegistroReporteContent;
