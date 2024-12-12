import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const ProjectDetail = () => {
  return (
    <div>
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
  )
}

export default ProjectDetail
