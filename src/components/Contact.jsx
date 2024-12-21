import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//eslint-disable-next-line
const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // AT3vgqrOqcq9Ky9V4
        // template_email
        // service_email
        
        await emailjs.send(
            "service_email",
            "template_email",
            {
                from_name: form.name,
                to_name: "Nabin",
                from_email: form.email,
                to_email: "nabinagrawal64@gmail.com",
                message: form.message,
            },
            "AT3vgqrOqcq9Ky9V4",
        )
        .then(
            () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },(error) => {
                setLoading(false);
                console.error(error);
                alert("Ahh, something went wrong. Please try again.");
            }
        );
            
        
    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">

                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>

                <form ref={formRef} 
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-3 mt-8 ">

                    {/* Name  */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    
                    {/* Email */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className='bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    
                    {/* Message */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className='bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    
                    {/* Submit */}
                    <button 
                        type="submit" 
                        className='bg-tertiary py-2 px-7 text-white rounded-lg outline-none w-fit shadow-md shadow-primary border-none font-bold'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  " >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

//eslint-disable-next-line
export default SectionWrapper(Contact,"contact")