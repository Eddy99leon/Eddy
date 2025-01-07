import { navItems } from "@/constants/global";
import { Facebook, Github, Gitlab, ScanFace, Linkedin} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Language from "./Language";

const Footer = () => {
  const { t } = useTranslation()
  const location = useLocation();

  return (
    <div>

      <div className="bg_svg2 bg-cover">
        <div className="container md:flex justify-between gap-4 text-white py-6 sm:py-10 md:py-14">
          {/* first */}
          <div className="mb-6 sm:mb-8 md:mb-0">
            <div>
              <div className="flex items-center gap-1 mb-2 md:mb-4">
                <div>
                  <ScanFace className="text-accent size-5 sm:size-6" />
                </div>
                <p className=" text-xl sm:text-2xl font-medium tracking-wider">
                  Ed.
                </p>
              </div>
              <p className="max-w-[400px] text-gray-400 text-sm sm:text-base">
                {t("footerDesc")}
              </p>
            </div>
          </div>
          {/* second */}
          <div>
            <div className=" max-w-[300px] flex justify-between gap-4 mb-6 md:mb-10 text-base">
              {
                navItems.map((item) => {
                  const isActive = location.pathname === item.link;
                  return(
                    <Link 
                      to={item.link} 
                      key={item.id} 
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-accent"
                          : "text-gray-200 hover:text-accent"
                      }`}
                    >
                      {t(`${item.name}`)}
                    </Link>
                  )
                })
              }
            </div>
            <div className="flex gap-8 text-gray-400">
              <a 
                href="https://web.facebook.com/profile.php?id=100094137014767"
                target="_blank"
              >
                <Facebook className="size-5 sm:size-6" />
              </a>
              <a 
                href="https://mg.linkedin.com/in/eddy-andriamisaina-863431299"
                target="_blank"
              >
                <Linkedin className="size-5 sm:size-6" />
              </a>
              <a 
                href="https://github.com/Eddy99leon"
                target="_blank"
              >
                <Github className="size-5 sm:size-6" />
              </a>
              <a 
                href="https://github.com/Eddy99leon"
                target="_blank"
              >
                <Gitlab className="size-5 sm:size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black border-t border-gray-700">
        <div className="container flex justify-between items-center text-white py-4">
          <p className="text-xs sm:text-base">
            Copyright. Tous droits sont reservés.
          </p>
          <div>
            <Language />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer