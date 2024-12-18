import { iconSkills } from '@/constants/global'

const Skills = () => {
  return (
    <div>
        <h3 className='mb-3 text-gray-500'>
            - Mes technologies :
        </h3>
        <div className="grid grid-cols-5 gap-4">
            { iconSkills.map((skill) => {
                return (
                    <div 
                        key={skill.id}
                        className="col-span-1 flex flex-col items-center justify-center gap-2 border w-20 h-20 rounded-primary hover:shadow-sm hover:scale-105"
                    >
                        <img 
                            src={skill.link} 
                            alt={skill.name} 
                            className="w-8 h-8" 
                        />
                        <span className="text-xs font-medium">
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