import { Code, Info, Play } from "lucide-react"
import { ProjectItemProps } from "@/@types/global"
  
const ProjectItem = ({project}: ProjectItemProps) => {
  return (
    <div className="block md:flex w-full gap-3 bg-white rounded-primary shadow overflow-hidden p-3">
        <div className="flex-1 rounded-primary mb-4 md:mb-0">
            <img 
                src={project.image} 
                alt="project image" 
                className="w-full h-auto rounded-primary"
            />
        </div>
        <div className="flex-1 flex flex-col justify-between">
            <div className="mb-2">
                <h2 className=" text-base sm:text-lg md:text-xl text-accent">
                    {project.name}
                </h2>
                <h4 className="mb-2 text-sm sm:text-base">
                    {project.resume}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm text-justify">
                    {project.description}
                </p>
            </div>
            <div className="bg-accent-50 flex justify-between p-2 mb-4 text-xs sm:text-sm">
                <div>
                    <h1>
                        Réalisation:
                    </h1>
                    <p className="text-gray-500">
                        {project.delay} mois
                    </p>
                </div>
                <div>
                    <h1>
                        type de projet:
                    </h1>
                    <p className="text-gray-500">
                        {project.type}
                    </p>
                </div>
                <div>
                    <h1>
                        Niveau :
                    </h1>
                    <p className="text-gray-500">
                        {project.level}
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button className="group flex items-center gap-1 px-3 py-2 border hover:bg-accent-50 rounded-primary">
                    <Play className="text-accent transition-transform duration-500 group-hover:scale-125 size-4 sm:size-5" /> 
                    <span className="text-gray-600 text-sm sm:text-base">
                        Demo
                    </span>
                </button>
                <button className="group flex items-center gap-1 px-3 py-2 border hover:bg-accent-50 rounded-primary">
                    <Info className="text-accent transition-transform duration-500 group-hover:scale-125 size-4 sm:size-5" />
                    <span className="text-gray-600 text-sm sm:text-base">
                        Detail
                    </span>
                </button>
                <button className="group flex items-center gap-1 px-3 py-2 border hover:bg-accent-50 rounded-primary">
                    <Code className="text-accent transition-transform duration-500 group-hover:scale-125 size-4 sm:size-5" />
                    <span className="text-gray-600 text-sm sm:text-base">
                        Code
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem