import { Moon, Sun } from "lucide-react";

export const getIcon = (value: "light" | "dark") => {
    switch(value) {
        case "dark":
            return <Sun size={20} />;
        case "light":
            return <Moon size={20} />;
        default:
            return null;
    }
};