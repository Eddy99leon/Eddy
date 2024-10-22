import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
  
const ProjectItem = () => {
  return (
    <div className="flex w-full text-sm gap-3 bg-white/30 border rounded-lg shadow-md overflow-hidden">
        <div className="flex-1">
            <Carousel className="w-[200px]">
                <CarouselContent>
                    <CarouselItem>
                        <img 
                            src="https://i.ytimg.com/vi/HfJjzmSaLuQ/maxresdefault.jpg" 
                            alt="" 
                            className="w-[250px] h-[300px]"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img 
                            src="https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/01/blog-4-1.jpg" 
                            alt="" 
                            className="w-[250px] h-[300px]"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img 
                            src="https://repository-images.githubusercontent.com/587272706/d6f74c74-bd1d-44dd-a601-1c4d73b6e29a" 
                            alt="" 
                            className="w-[250px] h-[300px]"
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        <div className="flex flex-col justify-between flex-2 py-3 px-1">
            <div>
                <div className="mb-2">
                    <h2 className="text-lg font-medium">
                        Madagascar
                    </h2>
                    <h3>
                        création: 2024
                    </h3>
                    <h3>
                        Type: Personnel.
                    </h3>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="mb-2">
                    <div className="space-x-1 space-y-1">
                        <Badge variant="outline">
                            ReactJS
                        </Badge>
                        <Badge variant="outline">
                            NodeJS
                        </Badge>
                        <Badge variant="outline">
                            Tailwind
                        </Badge>
                        <Badge variant="outline">
                            ShadCN
                        </Badge>
                        <Badge variant="outline">
                            i18next
                        </Badge>
                        <Badge variant="outline">
                            lucide
                        </Badge>
                    </div>
                </div>
            </div>
            <div>
                boutton
            </div>
        </div>
    </div>
  )
}

export default ProjectItem