import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Linkedin } from "lucide-react"
  
const ProjectItem = () => {
  return (
    <div className="flex w-full gap-3 bg-gray-50 rounded shadow overflow-hidden">
        <div className="flex-1">
            <Carousel className="w-[500px]">
                <CarouselContent>
                    <CarouselItem>
                        <img 
                            src="https://i.ytimg.com/vi/HfJjzmSaLuQ/maxresdefault.jpg" 
                            alt="" 
                            className="w-[550px] h-[400px]"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img 
                            src="https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/01/blog-4-1.jpg" 
                            alt="" 
                            className="w-[550px] h-[400px]"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img 
                            src="https://repository-images.githubusercontent.com/587272706/d6f74c74-bd1d-44dd-a601-1c4d73b6e29a" 
                            alt="" 
                            className="w-[550px] h-[400px]"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        <div className="flex-1 flex flex-col justify-between py-3 px-4">
            <div className="space-y-1">
                <div className="flex gap-1">
                    <h1 className="font-semibold">
                        Nom du projet:
                    </h1>
                    <h1>
                        Madagascar
                    </h1>
                </div>
                <div className="flex gap-1">
                    <h1 className="font-semibold">
                        Date de création:
                    </h1>
                    <h1>
                        2023
                    </h1>
                </div>
                <div className="flex gap-1">
                    <h1 className="font-semibold">
                        Objectif:
                    </h1>
                    <h1>
                        Plateforme de gestion des ressources touristiques.
                    </h1>
                </div>
                <p className="text-gray-500 text-sm text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet.
                </p>
                <div className="flex flex-wrap gap-2">
                    <div className="hover:bg-blue-50 p-3 rounded-md border">
                        <Linkedin size={22} />
                    </div>
                    <div className="hover:bg-blue-50 p-3 rounded-md border">
                        <Linkedin size={22} />
                    </div>
                    <div className="hover:bg-blue-50 p-3 rounded-md border">
                        <Linkedin size={22} />
                    </div>
                    <div className="hover:bg-blue-50 p-3 rounded-md border">
                        <Linkedin size={22} />
                    </div>
                    <div className="hover:bg-blue-50 p-3 rounded-md border">
                        <Linkedin size={22} />
                    </div>
                    <div className="hover:bg-blue-50 p-3 rounded-md border">
                        <Linkedin size={22} />
                    </div>
                    <div className="hover:bg-blue-50 p-3 rounded-md border">
                        <Linkedin size={22} />
                    </div>
                    <div className="hover:bg-blue-50 p-3 rounded-md border">
                        <Linkedin size={22} />
                    </div>
                    <div className="hover:bg-blue-50 p-3 rounded-md border">
                        <Linkedin size={22} />
                    </div>
                    {/* <Badge variant="outline">
                        lucide
                    </Badge> */}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <a 
                    href="https://monprojetmadagascar.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 underline"
                >
                    Demo
                </a>
                <a 
                    href="https://monprojetmadagascar.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ml-4 text-blue-500 underline"
                >
                    Detail du projet
                </a>
                <a 
                    href="https://github.com/username/madagascar" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ml-4 text-blue-500 underline"
                >
                    Code source
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem