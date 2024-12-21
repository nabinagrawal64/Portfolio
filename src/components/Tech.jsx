import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from "../constants"

// eslint-disable-next-line
const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center gap-10'>
            {technologies.map((tech) => (
                <div key={tech.name} className='w-28 h-28'>
                    <BallCanvas icon={tech.icon} />
                    <p className='flex justify-center items-center font-semibold'>{tech.name}</p>
                </div>
            ))}
        </div>
    )
}

//eslint-disable-next-line
export default SectionWrapper(Tech,"")