import { ExperienceProps } from "@/@types/global"
import { useTranslation } from "react-i18next"

const ExpCard = ({experience} : ExperienceProps) => {
  const { t } = useTranslation()

  return (
    <div className="rounded py-3 pr-3 text-tprimary-100">
        <div className="flex gap-1 text-sm sm:text-base">
            <h1 className="font-semibold">
                {t("poste")}:
            </h1>
            <h1 className="text-accent">
                {t(experience.poste)}
            </h1>
        </div>
        <div className="flex gap-1 text-sm sm:text-base">
            <h1 className="font-semibold">
                {t("entreprise")}:
            </h1>
            <h1>
                {experience.entreprise}
            </h1>
        </div>
        <div className="flex gap-1 text-sm sm:text-base">
            <h1 className="font-semibold">
                {t("date")}:
            </h1>
            <h1>
                {t(experience.date)}
            </h1>
        </div>
        <div className="flex gap-1 text-sm sm:text-base">
            <h1 className="font-semibold">
                {t("type")}:
            </h1>
            <h1>
                {t(experience.type)}
            </h1>
        </div>
        <p className="text-sm text-tprimary-200 text-justify mb-2">
            {t(experience.description)}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
            {experience?.technologies.map((t) => {
                return(
                    <span key={t} className="px-2 py-1 text-xs bg-accent-50 rounded-full whitespace-nowrap text-accent">
                        {t}
                    </span>
                )
            })}
        </div>
    </div>
  )
}

export default ExpCard