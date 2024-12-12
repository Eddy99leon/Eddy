import { useEffect, useState } from "react"
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


const Language = () => {
  const [ t, i18n ] = useTranslation()
  const [position, setPosition] = useState<"en" | "fr" | "mg">("fr")

  useEffect(()=>{
    i18n.changeLanguage(position)
  }, [position])

  const flagCodes = {
    en: "GB",
    fr: "FR",
    mg: "MG",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none border-none flex items-center">
          <Languages size={24} className="mr-1" />
          <Flag 
            code={flagCodes[position]} 
            alt={position} 
            className="w-7 h-5 border" 
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("Languages")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup 
          value={position} 
          onValueChange={(value) => setPosition(value as "en" | "fr" | "mg")}
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
