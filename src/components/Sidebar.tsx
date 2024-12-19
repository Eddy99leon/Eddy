import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/constants/global";
import { getIcon } from "@/lib";
import { Grip, ScanFace } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Language from "./Language";

const Sidebar = () => {
  const { t } = useTranslation()
  const location = useLocation();

  return (
    <div>
        <Sheet>
            <SheetTrigger>
                <Grip size={24} />
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col justify-between pt-16">
                <div>
                    <SheetHeader className="mb-8">
                        <SheetTitle>
                            <div className="flex items-center gap-1">
                                <div>
                                    <ScanFace size={26} className="text-accent" />
                                </div>
                                <p className="text-3xl font-medium text-gray-700 tracking-wider">
                                    Ed.
                                </p>
                            </div>
                        </SheetTitle>
                        <SheetDescription className="text-2xl">
                            Navigation rapide.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="mt-4 space-y-3">
                        {
                            navItems.map((item) => {
                                const isActive = location.pathname === item.link;
                                return(
                                    <SheetClose asChild key={item.id}>
                                        <Link 
                                            key={item.id}
                                            to={item.link}
                                            className={`w-full flex items-center bg-accent-50 gap-3 py-4 pl-3 text-lg ${
                                                isActive && "border-r-4 border-accent"
                                            }`}
                                        >
                                            <span className={`${ isActive ? "text-accent" : "text-gray-500"}`}>
                                                {getIcon(item.icon)}
                                            </span>
                                            <p className={`${ isActive ? "text-gray-800" : "text-gray-500"}`}>
                                                {t(`${item.name}`)}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="p-2 border">
                        <Language />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Sidebar