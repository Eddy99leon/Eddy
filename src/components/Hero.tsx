import hero from "@/assets/img2.jpeg"
import whatsapp from "@/assets/icon/whatsapp.svg"
import { Download } from "lucide-react"
import { useTranslation } from "react-i18next"
import eddyCV from "../assets/Eddy_CV.pdf"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="bg_svg">
      <div className="container py-20">
        <div className="flex items-center justify-around">
          <div>
            <h3 className="text-gray-600 tracking-wide text-sm sm:text-base">
              {t("hi")}
            </h3>
            <h1 className="text-5xl md:text-6xl font-semibold mb-2 tracking-wide">
              Eddy Léon
            </h1>
            <h2 className="text-gray-600 text-lg sm:text-xl md:text-2xl tracking-wide mb-1 md:mb-2">
              {t("post")}
            </h2>
            <hr className="border-t-2 bg-accent mb-2 max-w-36 h-[6px]" />
            <p className="max-w-[450px] text-gray-500 text-xs sm:text-sm md:text-base mb-4 md:mb-6">
              {t("heroDesc")}
            </p>
            <div className="flex items-center gap-8">
              <a 
                href="https://wa.me/261345011705"
                target="_blank"
              >
                <button className="bg-accent text-white flex items-center gap-1 py-3 px-4 rounded-primary">
                  <img 
                      src={whatsapp} 
                      alt="whatsapp icon"
                      className="size-3 sm:size-4"
                  />
                  <span className="text-xs sm:text-sm">
                    {t("contactMe")}
                  </span>
                </button>
              </a>
              <a href={eddyCV} download>
                <button className="bg-gray-200 text-black flex items-center gap-1 py-3 px-4 rounded-primary border">
                  <Download className="size-3 sm:size-4" />
                  <span className="text-xs sm:text-sm">
                    {t("downCV")}
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -top-2 -right-2 w-[80px] h-[200px] border-t-4 border-r-4 border-accent rounded-se-primary">

            </div>
            <img 
              src={hero} 
              className="w-[300px] rounded-primary"
              alt="avatar" 
            />
            <div className="absolute -bottom-2 -left-2 w-[80px] h-[200px] border-b-4 border-l-4 border-accent rounded-es-primary">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero