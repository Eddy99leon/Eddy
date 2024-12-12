export type IconSkillType = {
    id: number;
    name: string;
    link: string;
    type: "language" | "framework" | "tool" | "database" | "other";
};

export type NavItemType = {
    id: number;
    name: string;
    link: string;
};

export type ColorType = {
    id: number;
    name: string;
    value: string;
    color: string;
};

export type ThemeType = {
    id: number;
    name: string;
    value: "dark" | "light";
};

export type RadiusType = {
    id: number;
    name: "sm" | "md" | "lg" | "xl";
    value: string;
};

export interface ProjectType {
    id: number;
    name: string;
    resume: string;
    description: string;
    image: string;
    delay: string;
    type: "personnel" | "professionnel";
    level: "facile" | "moyen" | "difficile";
    demo_link: string;
    code_link: string;
}

interface ProjectItemProps {
    project: ProjectType;
}