import {
  Astro, Bootstrap, Docker, Express, Git, Github,
  JavaScript, Next, Node, Npm, Postman, React,
  Tailwind, TypeScript, VsCode, Yarn,
  Html, Css, Redux, ReactRouter, MaterialUI,
  Net, SQLServer
} from '../components/icons/tecnologies/index'

import type { Skills } from '../types/skills';

export const skills: Skills = {
  frontend: [
    { name: "React", icon: React },
    { name: "Next.js", icon: Next },
    { name: "Astro", icon: Astro },
    { name: "TypeScript", icon: TypeScript },
    { name: "JavaScript", icon: JavaScript },
    { name: "TailwindCSS", icon: Tailwind },
    { name: "Redux", icon: Redux },
    { name: "React Router", icon: ReactRouter },
    { name: "Material UI", icon: MaterialUI },
    { name: "HTML", icon: Html },
    { name: "CSS", icon: Css },
    { name: "Bootstrap", icon: Bootstrap },
  ],

  backend: [
    { name: ".NET", icon: Net },
    { name: "SQL Server", icon: SQLServer },
    { name: "Node.js", icon: Node },
    { name: "Express", icon: Express },
    { name: "REST APIs", icon: Net }, 
  ],

  tools: [
    { name: "Git", icon: Git },
    { name: "GitHub", icon: Github },
    { name: "Docker", icon: Docker },
    { name: "Postman", icon: Postman },
    { name: "VS Code", icon: VsCode },
    { name: "NPM", icon: Npm },
    { name: "Yarn", icon: Yarn },
  ]
};