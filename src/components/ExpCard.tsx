import { ExperienceProps } from "@/@types/global"

const ExpCard = ({experience} : ExperienceProps) => {
  return (
    <div className="rounded py-3 pr-3">
        <div className="flex gap-1 text-sm sm:text-base">
            <h1 className="font-semibold">
                Poste:
            </h1>
            <h1 className="text-accent">
                {experience.poste}
            </h1>
        </div>
        <div className="flex gap-1 text-sm sm:text-base">
            <h1 className="font-semibold">
                Entreprise:
            </h1>
            <h1>
                {experience.entreprise}
                <span>

                </span>
            </h1>
        </div>
        <div className="flex gap-1 text-sm sm:text-base">
            <h1 className="font-semibold">
                Date:
            </h1>
            <h1>
                {experience.date}
            </h1>
        </div>
        <div className="flex gap-1 text-sm sm:text-base">
            <h1 className="font-semibold">
                Type:
            </h1>
            <h1>
                {experience.type}
            </h1>
        </div>
        <p className="text-sm text-gray-500 text-justify mb-2">
            {experience.description}
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