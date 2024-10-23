import avatar from "@/assets/avatar.jpg"
import { Download } from "lucide-react"

const Hero = () => {
  return (
    <div className="bg_svg">
      <div className="container py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={avatar} 
              className="w-20 h-20 rounded-full shadow-xl"
              alt="avatar" 
            />
          </div>
          <div className="text-xl font-medium mb-4">
            <h3>Salut, Je suis <span className="font-semibold">Eddy</span> 🤟</h3>
          </div>
          <div className="font-medium mb-7">
            <h1 className="text-6xl">
              Dévellopeur
            </h1>
            <h1 className="text-6xl">
              Frontend
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <div className="space-y-1 text-sm">
                <div className="bg-green-100 py-1 px-3 rounded-sm border border-green-300">
                  <span className="font-medium">1 year +</span> d'exp
                </div>
                <div className="bg-red-100 py-1 px-3 rounded-sm border border-red-300">
                  <span className="font-medium">+ 27</span> project
                </div>
              </div>
              <div>
                <button className="bg-primary text-white flex items-center gap-1 py-[20px] px-4 rounded-md">
                  <Download size={17} />
                  <span className="text-sm">
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero