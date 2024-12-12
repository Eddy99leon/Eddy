import avatar from "@/assets/avatar.jpg"
import { ContactRound, Download } from "lucide-react"

const Hero = () => {
  return (
    <div className="bg_svg">
      <div className="container py-20">
        <div className="flex items-center justify-around">
          <div>
            <h3 className="text-gray-600 tracking-wide">
              Hey, I'm
            </h3>
            <h1 className="text-6xl font-semibold mb-2 tracking-wide">
              Eddy Léon
            </h1>
            <h2 className="text-gray-600 text-2xl tracking-wide mb-2">
              Développeur Fullstack.
            </h2>
            <hr className="border-t-2 bg-blue-700 mb-2 max-w-36 h-[6px] " />
            <p className="max-w-[450px] text-gray-500 mb-6">
              J'aime concevoir des interfaces élégantes et fonctionnelles 
              qui améliorent l'expérience utilisateur. Le frontend est l'endroit 
              où je peux donner vie aux idées avec précision. Chaque détail est 
              important pour créer un design harmonieux et intuitif.
            </p>
            <div className="flex items-center gap-8">
              <button className="bg-blue-700 text-white flex items-center gap-1 py-3 px-4 rounded">
                <ContactRound size={17} />
                <span className="text-sm">
                  Contact Me
                </span>
              </button>
              <button className="bg-gray-200 text-black flex items-center gap-1 py-3 px-4 rounded border">
                <Download size={17} />
                <span className="text-sm">
                  Download CV
                </span>
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src={avatar} 
              className="w-[300px] h-[300px] shadow-xl rounded-lg"
              alt="avatar" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero