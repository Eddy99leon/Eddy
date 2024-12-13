import { ProjectList } from "@/constants/global"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div>
        <div className="container py-10">
            <div className="mb-14 text-center">
                <h3 className="text-xl">
                    Mes Derniers projets
                </h3>
                <h4 className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                </h4>
            </div>
            <div className="space-y-6">
                { ProjectList.map((project) => {
                    return(
                        <ProjectItem key={project.id} project={project} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Projects