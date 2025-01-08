import { Contact, House, Monitor, Moon, NotebookPen, Palette, Sun, Wrench } from "lucide-react";

export const getIcon = (value: string) => {
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
        case "palette":
            return <Palette className="size-4 md:size-5" />;
        case "monitor":
            return <Monitor className="size-4 md:size-5" />;
        case "wrench":
            return <Wrench className="size-4 md:size-5" />;
        default:
            return null;
    }
};