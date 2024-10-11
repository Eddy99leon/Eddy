import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { navItems } from "@/constants/menu.ts"
import { Facebook, Github, Gitlab, Grip, Languages, Linkedin, ScanFace, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [ t, i18n ] = useTranslation("global")

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div>
      <div className="bg-gray-900 text-gray-200">
        <div className="container py-2 flex justify-between items-center">
          <div className="flex gap-3">
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
          <div className="flex gap-3 text-sm">
            <div className="space-x-1">
              <span className="">
                Email:
              </span>
              <span className="font-meduim">
                Eddy@gmail.com
              </span>
            </div>
            <div className="space-x-1">
              <span className="">
                Phone:
              </span>
              <span className="font-meduim">
                034 50 117 05
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-5 border-b shadow">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-14">
            <div className="flex items-center gap-1">
              <div>
                <ScanFace size={32} />
              </div>
              <p className="text-3xl font-medium">
                Eddy
              </p>
            </div>
            <div className="flex gap-6">
              {
                navItems.map((item) => {
                  return(
                    <Link to={item.link} key={item.id} className=" text-lg">
                      {item.name}
                    </Link>
                  )
                })
              }
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <Languages size={24} />
            </div>
            <div>
              <Settings size={24} />
            </div>
            <div>
              <Grip size={24} />
            </div>
          </div>
        
        </div>
      </div>

      {/* <div>
        <button onClick={() => setTheme("light")}>light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
      </div>
      <div>
        <button onClick={() => changeLang("fr")}>Francais</button>
        <button onClick={() => changeLang("en")}>Anglais</button>
        <button onClick={() => changeLang("mg")}>Malagasy</button>
      </div> */}
    </div>
  );
};

export default Navbar;
