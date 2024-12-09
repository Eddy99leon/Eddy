import { iconSkills } from '@/constants/global'

const Skills = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <h3 className='mb-1 text-gray-500'>
                - Languages :
            </h3>
            <div className="flex flex-wrap gap-3">
                { iconSkills.filter((i) => i.type == "language").map((skill) => {
                    return (
                        <div 
                            key={skill.id} 
                            className="flex flex-col items-center justify-center gap-2 border w-16 h-16 rounded hover:shadow-sm hover:scale-105"
                        >
                            <img 
                                src={skill.link} 
                                alt={skill.name} 
                                className="w-6 h-6" 
                            />
                            <span className="text-xs font-medium">
                                {skill.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <h3 className='mb-1 text-gray-500'>
                - Frameworks :
            </h3>
            <div className="flex flex-wrap gap-3">
                { iconSkills.filter((i) => i.type == "framework").map((skill) => {
                    return (
                        <div 
                            key={skill.id} 
                            className="flex flex-col items-center justify-center gap-2 border w-16 h-16 rounded hover:shadow-sm hover:scale-105"
                        >
                            <img 
                                src={skill.link} 
                                alt={skill.name} 
                                className="w-6 h-6" 
                            />
                            <span className="text-xs font-medium">
                                {skill.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <h3 className='mb-1 text-gray-500'>
                - Outils :
            </h3>
            <div className="flex flex-wrap gap-3">
                { iconSkills.filter((i) => i.type == "tool").map((skill) => {
                    return (
                        <div 
                            key={skill.id} 
                            className="flex flex-col items-center justify-center gap-2 border w-16 h-16 rounded hover:shadow-sm hover:scale-105"
                        >
                            <img 
                                src={skill.link} 
                                alt={skill.name} 
                                className="w-6 h-6" 
                            />
                            <span className="text-xs font-medium">
                                {skill.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <h3 className='mb-1 text-gray-500'>
                - Databases :
            </h3>
            <div className="flex flex-wrap gap-3">
                { iconSkills.filter((i) => i.type == "database").map((skill) => {
                    return (
                        <div 
                            key={skill.id} 
                            className="flex flex-col items-center justify-center gap-2 border w-16 h-16 rounded hover:shadow-sm hover:scale-105"
                        >
                            <img 
                                src={skill.link} 
                                alt={skill.name} 
                                className="w-6 h-6" 
                            />
                            <span className="text-xs font-medium">
                                {skill.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Skills