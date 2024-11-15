import { AtSign, Facebook, Github, Gitlab, Linkedin, MoveRight, Phone } from "lucide-react"
import contactBg from "@/assets/bg5.svg"

const Contact = () => {
  return (
    <div>
      <div 
        className="bg-cover bg-center text-gray-100" 
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="w-full h-full bg-gray-900/80">
          <div className="container space-y-24 pt-48 pb-10">
            <div className="space-y-2">
              <h1 className="text-5xl font-medium">
                Contact Me
              </h1>
              <h3 className="text-xl">
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
        <div className="container grid grid-cols-3 gap-4 pt-28 pb-48">
          <div className="col-span-1 space-y-6">
            <h2 className="text-4xl font-medium">
              You are one step closer to build your
              perfect product .
            </h2>
            <h3 className="flex items-center gap-4 text-xl">
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
                    Phone
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
                    Email
                  </h1>
                  <p className="text-gray-600">
                    Eddy@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 w-full flex justify-end relative">
            <div className="bg-white shadow-md rounded-md absolute w-[650px] -top-72">
              <div className="flex items-center justify-center bg-blue-50 h-24 text-center">
                <p>
                  Write me a few words about your project and i'll prepare <br />
                  a proposale for you within 24 hours
                </p>
              </div>
              <form className="px-6 py-12 space-y-12">
                <div className="flex gap-6">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none"
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none"
                  />
                </div>
                <div className="flex gap-6">
                  <input 
                    type="text" 
                    name="company" 
                    placeholder="Your Company" 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none"
                  />
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="Your Phone" 
                    spellCheck="false"
                    className="flex-1 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    name="object" 
                    id="object" 
                    placeholder="Enter Message" 
                    className="w-full min-h-52 bg-gray-100 px-3 py-4 rounded-sm border-none outline-none"
                  />
                </div>
                <div>
                  <button className="bg-blue-900 text-white w-full py-3 rounded-sm">
                    Send Message
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