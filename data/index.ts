export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

const commonClasses = {
    card: "rounded-2xl border border-white/[0.08] overflow-hidden",
    title: "font-semibold text-white",
    image: "object-cover",
};


export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication",
        description: "Building scalable and modern web experiences.",
        className: `lg:col-span-3 md:col-span-6 md:row-span-2 min-h-[500px] ${commonClasses.card}`,
        imgClassName: `w-full h-full ${commonClasses.image}`,
        titleClassName: `justify-end items-start text-left px-4 pb-4 text-xl md:text-2xl ${commonClasses.title}`,
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Flexible with time zone communications",
        description: "Remote collaboration worldwide.",
        className: `lg:col-span-2 md:col-span-6 md:row-span-2 min-h-[500px] ${commonClasses.card}`,  // ← row-span-2 + taller for globe
        imgClassName: commonClasses.image,
        titleClassName: `justify-start px-4 py-4 text-lg ${commonClasses.title}`,
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: `lg:col-span-2 md:col-span-3 md:row-span-1 min-h-[200px] ${commonClasses.card}`,
        imgClassName: "",
        titleClassName: `justify-center text-center text-lg ${commonClasses.title}`,
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Turning ideas into seamless full-stack digital experiences",
        description: "Passionate about building modern frontend interfaces, scalable backend systems, and efficient database architectures.",
        className: `lg:col-span-3 md:col-span-3 md:row-span-1 min-h-[250px] ${commonClasses.card}`,
        imgClassName: "absolute right-0 bottom-0 opacity-70 object-contain",
        titleClassName: `justify-start px-4 py-4 text-base md:text-lg ${commonClasses.title}`,
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Building scalable full-stack applications with modern technologies",
        description: "Experienced in frontend development, backend architecture, APIs, and database management.",
        className: `lg:col-span-3 md:col-span-6 md:row-span-1 min-h-[220px] ${commonClasses.card}`,
        imgClassName: "absolute right-0 bottom-0 md:w-72 w-40 opacity-90",
        titleClassName: `justify-center md:justify-start text-xl px-4 ${commonClasses.title}`,
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "Reach out to me today.",
        className: `lg:col-span-2 md:col-span-6 md:row-span-1 min-h-[220px] ${commonClasses.card}`,  // ← md:col-span-6 full width on tablet
        imgClassName: "",
        titleClassName: `justify-center text-center text-lg px-4 ${commonClasses.title}`,
        img: "",
        spareImg: "",
    },
];



export const projects = [
    {
        id: 1,
        title: "EventBooking Website",
        des:
            "Explore the Event booking SaaS project you could book your own events over here",
        img: "/event.jpg",
        iconLists: [
            "/re.svg",
            "/tail.svg",
            "/ts.svg",
            "/node.png",
            "/MongoDB.svg",
        ],
        link: "https://www.amaanbook.shop/",
    },

    {
        id: 2,
        title: "Yoom Video Conference App",
        des:
            "A modern real-time meeting and conferencing platform.",
        img: "/p2.svg",
        iconLists: [
            "/next.svg",
            "/tail.svg",
            "/ts.svg",
            "/stream.svg",
            "/c.svg",
        ],
        link: "/ui.yoom.com",
    },

    {
        id: 3,
        title: "AI Image SaaS App",
        des:
            "AI-powered image generation and editing platform.",
        img: "/p3.svg",
        iconLists: [
            "/re.svg",
            "/tail.svg",
            "/ts.svg",
            "/three.svg",
            "/c.svg",
        ],
        link: "/ui.aiimg.com",
    },

    {
        id: 4,
        title: "Animated Apple iPhone Website",
        des:
            "Apple-inspired animated website using GSAP and Three.js.",
        img: "/p4.svg",
        iconLists: [
            "/next.svg",
            "/tail.svg",
            "/ts.svg",
            "/three.svg",
            "/gsap.svg",
        ],
        link: "/ui.apple.com",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism and dedication stood out throughout the project.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },

    {
        quote:
            "Exceptional frontend skills and attention to detail. Highly recommended.",
        name: "Sarah Williams pasha",
        title: "Product Manager",
    },

    {
        quote:
            "Delivered everything on time with excellent communication.",
        name: "David Brown",
        title: "Startup Founder",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },

    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },

    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },

    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },

    {
        id: 5,
        name: "docker",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "MERN Stack & Full-Stack Development",
        desc:
            "Building scalable full-stack applications using MongoDB, Express.js, React, Next.js, and Node.js.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },

    {
        id: 2,
        title: "Backend Development & Database Management",
        desc:
            "Designing secure REST APIs, authentication systems, and optimized database architectures with MongoDB and SQL.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },

    {
        id: 3,
        title: "Deployment, CI/CD & Cloud Integration",
        desc:
            "Deploying modern applications with Docker, GitHub, Vercel, and automated CI/CD workflows for production-ready systems.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },

    {
        id: 4,
        title: "Bug Fixing & Performance Optimization",
        desc:
            "Improving application performance, debugging complex issues, and creating responsive, user-friendly interfaces.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },

    {
        id: 2,
        img: "/twit.svg",
    },

    {
        id: 3,
        img: "/link.svg",
    },
];