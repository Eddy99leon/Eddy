import { Facebook, Github, Gitlab, ScanFace, Languages, Linkedin, Settings } from "lucide-react";

const Footer = () => {
  return (
    <div>

      <div className="bg_svg2">
        <div className="container flex justify-between gap-4 text-white py-16">
          {/* first */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <div>
                  <ScanFace size={28} />
                </div>
                <p className="text-2xl font-medium">
                  Eddy
                </p>
              </div>
              <p className="max-w-[400px] text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing.
                sit amet consectetur adipisicing.
                Lorem ipsum  consectetur adipisicing.
                Lorem ipsum dolor sit amet consectetur adipisicing.
                sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="flex gap-4">
              <div>
                <Facebook size={17} />
              </div>
              <div>
                <Linkedin size={17} />
              </div>
              <div>
                <Github size={17} />
              </div>
              <div>
                <Gitlab size={17} />
              </div>
            </div>
          </div>
          {/* second */}
          <div className="">
            <div className="flex gap-6 mb-6">
              <div>
                Home
              </div>
              <div>
                Contact
              </div>
              <div>
                Blog
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-1 items-center">
                <Languages size={20} />
                <p>
                  Language
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <Settings size={20} />
                <p>
                  Settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-black border-t border-gray-700">
        <div className="container flex justify-between items-center text-white py-4">
          <div>
            copyright. All droits sont reserved
          </div>
          <div>
            Coder avec le coeur par Eddy A.
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer