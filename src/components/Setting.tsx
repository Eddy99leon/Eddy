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
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Setting = () => {
  const { t } = useTranslation()
  const { color, borderRadius, theme, setColor, setBorderRadius, setTheme } = useSetting();
  const [ loading, setLoading ] = useState<boolean>(false);

  const closeButtonRef = useRef<any>(null)

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false);
        if (closeButtonRef.current) {
            closeButtonRef.current.click()
        }
    }, 500);
  }

  return (
    <div>
        <Dialog>
            <DialogTrigger>
                <Settings className="size-5 sm:size-6 lg:size-7" />
            </DialogTrigger>
            <DialogContent className="w-[340px] md:w-[400px] rounded-primary bg-background-50">
                <DialogHeader>
                    <DialogTitle className="mb-2 sm:mb-4 text-base text-tprimary-100 text-center">
                        {t("settings")}:
                    </DialogTitle>
                    <DialogDescription asChild className="mb-2 sm:mb-4">
                        <div className="space-y-2 sm:space-y-4">
                            <div>
                                <h2 className="mb-2 text-start text-xs sm:text-sm">
                                    Dark Mode :
                                </h2>
                                <div className="flex flex-wrap gap-2 sm:gap-4">
                                    {themes?.map((th) => {
                                        const isActive = th.value === theme;
                                        return (
                                            <div
                                                key={th.id}
                                                onClick={() => setTheme(th.value)}
                                                className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-primary ${
                                                    isActive
                                                        ? "border border-accent"
                                                        : "border border-tprimary-400"
                                                }`}
                                            >
                                                {getIcon(th.value)}
                                                <span className="text-xs sm:text-sm">
                                                    {t(th.name)}
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
                                        const isActive = radui.value === borderRadius;
                                        return (
                                            <div
                                                key={radui.id}
                                                onClick={() => setBorderRadius(radui.value as BorderRadius)}
                                                className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-primary ${
                                                    isActive
                                                        ? "border border-accent"
                                                        : "border border-tprimary-400"
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="radius"
                                                    checked={isActive}
                                                    onChange={() => setBorderRadius(radui.value as BorderRadius)}
                                                    className="size-3 sm:size-4 text-accent bg-white border-gray-300 rounded-full cursor-pointer"
                                                />
                                                <span className="text-xs sm:text-sm">
                                                    {t(radui.name)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <h2 className="mb-2 text-start text-xs sm:text-sm">
                                    {t("color")} :
                                </h2>
                                <div className="flex flex-wrap gap-2 sm:gap-4">
                                    {colors?.map((c) => {
                                        const isActive = c.value === color;
                                        return (
                                            <div
                                                key={c.id}
                                                onClick={() => setColor(c.value as Color)}
                                                className={`flex items-center gap-1 px-3 py-2 cursor-pointer rounded-primary ${
                                                    isActive
                                                        ? "border border-accent"
                                                        : "border border-tprimary-400"
                                                }`}
                                            >
                                                <div
                                                    className="size-3 sm:size-4 rounded-full"
                                                    style={{ backgroundColor: c.color }}
                                                    title={c.name}
                                                />
                                                <span className="text-xs sm:text-sm">
                                                    {t(c.name)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                    <div className="flex justify-between items-center text-sm sm:text-base pt-4 sm:pt-6">
                        <DialogClose ref={closeButtonRef} asChild>
                            <button className="border w-28 sm:w-36 py-2 rounded-primary text-tprimary-50">
                                {t("cancel")} 
                            </button>
                        </DialogClose>
                        <button 
                            onClick={handleSave}
                            className="bg-gray-100 border w-28 sm:w-36 py-2 rounded-primary"
                        >
                            {loading? t("load") : t("save")}
                        </button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Setting