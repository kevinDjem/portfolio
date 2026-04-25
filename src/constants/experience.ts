import type { Experience } from "../types/experience";

export const experience: Experience[] = [
  {
    title: 'Frontend Developer',
    company: 'Tsoft',
    modality: 'Híbrido',
    period: '06 / 2024 - 06 / 2025',
    exp: [
      'Desarrollo de aplicaciones en React con arquitectura basada en MicroFrontends.',
      'Mantenimiento y corrección de errores en aplicaciones productivas.',
      'Análisis de incidencias y mejoras de estabilidad en sistemas existentes.',
      'Integración con APIs REST y testing básico utilizando Jest.'
    ],
    technologies: ['React', 'TypeScript', '.NET', 'SQL Server', 'Jest', 'Git'],
  },
  {
    title: 'Fullstack Developer / Application Support',
    company: 'Edenred',
    modality: 'Híbrido',
    period: '09 / 2019 - 06 / 2024',
    exp: [
      'Resolución de incidencias en producción mediante debugging y aplicación de parches sobre código existente.',
      'Diagnóstico de errores en frontend (React) y backend (.NET).',
      'Desarrollo fullstack con React y .NET en aplicaciones productivas.',
      'Optimización de consultas SQL mejorando performance.',
      'Automatización de procesos reduciendo bugs recurrentes.',
      'Integración de APIs REST y comunicación entre servicios.',
      'Participación en despliegues y mantenimiento en entornos productivos.'
    ],
    technologies: ['React', 'TypeScript', '.NET', 'SQL Server', 'REST APIs', 'Git', 'Docker', 'Azure'],
  },
  {
    title: 'Technical Support Analyst / ERP Implementer',
    company: 'Biogreen',
    modality: 'Presencial',
    period: '01 / 2018 - 08 / 2019',
    exp: [
      'Implementación y soporte del ERP Softland.',
      'Atención a usuarios y resolución de incidencias funcionales y técnicas.',
      'Creación de consultas SQL para análisis y automatización de tareas.'
    ],
    technologies: ['SQL', 'ERP Softland', 'Soporte Técnico'],
  }
];