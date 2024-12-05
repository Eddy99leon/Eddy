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


const Language = () => {
  const [ t, i18n ] = useTranslation()
  const [position, setPosition] = useState("en")

  useEffect(()=>{
    i18n.changeLanguage(position)
  }, [position])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none border-none">
          <Languages size={24} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("Languages")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="en">Anglais</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="mg">Malagasy</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Language;
