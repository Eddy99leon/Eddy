import { ExperienceProps } from "@/@types/global"

const ExpCard = ({experience} : ExperienceProps) => {
  return (
    <div className="rounded py-3 pr-3">
        <div className="flex gap-1">
            <h1 className="font-semibold">
                Poste:
            </h1>
            <h1 className="text-blue-700">
                {experience.poste}
            </h1>
        </div>
        <div className="flex gap-1">
            <h1 className="font-semibold">
                Entreprise:
            </h1>
            <h1>
                {experience.entreprise}
                <span>

                </span>
            </h1>
        </div>
        <div className="flex gap-1">
            <h1 className="font-semibold">
                Date:
            </h1>
            <h1>
                {experience.date}
            </h1>
        </div>
        <div className="flex gap-1">
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
        <div className="flex flex-wrap gap-3">
            {experience?.technologies.map((t) => {
                return(
                    <span key={t} className="px-2 py-1 text-xs bg-blue-100 rounded-full whitespace-nowrap text-blue-600">
                        {t}
                    </span>
                )
            })}
        </div>
    </div>
  )
}

export default ExpCard