import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import Flag from 'react-world-flags'
import { useLanguage } from "@/contexts/LanguageContext";


const Language = () => {
  const { t } = useTranslation()
  const { position, changeLanguage } = useLanguage();

  const flagCodes: Record<"en" | "fr" | "mg", string> = {
    en: "GB",
    fr: "FR",
    mg: "MG",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex items-center">
        <div className="cursor-pointer">
          <Languages className="size-5 sm:size-6 lg:size-7 mr-[3px] sm:mr-1" />
          <Flag 
            code={flagCodes[position as "en" | "fr" | "mg"]}
            alt={position} 
            className="w-5 sm:w-6 md:w-7 h-3 sm:h-4 md:h-5 border" 
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 sm:w-40 md:w-44 ld:w-56">
        <DropdownMenuLabel className="text-sm sm:text-base py-1">
          {t("Languages")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup 
          value={position} 
          onValueChange={(value) => changeLanguage(value as "en" | "fr" | "mg")}
        >
          <DropdownMenuRadioItem value="en" className="text-xs sm:text-sm py-1 md:py-[6px]">
            {t("ang")}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fr" className="text-xs sm:text-sm py-1 md:py-[6px]">
            {t("fran")}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="mg" className="text-xs sm:text-sm py-1 md:py-[6px]">
            {t("malg")}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Language;
