import html from "../assets/icon/html.svg"
import css from "../assets/icon/css.svg"
import javascript from "../assets/icon/javascript.svg"
import php from "../assets/icon/php.svg"
import tailwind from "../assets/icon/tailwind.svg"
import reactjs from "../assets/icon/react.svg"
import nodejs from "../assets/icon/nodejs.svg"
import expressjs from "../assets/icon/expressjs.svg"
import symfony from "../assets/icon/symfony.svg"
import nextjs from "../assets/icon/nextjs.svg"
import figma from "../assets/icon/figma.svg"
import vscode from "../assets/icon/vscode.svg"
import git from "../assets/icon/git.svg"
import github from "../assets/icon/github.svg"
import gitlab from "../assets/icon/gitlab.svg"
import materialUi from "../assets/icon/materialui.svg"
import mongodb from "../assets/icon/mongodb.svg"
import mysql from "../assets/icon/mysql.svg"
import pusher from "../assets/icon/pusher.svg"
import xampp from "../assets/icon/xampp.svg"
import postman from "../assets/icon/postman.svg"
import bootstrap from "../assets/icon/bootstrap.svg"
import typescript from "../assets/icon/typescript.svg"
import project1 from "../assets/project1.jpg"
import { ColorType, ExperienceType, IconSkillType, NavItemType, ProjectType, RadiusType, ThemeType } from "../@types/global"

export const navItems : NavItemType[] = [
    {
        id: 1,
        name: "home",
        link: "/",
        icon: "home",
    },
    {
        id: 2,
        name: "contact",
        link: "/contact",
        icon: "contact",
    },
    {
        id: 3,
        name: "blog",
        link: "/blog",
        icon: "blog",
    }
]

export const iconSkills : IconSkillType[] = [
    { id: 1, name: "HTML", link: html, type: "language" },
    { id: 2, name: "CSS", link: css, type: "language" },
    { id: 3, name: "JavaScript", link: javascript, type: "language" },
    { id: 4, name: "TypeScript", link: typescript, type: "language" },
    { id: 5, name: "PHP", link: php, type: "language" },
    { id: 6, name: "NodeJS", link: nodejs, type: "language" },
    { id: 7, name: "Tailwind", link: tailwind, type: "framework" },
    { id: 8, name: "Material UI", link: materialUi, type: "framework" },
    { id: 9, name: "Bootstrap", link: bootstrap, type: "framework" },
    { id: 10, name: "ReactJS", link: reactjs, type: "framework" },
    { id: 11, name: "ExpressJS", link: expressjs, type: "framework" },
    { id: 12, name: "Next.js", link: nextjs, type: "framework" },
    { id: 13, name: "Symfony", link: symfony, type: "framework" },
    { id: 14, name: "MongoDB", link: mongodb, type: "database" },
    { id: 15, name: "MySQL", link: mysql, type: "database" },
    { id: 16, name: "Git", link: git, type: "tool" },
    { id: 17, name: "GitHub", link: github, type: "tool" },
    { id: 18, name: "GitLab", link: gitlab, type: "tool" },
    { id: 19, name: "VS Code", link: vscode, type: "tool" },
    { id: 20, name: "XAMPP", link: xampp, type: "tool" },
    { id: 21, name: "Figma", link: figma, type: "tool" },
    { id: 22, name: "Pusher", link: pusher, type: "other" },
    { id: 24, name: "Postman", link: postman, type: "tool" },
]

export const colors: ColorType[] = [
    { id: 1, name: "Red", value: "red", color: "#C53030" },
    { id: 2, name: "Blue", value: "blue", color: "#2B6CB0" },
    { id: 3, name: "Orange", value: "orange", color: "#F97316" },
    { id: 4, name: "Green", value: "green", color: "#2F855A" },
    { id: 5, name: "Violet", value: "violet", color: "#6B46C1" },
    { id: 6, name: "Yellow", value: "yellow", color: "#FACC15" },
];

export  const themes : ThemeType[] = [
    { id: 1, name: "Dark", value: "dark" },
    { id: 2, name: "Light", value: "light" },
];

export const raduis : RadiusType[] = [
    { id: 1, name: "none", value: "none" },
    { id: 2, name: "sm", value: "sm" },
    { id: 3, name: "md", value: "md" },
    { id: 4, name: "lg", value: "lg" },
    { id: 5, name: "xl", value: "xl" },
];

export const ProjectList : ProjectType[] = [
    { 
        id: 1, 
        name: "Ohabolana Malagasy",
        resume: "Platform de gestion de tourisme",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum! Lorem ipsum dolor sit amet consectetur.",
        image: project1,
        delay: "6",
        type: "personnel",
        level: "moyen",
        demo_link: "https://ohabolanagasy.vercel.app/",
        code_link: ""
    },
    { 
        id: 2, 
        name: "Madagascar",
        resume: "Platform de gestion de tourisme",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum! Lorem ipsum dolor sit amet consectetur.",
        image: project1,
        delay: "4",
        type: "personnel",
        level: "facile",
        demo_link: "https://eddy99leon.github.io/Madagascar",
        code_link: ""
    },
    { 
        id: 3, 
        name: "Fondroy",
        resume: "Platform de gestion de tourisme",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum! Lorem ipsum dolor sit amet consectetur.",
        image: project1,
        delay: "5",
        type: "personnel",
        level: "difficile",
        demo_link: "https://fondroy.vercel.app/",
        code_link: ""
    }
]

export const experienceLists : ExperienceType[] = [
    {
      id: 1,
      poste: "Développeur Fullstack React / Symfony",
      entreprise: "SK'HAY",
      date: "Mars 2024 - Maintenant",
      type: "CDI",
      description: `On travaille sur un projet de site d'animation pour une plateforme de rencontre. J’ai créé des API avec Symfony, corrigé et amélioré le design en utilisant Material UI, puis rendu le site interactif avec React. On a utilisé MySQL pour la base de données et Pusher pour afficher les données en temps réel.`,
      technologies: [
        "React.Js",
        "Material Ui",
        "Javascript",
        "PHP",
        "Symfony",
        "Pusher",
        "MySQL",
      ],
    },
    {
      id: 2,
      poste: "Développeur Fullstack React / Node.Js",
      entreprise: "HAISOA",
      date: "Jul 2023 - Oct 2023",
      type: "Stage",
      description: `On a travaillé sur la création d'un site universitaire. On a utilisé React pour le frontend et ExpressJS pour le backend. J'ai réalisé le design sur Figma, puis l'ai intégré avant de développer le backend et dynamiser le site avec React. On a utilisé MongoDB pour la base de données et Tailwind pour l'intégration du design.`,
      technologies: [
        "React.Js",
        "Tailwind",
        "Javascript",
        "Node.js",
        "Express.Js",
        "JWT",
        "MySQL",
      ],
    },
];
  