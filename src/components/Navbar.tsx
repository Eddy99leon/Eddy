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

      <div className="fixed w-full z-10 bg-black text-gray-200">
        <div className="container py-2 flex justify-between items-center">
          <div className="flex gap-3">
            <a 
              href="https://web.facebook.com/profile.php?id=100094137014767"
              target="_blank"
            >
              <Facebook size={17} />
            </a>
            <a 
              href="https://mg.linkedin.com/in/eddy-andriamisaina-863431299"
              target="_blank"
            >
              <Linkedin size={17} />
            </a>
            <a 
              href="https://github.com/Eddy99leon"
              target="_blank"
            >
              <Github size={17} />
            </a>
            <a
              href="https://github.com/Eddy99leon"
              target="_blank"
            >
              <Gitlab size={17} />
            </a>
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

      <div className="bg-background py-5 border-b shadow pt-14">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-14">
            <div className="flex items-center gap-1">
              <div>
                <ScanFace size={32} className="text-accent" />
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
                          ? "text-accent"
                          : "text-gray-500 hover:text-accent"
                      }`}
                    >
                      {t(`${item.name}`)}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-all duration-300"></span>
                      )}
                    </Link>
                  )
                })
              }
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="">
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
