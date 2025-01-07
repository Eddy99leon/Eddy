import aboutImg from "@/assets/img1.jpg"
import { useSetting } from "@/contexts/SettingContext"
import { Monitor, Palette, Wrench } from "lucide-react"
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()
  const { theme } = useSetting()

  return (
    <div className="bg-black pb-20">


      <div>
        <div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 100" 
            fill={ theme == "light" ? "#f3f4f6" : "#000000"}
          >
            <path d="M0 0v84l500 16 500-16V0H0z" opacity=".2"></path>
            <path d="M0 0v64l500 36 500-36V0H0z" opacity=".4"></path>
            <path d="M0 0v44l500 56 500-56V0H0z" opacity=".4"></path>
            <path d="M0 0v24l500 76 500-76V0H0z" opacity=".5"></path>
            <path d="M0 0v4l500 96 500-96V0H0z"></path>
          </svg>
        </div>
      </div>


      <div className="container text-white mt-8">

        <div className="mb-4 sm:mb-8 md:mb-12 text-center">
          <h3 className="text-base sm:text-lg md:text-xl text-accent mb-2">
            {t("aboutMe")}
          </h3>
          <h4 className="text-gray-400 text-xs sm:text-sm md:text-base">
            Quand le code rencontre la créativité.. 😉
          </h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-6">
          <div className=" col-span-2 md:col-span-1 flex md:justify-start">
            <img 
              src={aboutImg} 
              alt="about image"
              className="w-full md:w-[350px] rounded-primary"
            />
          </div>
          <div className="order-first md:order-last col-span-2">
            <h2 className="text-base sm:text-lg md:text-2xl font-medium text-gray-100 mb-1 md:mb-2">
              {t("titleAbout")}
            </h2>
            <p className="italic text-gray-400 mb-3 text-sm sm:text-base">
              {t("quote")}
            </p>
            <p className="mb-4 text-gray-300 border-l-2 border-gray-600 pl-2 text-justify text-xs sm:text-sm md:text-sm">
              {t("aboutDesc")}
            </p>
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              <div className="col-span-1 bg-accent w-full h-full py-4 rounded-primary p-1 sm:p-2 md:p-3 lg:p-4">
                <div className="bg-accent-100 w-fit rounded-primary p-3 mb-4">
                  <Palette className="size-4 md:size-5" />
                </div>
                <div className="">
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                    Creative
                  </p>
                  <h2 className="text-gray-100 text-xs sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap font-medium">
                    UI/UX Design
                  </h2>
                </div>
              </div>
              <div className="col-span-1 bg-gray-700 w-full h-full py-4 rounded-primary p-1 sm:p-2 md:p-3 lg:p-4">
                <div className="bg-gray-600 w-fit rounded-primary p-3 mb-4">
                  <Monitor className="size-4 md:size-5" />
                </div>
                <div className="">
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                    Interactive
                  </p>
                  <h2 className="text-gray-100 text-xs sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap font-medium">
                    Digital Interfaces
                  </h2>
                </div>
              </div>
              <div className="col-span-1 bg-gray-700 w-full h-full py-4 rounded-primary p-1 sm:p-2 md:p-3 lg:p-4">
                <div className="bg-gray-600 w-fit rounded-primary p-3 mb-4">
                  <Wrench className="size-4 md:size-5" />
                </div>
                <div className="">
                  <p className="text-gray-300 text-xs md:text-sm lg:text-base">
                    Robust
                  </p>
                  <h2 className="text-gray-100 text-xs sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap font-medium">
                    Problem Solver
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default About