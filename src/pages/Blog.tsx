import oops from "@/assets/oops.svg"
import { MoveLeft } from "lucide-react"
import { Link } from "react-router-dom"

const Blog = () => {

  return (
    <div className="container py-16" >
      <div className="flex items-center">
        <div className="flex-1">
          <div className="mb-6 cursor-pointer">
            <Link to="/">
              <MoveLeft className="text-accent-100 hover:text-accent transition-colors duration-300" />
            </Link>
          </div>
          <h3 className="text-gray-500">
            Pas de panique !
          </h3>
          <h2 className="text-4xl font-medium mb-2 text-gray-900">
            Cette page est en cours <br /> de développement.
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Je suis en train de préparer du contenu passionnant pour cette blog ! 
            Cette page sera bientôt disponible et j'ai hâte de partager avec vous des articles intéressants sur des sujets variés. 
            En attendant, n'hésitez pas à explorer le reste de mon portfolio !
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <img 
            src={oops}
            className="w-[350px] h-[350px]" 
            alt="404 error" 
          />
        </div>
      </div>
    </div>
  )
}

export default Blog