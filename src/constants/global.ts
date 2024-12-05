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
// import reactRouter from "../assets/icon/reactRouter.svg"
import postman from "../assets/icon/postman.svg"
import bootstrap from "../assets/icon/bootstrap.svg"
import typescript from "../assets/icon/typescript.svg"
import { IconSkillType, NavItemType } from "../@types/global"

export const navItems : NavItemType[] = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Contact",
        link: "/contact"
    },
    {
        id: 3,
        name: "Blog",
        link: "/blog"
    }
]

export const iconSkills : IconSkillType[] = [
    { id: 1, name: "HTML", link: html, type: "language" },
    { id: 2, name: "CSS", link: css, type: "language" },
    { id: 3, name: "JavaScript", link: javascript, type: "language" },
    { id: 4, name: "TypeScript", link: typescript, type: "language" },
    { id: 5, name: "PHP", link: php, type: "language" },
    { id: 6, name: "Tailwind", link: tailwind, type: "framework" },
    { id: 7, name: "Material UI", link: materialUi, type: "framework" },
    { id: 8, name: "Bootstrap", link: bootstrap, type: "framework" },
    { id: 9, name: "ReactJS", link: reactjs, type: "framework" },
    // { id: 10, name: "React Router", link: reactRouter, type: "other" },
    { id: 11, name: "NodeJS", link: nodejs, type: "language" },
    { id: 12, name: "ExpressJS", link: expressjs, type: "framework" },
    { id: 13, name: "Next.js", link: nextjs, type: "framework" },
    { id: 14, name: "Symfony", link: symfony, type: "framework" },
    { id: 15, name: "Git", link: git, type: "tool" },
    { id: 16, name: "GitHub", link: github, type: "tool" },
    { id: 17, name: "GitLab", link: gitlab, type: "tool" },
    { id: 18, name: "VS Code", link: vscode, type: "tool" },
    { id: 19, name: "MongoDB", link: mongodb, type: "database" },
    { id: 20, name: "MySQL", link: mysql, type: "database" },
    { id: 21, name: "Pusher", link: pusher, type: "other" },
    { id: 22, name: "XAMPP", link: xampp, type: "tool" },
    { id: 23, name: "Figma", link: figma, type: "tool" },
    { id: 24, name: "Postman", link: postman, type: "tool" },
]