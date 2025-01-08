import { AtSign, Facebook, Github, Gitlab, Linkedin, LoaderCircle, MoveRight, Phone } from "lucide-react"
import contactBg from "@/assets/bg5.svg"
import { useTranslation } from "react-i18next"
import Swal from 'sweetalert2'
import { useState } from "react"

const Contact = () => {
  const { t } = useTranslation()
  const [ loading, setLoading ] = useState<boolean>(false)

  const onSubmit = async (event:any) => {
    setLoading(true)
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const accessKey = import.meta.env.VITE_CONTACT_KEY;

    formData.append("access_key", accessKey);
    const object = Object.fromEntries(formData);
    const data = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: data
    }).then((res) => res.json());

    if (res.success) {
      setLoading(false)
      const name = res.data.name
      Swal.fire({
        title: t("congrat") + name + " !",
        text: t("succesTextC"),
        icon: "success",
        confirmButtonColor: "hsl(var(--accent))",
        confirmButtonText: t("cool")
      })
      form.reset();
    }else{
      setLoading(false)
      Swal.fire({
        title: t("oops"),
        text: t("errorTextC"),
        icon: 'error',
        confirmButtonColor: "hsl(var(--accent))",
        confirmButtonText: t("agree")
      })
    }
  };

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
              <div className="bg-gray-700 hover:bg-gray-600 p-3 rounded-primary">
                <Facebook size={22} />
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 p-3 rounded-primary">
                <Linkedin size={22} />
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 p-3 rounded-primary">
                <Github size={22} />
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 p-3 rounded-primary">
                <Gitlab size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="container grid grid-cols-3 gap-4 pt-12 lg:pt-28 pb-14 sm:pb-20 lg:pb-48">
          <div className="col-span-3 sm:flex justify-between mb-6 lg:mb-0 lg:block lg:col-span-1 lg:space-y-6">
            <h2 className="max-w-[350px] text-xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-0">
              You are one step closer to build your
              perfect product .
            </h2>
            <h3 className="hidden lg:flex items-center gap-4 text-xl">
              <span className="text-accent">
                Juste send me a message
              </span>
              <span>
                <MoveRight size={28} className="text-accent" />
              </span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-accent-50 rounded-primary p-5">
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
                <div className="bg-accent-50 rounded-primary p-5">
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
            <div className="bg-white shadow-md rounded-primary overflow-hidden lg:absolute w-full lg:w-[650px] lg:-top-72">
              <div className="flex items-center justify-center bg-accent-50 h-24 text-center">
                <p className="text-sm md:text-base">
                  Write me a few words about your project,<br />
                  a proposale for you within 24 hours
                </p>
              </div>
              <form onSubmit={onSubmit} className="px-2 md:px-6 py-6 md:py-12 space-y-8 md:space-y-12">
                <div className="flex flex-col sm:flex-row gap-6">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder={t("Yname")}
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-primary border-none outline-none text-sm md:text-base"
                    required
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder={t("Ymail")} 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-primary border-none outline-none text-sm md:text-base"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <input 
                    type="text" 
                    name="company" 
                    placeholder={t("Ycompany")} 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-primary border-none outline-none text-sm md:text-base"
                  />
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder={t("Yphone")} 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-primary border-none outline-none text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <textarea 
                    name="message" 
                    id="object" 
                    placeholder={t("Ymessage")}
                    className="w-full min-h-32 md:min-h-52 bg-gray-100 px-3 py-4 rounded-primary border-none outline-none"
                    required
                  />
                </div>
                <div>
                  <button className="bg-accent text-white w-full text-sm md:text-base py-3 rounded-primary flex items-center justify-center">
                    {loading ?
                      <div className="flex items-center space-x-2" >
                        <LoaderCircle className="animate-spin" />
                        <p>
                          {t("load")}
                        </p>
                      </div> 
                      : 
                      <p>
                        {t("sendMess")}
                      </p>
                    }
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