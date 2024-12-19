import { Contact, House, Moon, NotebookPen, Sun } from "lucide-react";

export const getIcon = (value: "light" | "dark" | "home" | "contact" | "blog") => {
    switch(value) {
        case "dark":
            return <Sun size={20} />;
        case "light":
            return <Moon size={20} />;
        case "home":
            return <House size={24} />;
        case "contact":
            return <Contact size={24} />;
        case "blog":
            return <NotebookPen size={24} />;
        default:
            return null;
    }
};