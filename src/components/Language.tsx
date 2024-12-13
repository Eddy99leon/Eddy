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
          <Languages size={24} className="mr-1" />
          <Flag 
            code={flagCodes[position as "en" | "fr" | "mg"]}
            alt={position} 
            className="w-7 h-5 border" 
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("Languages")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup 
          value={position} 
          onValueChange={(value) => changeLanguage(value as "en" | "fr" | "mg")}
        >
          <DropdownMenuRadioItem value="en">{t("ang")}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fr">{t("fran")}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="mg">{t("malg")}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Language;
