import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc";
import { experiences} from "../constants";
import { textVariant } from "../utils/motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//eslint-disable-next-line
const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className="flex justify-center items-center w-[100%] h-[100%]">
                <img 
                    src={experience.icon} 
                    alt="experience.company_name" 
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
    >   
        {/* experience haeding and subheading */}
        <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            <h4 className="text-[#ff9e00] text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</h4>
        </div>

        {/* cards */}
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
                <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)
//eslint-disable-next-line
const Experience = () => {
    return (
        <>
            {/* haeding and subheading */}
            <motion.div variants={textVariant} >
                <p className={styles.sectionSubText}>What i have done so far</p>
                <h2 className={styles.sectionHeadText}>My Work Experience.</h2>
            </motion.div>
        
            {/* timeline */}
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

//eslint-disable-next-line
export default SectionWrapper(Experience,"work")