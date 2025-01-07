import { Contact, House, Moon, NotebookPen, Sun } from "lucide-react";

export const getIcon = (value: "light" | "dark" | "home" | "contact" | "blog") => {
    switch(value) {
        case "dark":
            return <Sun className="size-4 sm:size-5" />;
        case "light":
            return <Moon className="size-4 sm:size-5" />;
        case "home":
            return <House className="size-5 sm:size-6" />;
        case "contact":
            return <Contact className="size-5 sm:size-6" />;
        case "blog":
            return <NotebookPen className="size-5 sm:size-6" />;
        default:
            return null;
    }
};