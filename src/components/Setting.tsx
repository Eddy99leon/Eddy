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
                <Settings className="size-5 sm:size-6 lg:size-7" />
            </DialogTrigger>
            <DialogContent className="w-[340px] md:w-[400px] rounded-primary">
                <DialogHeader>
                    <DialogTitle className="mb-2 sm:mb-4 text-base">
                        Settings:
                    </DialogTitle>
                    <DialogDescription asChild className="mb-2 sm:mb-4">
                        <div className="space-y-2 sm:space-y-4">
                            <div>
                                <h2 className="mb-2 text-start text-xs sm:text-sm">
                                    Dark Mode :
                                </h2>
                                <div className="flex flex-wrap gap-2 sm:gap-4">
                                    {themes?.map((theme) => {
                                        const isActive = theme.id === selectedThemeId;
                                        return (
                                            <div
                                                key={theme.id}
                                                onClick={() => {
                                                    setSelectedThemeId(theme.id);
                                                    setTheme(theme.value);
                                                }}
                                                className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-primary ${
                                                    isActive
                                                        ? "border border-accent"
                                                        : "border border-gray-300"
                                                }`}
                                            >
                                                {getIcon(theme.value)}
                                                <span className="text-xs sm:text-sm">
                                                    {theme.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <h2 className="mb-2 text-start text-xs sm:text-sm">
                                    Border Raduis :
                                </h2>
                                <div className="flex flex-wrap gap-2 sm:gap-4">
                                    {raduis?.map((radui) => {
                                        const isActive = radui.id === selectedRadiusId;
                                        return (
                                            <div
                                                key={radui.id}
                                                onClick={() => {
                                                    setBorderRadius(radui.value as BorderRadius);
                                                    setSelectedRadiusId(radui.id)
                                                }}
                                                className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-primary ${
                                                    isActive
                                                        ? "border border-accent"
                                                        : "border border-gray-300"
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="radius"
                                                    checked={isActive}
                                                    onChange={() => setSelectedRadiusId(radui.id)}
                                                    className="size-3 sm:size-4 text-accent bg-white border-gray-300 rounded-full cursor-pointer"
                                                />
                                                <span className="text-xs sm:text-sm">
                                                    {radui.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <h2 className="mb-2 text-start text-xs sm:text-sm">
                                    Couleur :
                                </h2>
                                <div className="flex flex-wrap gap-2 sm:gap-4">
                                    {colors?.map((color) => {
                                        const isActive = color.id === selectedColorId;
                                        return (
                                            <div
                                                key={color.id}
                                                onClick={() => {
                                                    setColor(color.value as Color);
                                                    setSelectedColorId(color.id)
                                                }}
                                                className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-primary ${
                                                    isActive
                                                        ? "border border-accent"
                                                        : "border border-gray-300"
                                                }`}
                                            >
                                                <div
                                                    className="size-3 sm:size-4 rounded-full"
                                                    style={{ backgroundColor: color.color }}
                                                    title={color.name}
                                                />
                                                <span className="text-xs sm:text-sm">
                                                    {color.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                    <div className="flex justify-between items-center text-sm sm:text-base pt-4 sm:pt-6">
                        <DialogClose asChild>
                            <button className="border w-28 sm:w-36 py-2 rounded-primary">
                                Annuler
                            </button>
                        </DialogClose>
                        <button 
                            onClick={() => {}}
                            className="bg-gray-100 border w-28 sm:w-36 py-2 rounded-primary"
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