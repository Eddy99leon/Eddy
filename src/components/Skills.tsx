import { iconSkills } from '@/constants/global'

const Skills = () => {
  return (
    <div>
        <h3 className='mb-3 text-gray-500 text-sm sm:text-base'>
            - Mes technologies :
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            { iconSkills.map((skill) => {
                return (
                    <div 
                        key={skill.id}
                        className="col-span-1 flex flex-col items-center justify-center gap-2 border size-[74px] sm:size-20 rounded-primary hover:shadow-sm hover:scale-105"
                    >
                        <img 
                            src={skill.link} 
                            alt={skill.name} 
                            className=" size-5 sm:size-6 md:size-8" 
                        />
                        <span className="text-xs font-medium text-gray-900">
                            {skill.name}
                        </span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills