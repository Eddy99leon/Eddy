import { Code, Info, Play } from "lucide-react"
import { ProjectItemProps } from "@/@types/global"
import Swal from "sweetalert2"
import { useTranslation } from "react-i18next"
  
const ProjectItem = ({project}: ProjectItemProps) => {
    const { t } = useTranslation()

    const handlePopup = (type: string) => {
        if(type === "detail"){
            Swal.fire({
                title: t("oops"),
                text: t("detail_popup_text"),
                icon: "warning",
                confirmButtonColor: "hsl(var(--accent))",
                confirmButtonText: t("agree")
            })
        }else if(type === "code"){
            Swal.fire({
                title: t("oops"),
                text: t("code_popup_text"),
                icon: "warning",
                confirmButtonColor: "hsl(var(--accent))",
                confirmButtonText: t("agree")
            })
        }else if(type === "demo"){
            Swal.fire({
                title: t("oops"),
                text: t("demo_popup_text"),
                icon: "warning",
                confirmButtonColor: "hsl(var(--accent))",
                confirmButtonText: t("agree")
            })
        }
    }

  return (
    <div className="block md:flex w-full gap-3 bg-background border border-tprimary-400 rounded-primary shadow p-3">
        <div className="flex-1 rounded-primary mb-4 md:mb-0">
            <img 
                src={project.image} 
                alt="project image" 
                className="w-full h-auto rounded-primary"
            />
        </div>
        <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3 mb-3">
                <div className="">
                    <h2 className=" text-base sm:text-lg md:text-xl text-accent">
                        {project.name}
                    </h2>
                    <h4 className="mb-2 text-sm sm:text-base">
                        {t(project.resume)}
                    </h4>
                    <p className="text-tprimary-200 text-sm text-justify">
                        {t(project.description)}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
                    {project?.technologies.map((t) => {
                        return(
                            <span key={t} className="px-2 py-1 text-xs bg-accent-50 rounded-full whitespace-nowrap text-accent">
                                {t}
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <a 
                    href={project.demo_link || "#"} 
                    target={project.demo_link ? "_blank" : "_self"}
                    onClick={(e) => {
                        if (!project.demo_link) {
                            e.preventDefault();
                            handlePopup("demo");
                        }
                    }}
                >
                    <button className="group flex items-center gap-1 px-3 py-2 border border-tprimary-400 rounded-primary">
                        <Play className="text-accent transition-transform duration-500 group-hover:scale-125 size-4 sm:size-5" /> 
                        <span className="text-tprimary-100 text-sm sm:text-base">
                            {t("demo")}
                        </span>
                    </button>
                </a>
                <button 
                    className="group flex items-center gap-1 px-3 py-2 border border-tprimary-400 rounded-primary"
                    onClick={() => handlePopup("detail")}
                >
                    <Info className="text-accent transition-transform duration-500 group-hover:scale-125 size-4 sm:size-5" />
                    <span className="text-tprimary-100 text-sm sm:text-base">
                        {t("detail")}
                    </span>
                </button>
                <a 
                    href={project.code_link || "#"} 
                    target={project.code_link ? "_blank" : "_self"}
                    onClick={(e) => {
                        if (!project.code_link) {
                            e.preventDefault();
                            handlePopup("code");
                        }
                    }}
                >
                    <button className="group flex items-center gap-1 px-3 py-2 border border-tprimary-400 rounded-primary">
                        <Code className="text-accent transition-transform duration-500 group-hover:scale-125 size-4 sm:size-5" />
                        <span className="text-tprimary-100 text-sm sm:text-base">
                            {t("code")}
                        </span>
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem