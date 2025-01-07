import { experienceLists } from "@/constants/global"
import ExpCard from "./ExpCard"
import Skills from "./Skills"

const Experience = () => {
  return (
    <div>
        <div className="container py-10">
            <div className=" mb-4 md:mb-14 text-center">
                <h3 className="text-base sm:text-lg md:text-xl text-accent mb-1 sm:mb-2">
                    Experience et Compétence
                </h3>
                <h4 className="text-gray-600 text-xs sm:text-sm md:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                </h4>
            </div>
            <div className="block md:flex md:gap-2">
                <div className="flex-1 space-y-3 mb-8 md:mb-0">
                    { experienceLists.map((experience) => {
                        return(
                            <ExpCard key={experience.id} experience={experience} />
                        )
                    })}
                </div>
                <div className="bg-white rounded-primary shadow p-2 sm:p-3">
                    <Skills />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience