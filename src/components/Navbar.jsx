import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, myLogo } from "../assets";
// import { logo } from "../assets";
const Navbar = () => {

    const [active, setActive] = useState(" ");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto"> 
                {/* logo and name */}
                <Link to="/" 
                    className="flex items-center gap-2" 
                    onClick={() => {
                            setActive(" ");
                            window.scrollTo(0,0);
                        }
                    }
                >
                    <img src={myLogo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white flex text-[18px] font-bold cursor-pointer">
                        Nabin &nbsp; <span className="sm:block hidden">| Agrawal</span>
                    </p>
                </Link>

                {/* about work contact*/}
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link, index) => (
                        <li key={index} 
                            className={`${
                                    active === link.id 
                                    ? "text-white" 
                                    : 'text-secondary'
                                }
                                cursor-pointer hover:text-white text-[18px] font-medium
                                transition-all duration-200 ease-in-out
                            `}
                            
                            onClick={() => {
                                setActive(link.title);
                                window.scrollTo(0,0);
                                }
                            }
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))} 
                </ul>

                {/* menu icon for small devices */}
                <div className="flex items-center justify-end flex-1 sm:hidden"> 
                    <img src={toggle ? close : menu} alt="menu" 
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => {
                            setActive(() => setToggle(!toggle));
                        }} 
                    />

                    <div className={`${!toggle ? "hidden" : "flex" } 
                        p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <li key={index} 
                                    className={`${
                                            active === link.id 
                                            ? "text-white" 
                                            : 'text-secondary'
                                        }
                                        cursor-pointer hover:text-white text-[16px] font-medium font-poppins
                                        transition-all duration-200 ease-in-out
                                    `}
                                    
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(!toggle);
                                        }
                                    }
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))} 
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
