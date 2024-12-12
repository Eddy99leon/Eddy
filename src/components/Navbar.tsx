import { useTranslation } from "react-i18next";
import { navItems } from "@/constants/global"
import { Facebook, Github, Gitlab, Linkedin, ScanFace } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Language from "./Language";
import Setting from "./Setting";
import Sidebar from "./Sidebar";


const Navbar = () => {
  const { t } = useTranslation()
  const location = useLocation();

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
                {t("email")}:
              </span>
              <span className="font-meduim">
                leoneddy504@gmail.com
              </span>
            </div>
            <div className="hidden md:block space-x-1">
              <span className="">
                {t("phone")}:
              </span>
              <span className="font-meduim">
                +261 34 50 117 05
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-5 border-b shadow">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-14">
            <div className="flex items-center gap-1">
              <div>
                <ScanFace size={32} className="text-blue-800" />
              </div>
              <p className="text-3xl font-medium tracking-wider">
                Ed.
              </p>
            </div>
            <div className="hidden md:flex gap-6">
              {
                navItems.map((item) => {
                  const isActive = location.pathname === item.link;
                  return(
                    <Link 
                      to={item.link} 
                      key={item.id} 
                      className={`text-lg relative transition-all duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-500 hover:text-blue-600"
                      }`}
                    >
                      {t(`${item.name}`)}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transition-all duration-300"></span>
                      )}
                    </Link>
                  )
                })
              }
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <Language />
            </div>
            <div>
              <Setting />
            </div>
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
