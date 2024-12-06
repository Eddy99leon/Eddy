import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useTheme } from "@/contexts/ThemeContext";
import { Settings } from "lucide-react";

const Setting = () => {
  const { setTheme } = useTheme();

  const couleurs = [
    { id: 1, name: "Rouge", value: "#FF0000" },
    { id: 2, name: "Bleu", value: "#0000FF" },
    { id: 3, name: "Orange", value: "#FFA500" },
    { id: 4, name: "Jaune", value: "#FFFF00" },
  ];
  const modes = [
    { id: 1, name: "Dark", value: "light" },
    { id: 2, name: "Light", value: "dark" },
  ];
//   const raduis = [
//     { id: 1, name: "sm", value: "#FF0000" },
//     { id: 2, name: "md", value: "#0000FF" },
//     { id: 3, name: "lg", value: "#0000FF" },
//     { id: 4, name: "xl", value: "#0000FF" },
//   ];

  return (
    <div>
        <Dialog>
            <DialogTrigger>
                <Settings size={24} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="mb-6">
                    Settings:
                </DialogTitle>
                <DialogDescription>
                    <div className="space-y-6">
                        <div>
                            <h2 className="mb-2">
                                Couleur
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                { couleurs?.map((couleur) => {
                                    return (
                                        <div 
                                            key={couleur.id}
                                            className="flex items-center gap-1 border rounded-2xl px-2 py-2 cursor-pointer"
                                        >
                                            <div  
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: couleur.value }}
                                                title={couleur.name}
                                            />
                                            <span className="text-xs">
                                                {couleur.name}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-2">
                                Dark Mode
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                { modes?.map((mode) => {
                                    return (
                                        <div 
                                            key={mode.id}
                                            className="flex items-center gap-1 border rounded-2xl px-2 py-2 cursor-pointer"
                                        >
                                            <span 
                                                className="text-xs"
                                                onClick={() => setTheme("light")}
                                            >
                                                {mode.name}
                                            </span>
                                        </div>
                                    )
                                })}
                                <button onClick={() => setTheme("dark")}>
                                    Dark
                                </button>
                                <button onClick={() => setTheme("light")}>
                                    light
                                </button>
                            </div>
                        </div>
                        <div>
                            <h2>Language</h2>
                            <div className="space-x-8">
                                <button onClick={() => setTheme("light")}>
                                    Anglais
                                </button>
                                <button onClick={() => setTheme("dark")}>
                                    Français
                                </button>
                                <button onClick={() => setTheme("green")}>
                                    Malagasy
                                </button>
                            </div>
                        </div>
                        <div className="space-x-8">
                            <button onClick={() => setTheme("light")}>
                                Annuler
                            </button>
                            <button onClick={() => setTheme("dark")}>
                                Sauvegarder
                            </button>
                        </div>
                    </div>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Setting