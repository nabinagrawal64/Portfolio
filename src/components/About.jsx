import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

//eslint-disable-next-line
const ServiceCard = ({ index, title, icon }) => (


    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                //eslint-disable-next-line
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />
        
                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>

            </div>
        </motion.div>
    </Tilt>
);

//eslint-disable-next-line
const About = () => {
    return (
        <>
            {/* heading */}
            <motion.div variants={textVariant} >
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            {/* content */}
            <motion.p 
                variants={fadeIn("","",0.1,1)} 
                className='mt-4 max-w-3xl text-secondary sm:text-[16px] lg:text-[17px] text-[15px] sm:leading-[25px] lg:leading-[30px] leading-[20px] transition-all duration-200 ease-in-out'
            >
                I’m a skilled software developer with experience in JavaScript and
                expertise in frameworks like React, Node.js, and
                Express.js. 
                I’m a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                Let’s work together to bring your ideas to life!
            </motion.p>
            
            {/* service cards */}
            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

//eslint-disable-next-line
export default  SectionWrapper(About, "about");