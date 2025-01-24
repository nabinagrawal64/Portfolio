import {
    mobile,
    backend,
    // creator,
    problem,
    web,
    javascript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    // meta,
    // starbucks,
    // tesla,
    mobiledev,
    // shopify,
    // carrent,
    // jobit,
    // tripguide,
    // threejs,
    mern,
    express,
    chatapp,
    weather,
    studynotion,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Probem Solver",
        icon: problem,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "React",
        icon: reactjs,
        iconBg: "#383E56",
        // date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Developed responsive, reusable, and scalable web applications using React.js and Redux, optimizing user experience.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Built highly performant UI components with React and Material-UI/Tailwind CSS, ensuring smooth user interactions and optimized performance.",
        ],
    },
    {
        title: "Basic App Developer",
        company_name: "React Native",
        icon: mobiledev,
        iconBg: "#E6DEDD",
        // date: "Jan 2021 - Feb 2022",
        points: [
            "Developed cross-platform mobile applications using React Native for Android platforms, ensuring consistent performance and user experience.",
            "Contributed to the improvement of app performance by profiling and optimizing React Native code, leading to better responsiveness and memory management.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implemented user authentication with appwrite and clerk. ",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     // date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Full stack Developer",
        company_name: "Mern",
        icon: mern,
        iconBg: "#E6DEDD",
        // date: "Jan 2023 - Present",
        points: [
            "Developed and maintained full-stack web applications using React.js for frontend and Node.js/Express.js for backend, enabling smooth integration between the client and server.",
            "Integrated MongoDB database, designing schemas, managing migrations, and ensuring optimized data flow across the stack.",
            "Created responsive and dynamic user interfaces using React.js, Redux, and Tailwind CSS, ensuring cross-browser compatibility and mobile responsiveness.",
            "Built secure authentication systems with JWT, OAuth, and Passport.js for user login, registration, and authorization.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    // weather app
    {
        name: "Weather App",
        description:
            "A weather app that fetches weather information based on the user's current location using a weather API, requiring location access.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: weather,
        source_code_link: "https://github.com/nabinagrawal64/Weather-App/",
    },

    // chat app
    {
        name: "React Chat App",
        description:
            "A React chat application with real-time interaction powered by Socket.IO, enabling seamless two-person communication.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: chatapp,
        source_code_link: "https://github.com/nabinagrawal64/React-Chat-App/",
    },

    // study notion
    {
        name: "Study Notion",
        description:
            "Study Notion is a platform with dashboards for students, instructors, and admins. Students can buy courses, watch lectures, and complete them. Instructors manage courses, and admins oversee everything. Razorpay API is integrated for secure payments.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express js",
                color: "orange-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: studynotion,
        source_code_link: "https://github.com/nabinagrawal64/Study-Notion-Project/",
    },
];

export { services, technologies, experiences, testimonials, projects };
