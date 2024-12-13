import { AtSign, Facebook, Github, Gitlab, Linkedin, MoveRight, Phone } from "lucide-react"
import contactBg from "@/assets/bg5.svg"
import { useTranslation } from "react-i18next"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div>

      <div 
        className="bg-cover bg-center text-gray-100" 
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="w-full h-full bg-gray-900/80">
          <div className="container space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-24 pt-20 sm:pt-32 md:pt-40 lg:pt-48 pb-10">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
                {t("contactMe")}
              </h1>
              <h3 className="text-sm lg:text-xl">
                Looking for a Developer.
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-700 hover:bg-gray-600 p-3 rounded-md">
                <Facebook size={22} />
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 p-3 rounded-md">
                <Linkedin size={22} />
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 p-3 rounded-md">
                <Github size={22} />
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 p-3 rounded-md">
                <Gitlab size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="container grid grid-cols-3 gap-4 pt-12 lg:pt-28 pb-14 sm:pb-20 lg:pb-48">
          <div className="col-span-3 sm:flex justify-between mb-6 lg:mb-0 lg:block lg:col-span-1 lg:space-y-6">
            <h2 className="max-w-[350px] text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-0">
              You are one step closer to build your
              perfect product .
            </h2>
            <h3 className="hidden lg:flex items-center gap-4 text-xl">
              <span className="text-blue-900">
                Juste send me a message
              </span>
              <span>
                <MoveRight size={28} className="text-blue-900" />
              </span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 rounded p-5">
                  <Phone size={20} />
                </div>
                <div>
                  <h1>
                    {t("phone")}
                  </h1>
                  <p className="text-gray-600">
                    +261 34 50 117 05
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 rounded p-5">
                  <AtSign size={20} />
                </div>
                <div>
                  <h1>
                    {t("email")}
                  </h1>
                  <p className="text-gray-600">
                    leoneddy504@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 w-full flex justify-end relative">
            <div className="bg-white shadow-md rounded-md lg:absolute w-full lg:w-[650px] lg:-top-72">
              <div className="flex items-center justify-center bg-blue-50 h-24 text-center">
                <p className="text-sm md:text-base">
                  Write me a few words about your project and i'll prepare <br />
                  a proposale for you within 24 hours
                </p>
              </div>
              <form className="px-2 md:px-6 py-6 md:py-12 space-y-8 md:space-y-12">
                <div className="flex flex-col sm:flex-row gap-6">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder={t("Yname")}
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none text-sm md:text-base"
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder={t("Ymail")} 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none text-sm md:text-base"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <input 
                    type="text" 
                    name="company" 
                    placeholder={t("Ycompany")} 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none text-sm md:text-base"
                  />
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder={t("Yphone")} 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none text-sm md:text-base"
                  />
                </div>
                <div>
                  <textarea 
                    name="object" 
                    id="object" 
                    placeholder={t("Ymessage")}
                    className="w-full min-h-32 md:min-h-52 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none"
                  />
                </div>
                <div>
                  <button className="bg-blue-900 text-white w-full text-sm md:text-base py-3 rounded-sm">
                    {t("sendMess")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact