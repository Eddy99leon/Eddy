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
                <DialogTitle>Settings:</DialogTitle>
                <DialogDescription>
                    <div className="space-x-8">
                        <button onClick={() => setTheme("light")}>light</button>
                        <button onClick={() => setTheme("dark")}>Dark</button>
                    </div>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Setting