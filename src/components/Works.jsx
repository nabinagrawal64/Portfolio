import react from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

//eslint-disable-next-line
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >   
            {/* project images */}
            <div className='relative w-full h-[230px]'>
                {/* project image */}
                <img 
                    src={image} 
                    alt={name} 
                    className='w-full h-full object-cover rounded-2xl'
                />

                {/* github icon */}
                <div className='absolute inset-0 m-3 rounded-2xl flex justify-end card_img_hover'>
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
                    </div>
                </div>
            </div>

            {/* project descriptions */}
            <div className='mt-5'>
                <h3 className='text-[#ff9e00] text-[24px] font-bold'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]' >{description}</p>
            </div>

            {/* project tags */}
            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <span 
                        key={tag.name} 
                        className={`text-[14px] ${tag.color}`}
                    >
                        #{tag.name}
                    </span>
                ))}
            </div>
        </Tilt>
    </motion.div>
)

//eslint-disable-next-line
const Works = () => {
    return (
        <>
            {/* haeding */}
            <motion.div variants={textVariant} >
                <p className={styles.sectionSubText}>
                    My Works
                </p>
                <h2 className={styles.sectionHeadText}>
                    Projects.
                </h2>
            </motion.div>

            {/* subheading */}
            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='max-w-3xl mt-3 text-secondary text-[17px] leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            {/* projects */}
            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
            
        </>
    )
}

//eslint-disable-next-line
export default SectionWrapper(Works, "")