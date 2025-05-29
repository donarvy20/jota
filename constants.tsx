
import React from 'react';
import { Section, SectionId } from './types';
import { AcademicCapIcon, AdjustmentsHorizontalIcon, ArrowRightOnRectangleIcon, BeakerIcon, BookOpenIcon, BuildingOffice2Icon, ClipboardDocumentCheckIcon, ClipboardDocumentListIcon, DocumentChartBarIcon, DocumentMagnifyingGlassIcon, DocumentTextIcon, ListBulletIcon, PresentationChartLineIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline';

const iconClass = "h-5 w-5 mr-3 inline-block";

export const SECTIONS: Section[] = [
  { id: SectionId.INTRODUCCION, title: 'Introducción', icon: <BookOpenIcon className={iconClass} />, level: 0 },
  { id: SectionId.REGIMEN_ACADEMICO, title: '1. Régimen Académico', icon: <AcademicCapIcon className={iconClass} />, level: 0 },
  { id: SectionId.ACCESO_PSE, title: '1.1 Acceso a los PSE', icon: <ArrowRightOnRectangleIcon className={iconClass} />, level: 1, parentId: SectionId.REGIMEN_ACADEMICO },
  { id: SectionId.MATRICULA, title: '1.2 Proceso de Matrícula', icon: <ClipboardDocumentCheckIcon className={iconClass} />, level: 1, parentId: SectionId.REGIMEN_ACADEMICO },
  { id: SectionId.TITULO_PROFESIONAL, title: '1.3 Título Profesional', icon: <BeakerIcon className={iconClass} />, level: 1, parentId: SectionId.REGIMEN_ACADEMICO },
  { id: SectionId.GESTION_CURRICULAR, title: '2. Gestión Curricular', icon: <AdjustmentsHorizontalIcon className={iconClass} />, level: 0 },
  { id: SectionId.PERFIL_EGRESO, title: '2.1 Perfil de Egreso', icon: <UsersIcon className={iconClass} />, level: 1, parentId: SectionId.GESTION_CURRICULAR },
  { id: SectionId.MODALIDADES_SERVICIO, title: '2.2 Modalidades del Servicio', icon: <PresentationChartLineIcon className={iconClass} />, level: 1, parentId: SectionId.GESTION_CURRICULAR },
  { id: SectionId.PLAN_ESTUDIOS, title: '2.3 Plan de Estudios', icon: <ListBulletIcon className={iconClass} />, level: 1, parentId: SectionId.GESTION_CURRICULAR },
  { id: SectionId.EVALUACION_APRENDIZAJES, title: '2.4 Evaluación de Aprendizajes', icon: <DocumentChartBarIcon className={iconClass} />, level: 1, parentId: SectionId.GESTION_CURRICULAR },
  { id: SectionId.PLAN_EJECUCION, title: '3. Plan de Ejecución', icon: <ClipboardDocumentListIcon className={iconClass} />, level: 0 },
  { id: SectionId.REGISTRO_REPORTE, title: '4. Registro y Reporte', icon: <DocumentTextIcon className={iconClass} />, level: 0 },
  { id: SectionId.SUPERVISION_FISCALIZACION, title: '5. Supervisión y Fiscalización', icon: <DocumentMagnifyingGlassIcon className={iconClass} />, level: 0 },
  { id: SectionId.ORGANIZACION_INSTITUCIONAL, title: '6. Organización Institucional', icon: <BuildingOffice2Icon className={iconClass} />, level: 0 },
];
