
import { CapabilityType } from "@/@types/global"
import { getIcon } from "@/lib"

const CapabilityCard = ({ capability }: { capability: CapabilityType }) => {
  return (
    <div className={`col-span-1 ${capability.isAccent ? "bg-accent" : "bg-gray-700"} w-full h-full py-4 rounded-primary p-1 sm:p-2 md:p-3 lg:p-4`}>
        <div className={`${capability.isAccent ? "bg-accent-100" : "bg-gray-600"} w-fit rounded-primary p-3 mb-4`}>
            {getIcon(capability.icon)}
        </div>
        <div className="">
            <p className="text-gray-300 text-xs md:text-sm lg:text-base">
              {capability.label}
            </p>
            <h2 className="text-gray-100 text-xs sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap font-medium">
              {capability.title}
            </h2>
        </div>
    </div>
  )
}

export default CapabilityCard