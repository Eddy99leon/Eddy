import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Grip, ScanFace } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
        <Sheet>
            <SheetTrigger>
                <Grip size={24} />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                <SheetTitle>
                    <div className="flex items-center gap-1">
                        <div>
                            <ScanFace size={22} className="text-blue-600" />
                        </div>
                        <p className="text-xl font-medium text-gray-700">
                            Eddy
                        </p>
                    </div>
                </SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Sidebar