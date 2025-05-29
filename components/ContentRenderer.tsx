
import React from 'react';
import { SectionId } from '../types';
import IntroduccionContent from './sections/IntroduccionContent';
import RegimenAcademicoContent from './sections/RegimenAcademicoContent';
import AccesoPSEContent from './sections/AccesoPSEContent';
import MatriculaContent from './sections/MatriculaContent';
import TituloProfesionalContent from './sections/TituloProfesionalContent';
import GestionCurricularContent from './sections/GestionCurricularContent';
import PerfilEgresoContent from './sections/PerfilEgresoContent';
import ModalidadesServicioContent from './sections/ModalidadesServicioContent';
import PlanEstudiosContent from './sections/PlanEstudiosContent';
import EvaluacionAprendizajesContent from './sections/EvaluacionAprendizajesContent';
import PlanEjecucionContent from './sections/PlanEjecucionContent';
import RegistroReporteContent from './sections/RegistroReporteContent';
import SupervisionFiscalizacionContent from './sections/SupervisionFiscalizacionContent';
import OrganizacionInstitucionalContent from './sections/OrganizacionInstitucionalContent';

interface ContentRendererProps {
  currentSection: SectionId;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ currentSection }) => {
  switch (currentSection) {
    case SectionId.INTRODUCCION:
      return <IntroduccionContent />;
    case SectionId.REGIMEN_ACADEMICO:
      return <RegimenAcademicoContent />;
    case SectionId.ACCESO_PSE:
      return <AccesoPSEContent />;
    case SectionId.MATRICULA:
      return <MatriculaContent />;
    case SectionId.TITULO_PROFESIONAL:
      return <TituloProfesionalContent />;
    case SectionId.GESTION_CURRICULAR:
      return <GestionCurricularContent />;
    case SectionId.PERFIL_EGRESO:
      return <PerfilEgresoContent />;
    case SectionId.MODALIDADES_SERVICIO:
      return <ModalidadesServicioContent />;
    case SectionId.PLAN_ESTUDIOS:
      return <PlanEstudiosContent />;
    case SectionId.EVALUACION_APRENDIZAJES:
      return <EvaluacionAprendizajesContent />;
    case SectionId.PLAN_EJECUCION:
      return <PlanEjecucionContent />;
    case SectionId.REGISTRO_REPORTE:
      return <RegistroReporteContent />;
    case SectionId.SUPERVISION_FISCALIZACION:
      return <SupervisionFiscalizacionContent />;
    case SectionId.ORGANIZACION_INSTITUCIONAL:
      return <OrganizacionInstitucionalContent />;
    default:
      return <div className="text-center text-slate-500">Seleccione una sección del menú.</div>;
  }
};

export default ContentRenderer;
