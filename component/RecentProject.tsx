import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
    return (
        /* FIXED: Added id="projects" to link smoothly with your Navbar anchors */
        <div id="projects" className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
            {/* Header Section */}
            <h1 className="heading text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                A small selection of{" "}
                <span className="relative inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
                    recent projects
                    <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur-[1px]"></span>
                </span>
            </h1>

            {/* Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-20 justify-items-center items-center mt-24 w-full">
                {projects.map((item) => (
                    <div
                        className="lg:w-[540px] lg:h-[540px] sm:w-[460px] sm:h-[460px] w-[90vw] h-[90vw] flex items-center justify-center group"
                        key={item.id}
                    >
                        <PinContainer
                            title={item.title}
                            href={item.link}
                        >
                            {/* Card Wrapper: Sized systematically as a square frame */}
                            <div className="flex flex-col p-5 bg-[#0b0d19]/80 backdrop-blur-md border border-white/[0.08] rounded-3xl lg:w-[540px] lg:h-[540px] sm:w-[460px] sm:h-[460px] w-[90vw] h-[90vw] transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-[0_0_50px_rgba(130,100,255,0.05)]">

                                {/* Image Showcase Area */}
                                <div className="relative flex items-center justify-center w-full overflow-hidden h-[50%] mb-5 rounded-2xl bg-[#13162D] shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] flex-shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#13162D] via-transparent to-transparent z-[11] opacity-60 pointer-events-none" />

                                    <img
                                        src="/bg.png"
                                        alt="background"
                                        className="w-full h-full object-cover opacity-20 absolute inset-0 z-0"
                                    />

                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-all duration-500 group-hover:scale-[1.05]"
                                    />
                                </div>

                                {/* Content Details Section */}
                                <div className="flex flex-col flex-1 px-2 min-h-0">
                                    {/* Project Title */}
                                    <h2 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1 tracking-tight text-white group-hover:text-purple-300 transition-colors duration-300">
                                        {item.title}
                                    </h2>

                                    {/* Project Description */}
                                    <p className="lg:text-base text-sm font-light leading-relaxed mt-3 text-[#9EA3C0] line-clamp-3 overflow-hidden text-ellipsis">
                                        {item.des}
                                    </p>

                                    {/* Footer Section */}
                                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/[0.03] flex-shrink-0">

                                        {/* Dynamic Layered Stack Icons */}
                                        <div className="flex items-center pl-2">
                                            {item.iconLists.map((icon, index) => (
                                                <div
                                                    key={index}
                                                    className="border border-white/10 rounded-full bg-[#0f1123] lg:w-11 lg:h-11 w-9 h-9 flex justify-center items-center shadow-md transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_0_14px_rgba(203,172,249,0.35)] hover:-translate-y-1"
                                                    style={{
                                                        transform: `translateX(-${6 * index}px)`,
                                                        zIndex: item.iconLists.length - index
                                                    }}
                                                >
                                                    <img
                                                        src={icon}
                                                        alt="tech stack"
                                                        className="p-2 object-contain w-full h-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Interactive Call to Action */}
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-center items-center gap-2 group/cta cursor-pointer py-2 px-4 rounded-xl hover:bg-white/[0.04] transition-all duration-200"
                                        >
                                            <span className="lg:text-sm text-xs font-semibold text-purple-400 transition-all duration-200 group-hover/cta:text-purple-300">
                                                Check Live Site
                                            </span>

                                            <FaLocationArrow
                                                className="transition-all duration-300 transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                                                color="#CBACF9"
                                                size={12}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;