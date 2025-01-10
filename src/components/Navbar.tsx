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

      <div className="fixed w-full z-10 bg-black text-gray-200 border-b border-tprimary-300">
        <div className="container py-2 flex justify-between items-center">
          <div className="flex gap-3">
            <a 
              href="https://web.facebook.com/profile.php?id=100094137014767"
              target="_blank"
            >
              <Facebook className="size-4" />
            </a>
            <a 
              href="https://mg.linkedin.com/in/eddy-andriamisaina-863431299"
              target="_blank"
            >
              <Linkedin className="size-4" />
            </a>
            <a 
              href="https://github.com/Eddy99leon"
              target="_blank"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://github.com/Eddy99leon"
              target="_blank"
            >
              <Gitlab className="size-4" />
            </a>
          </div>
          <div className="flex gap-3 text-xs sm:text-sm">
            <div className="space-x-1">
              <span className="">
                {t("email")}:
              </span>
              <span className="font-meduim text-gray-300">
                leoneddy504@gmail.com
              </span>
            </div>
            <div className="hidden md:block space-x-1">
              <span className="">
                {t("phone")}:
              </span>
              <span className="font-meduim text-gray-300">
                +261 34 50 117 05
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background py-3 sm:py-4 lg:py-5 border-b border-tprimary-300 shadow pt-11 sm:pt-12 lg:pt-14">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-14">
            <div className="flex items-center gap-1">
              <div>
                <ScanFace className="size-6 sm:size-7 lg:size-8 text-accent" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-wider">
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
                      className={`text-base lg:text-lg relative transition-all duration-300 ${
                        isActive
                          ? "text-accent"
                          : "text-tprimary-100 hover:text-accent"
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
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-6">
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
