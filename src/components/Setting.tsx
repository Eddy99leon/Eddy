import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { colors, raduis, themes } from "@/constants/global";
import { BorderRadius, Color, useSetting } from "@/contexts/SettingContext";
import { getIcon } from "@/lib";
import { Settings } from "lucide-react";
import { useState } from "react";

const Setting = () => {
  const { setColor, setBorderRadius, setTheme } = useSetting();
  
  const [selectedRadiusId, setSelectedRadiusId] = useState<number | null>(null);
  const [selectedColorId, setSelectedColorId] = useState<number | null>(null);
  const [selectedThemeId, setSelectedThemeId] = useState<number | null>(null);

  return (
    <div>
        <Dialog>
            <DialogTrigger>
                <Settings size={24} />
            </DialogTrigger>
            <DialogContent className="w-[340px] md:w-[400px] rounded">
                <DialogHeader>
                <DialogTitle className="mb-4">
                    Settings:
                </DialogTitle>
                <DialogDescription className="mb-4">
                    <div className="space-y-4">
                        <div>
                            <h2 className="mb-2">
                                Dark Mode :
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {themes?.map((theme) => {
                                    const isActive = theme.id === selectedThemeId;
                                    return (
                                        <div
                                            key={theme.id}
                                            onClick={() => {
                                                setSelectedThemeId(theme.id);
                                                setTheme(theme.value);
                                            }}
                                            className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-2xl ${
                                                isActive
                                                    ? "border border-blue-600"
                                                    : "border border-gray-300"
                                            }`}
                                        >
                                            {getIcon(theme.value)}
                                            <span className="text-sm">
                                                {theme.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-2">
                                Border Raduis :
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {raduis?.map((radui) => {
                                    const isActive = radui.id === selectedRadiusId;
                                    return (
                                        <div
                                            key={radui.id}
                                            onClick={() => {
                                                setBorderRadius(radui.value as BorderRadius);
                                                setSelectedRadiusId(radui.id)
                                            }}
                                            className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-2xl ${
                                                isActive
                                                    ? "border border-blue-600"
                                                    : "border border-gray-300"
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="radius"
                                                checked={isActive}
                                                onChange={() => setSelectedRadiusId(radui.id)}
                                                className="w-4 h-4 text-blue-500 bg-white border-gray-300 rounded-full"
                                            />
                                            <span className="text-sm">
                                                {radui.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-2">
                                Couleur :
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {colors?.map((color) => {
                                    const isActive = color.id === selectedColorId;
                                    return (
                                        <div
                                            key={color.id}
                                            onClick={() => {
                                                setColor(color.value as Color);
                                                setSelectedColorId(color.id)
                                            }}
                                            className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-2xl ${
                                                isActive
                                                    ? "border border-blue-600"
                                                    : "border border-gray-300"
                                            }`}
                                        >
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{ backgroundColor: color.color }}
                                                title={color.name}
                                            />
                                            <span className="text-sm">
                                                {color.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </DialogDescription>
                <div className="flex justify-between items-center pt-6">
                    <DialogClose asChild>
                        <button className="border w-36 py-2 rounded">
                            Annuler
                        </button>
                    </DialogClose>
                    <button 
                        onClick={() => {}}
                        className="bg-gray-100 border w-36 py-2 rounded"
                    >
                        Sauvegarder
                    </button>
                </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Setting