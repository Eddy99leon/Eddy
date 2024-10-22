import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Grip } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
        <Sheet>
            <SheetTrigger>
                <Grip size={24} />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
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