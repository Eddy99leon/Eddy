import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Code, Info, Play } from "lucide-react"
  
const ProjectItem = () => {
  return (
    <div className="block md:flex w-full gap-3 bg-white rounded-xl shadow overflow-hidden p-5">
        <div className="flex-1 rounded mb-4 md:mb-0">
            <Carousel className="w-[400px] rounded-xl">
                <CarouselContent>
                    <CarouselItem>
                        <img 
                            src="https://i.ytimg.com/vi/HfJjzmSaLuQ/maxresdefault.jpg" 
                            alt="" 
                            className="w-[450px] h-[270px] rounded-xl"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img 
                            src="https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/01/blog-4-1.jpg" 
                            alt="" 
                            className="w-[450px] h-[270px] rounded-xl"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img 
                            src="https://repository-images.githubusercontent.com/587272706/d6f74c74-bd1d-44dd-a601-1c4d73b6e29a" 
                            alt="" 
                            className="w-[450px] h-[270px] rounded-xl"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        <div className="flex-1 flex flex-col justify-between">
            <div className="mb-2">
                <h2 className="text-xl text-blue-700">
                    Madagascar
                </h2>
                <h4 className="mb-2">
                    Plateforme de gestion des ressources touristiques.
                </h4>
                <p className="text-gray-400 text-sm text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet.
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>
            <div className="bg-blue-50 flex justify-between p-2 mb-4 text-sm">
                <div>
                    <h1>
                        Réalisation:
                    </h1>
                    <p className="text-gray-500">
                        7 mois
                    </p>
                </div>
                <div>
                    <h1>
                        type de projet:
                    </h1>
                    <p className="text-gray-500">
                        Personnels.
                    </p>
                </div>
                <div>
                    <h1>
                        Niveau :
                    </h1>
                    <p className="text-gray-500">
                        Facile.
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button className="group flex items-center gap-1 px-3 py-2 border hover:bg-blue-50">
                    <Play size={18} className="text-blue-700 transition-transform duration-500 group-hover:scale-125" /> 
                    <span className="text-gray-600">
                        Demo
                    </span>
                </button>
                <button className="group flex items-center gap-1 px-3 py-2 border hover:bg-blue-50">
                    <Info size={18} className="text-blue-700 transition-transform duration-500 group-hover:scale-125" />
                    <span className="text-gray-600">
                        Detail
                    </span>
                </button>
                <button className="group flex items-center gap-1 px-3 py-2 border hover:bg-blue-50">
                    <Code size={18} className="text-blue-700 transition-transform duration-500 group-hover:scale-125" />
                    <span className="text-gray-600">
                        Code
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem