
import React from 'react';

export enum SectionId {
  INTRODUCCION = 'introduccion',
  REGIMEN_ACADEMICO = 'regimen-academico',
  ACCESO_PSE = 'acceso-pse',
  MATRICULA = 'matricula',
  TITULO_PROFESIONAL = 'titulo-profesional',
  GESTION_CURRICULAR = 'gestion-curricular',
  PERFIL_EGRESO = 'perfil-egreso',
  MODALIDADES_SERVICIO = 'modalidades-servicio',
  PLAN_ESTUDIOS = 'plan-estudios',
  EVALUACION_APRENDIZAJES = 'evaluacion-aprendizajes',
  PLAN_EJECUCION = 'plan-ejecucion',
  REGISTRO_REPORTE = 'registro-reporte',
  SUPERVISION_FISCALIZACION = 'supervision-fiscalizacion',
  ORGANIZACION_INSTITUCIONAL = 'organizacion-institucional',
}

export interface Section {
  id: SectionId;
  title: string;
  icon: React.ReactNode;
  level: number; // 0 for main section, 1 for subsection
  parentId?: SectionId; // For subsections
}
