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
                            <h2>Couleur</h2>
                            <div className="space-x-8">
                                <button onClick={() => setTheme("green")}>green</button>
                                <button onClick={() => setTheme("blue")}>blue</button>
                                <button onClick={() => setTheme("blue")}>orange</button>
                                <button onClick={() => setTheme("blue")}>rouge</button>
                            </div>
                        </div>
                        <div>
                            <h2>Dark/Light</h2>
                            <div className="space-x-8">
                                <button onClick={() => setTheme("dark")}>Dark</button>
                                <button onClick={() => setTheme("light")}>light</button>
                            </div>
                        </div>
                        <div>
                            <h2>Language</h2>
                            <div className="space-x-8">
                                <button onClick={() => setTheme("light")}>Anglais</button>
                                <button onClick={() => setTheme("dark")}>Français</button>
                                <button onClick={() => setTheme("green")}>Malagasy</button>
                            </div>
                        </div>
                        <div className="space-x-8">
                            <button onClick={() => setTheme("light")}>Annuler</button>
                            <button onClick={() => setTheme("dark")}>Sauvegarder</button>
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