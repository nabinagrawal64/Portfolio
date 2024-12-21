import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"


const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
                {/* round line */}
                <div className="flex flex-col items-center justify-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                
                {/* name and about */}
                <div >
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I’m &nbsp;
                        <span className="text-[#915eff]"> 
                            Nabin
                        </span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I am a full-stack developer &nbsp; 
                        <br className="sm:block hidden" />
                        with a passion for creating web applications.
                    </p>
                </div>
                
            </div>

            <ComputersCanvas/>

            <div className="absolute bottom-10 sm:bottom-0 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start justify-center p-2">
                        <motion.dev
                            animate = {{
                                y: [0, 30, 0],
                            }}
                            transition = {{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                            className="w-3 h-3 bg-secondary rounded-full mb-7"
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero