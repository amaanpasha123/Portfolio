"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "./MagicButton";
import GridGlobe from "./GridGlobe";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-6 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ["ReactJS", "ExpressJs", "Typescript", "NEXT.JS"];
    const rightLists = ["Node.JS", "Mongodb", "SQL", "MERN"];

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("amaanpasha23@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-2xl transition duration-300 flex flex-col",
                className
            )}
        >
            {/* Background */}
            {id === 6 ? (
                <div style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    background: "linear-gradient(135deg, #7928ca, #ff0080, #2563eb, #7928ca)",
                    backgroundSize: "300% 300%",
                    animation: "gradientShift 4s ease infinite",
                }}>
                    <style>{`
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `}</style>
                </div>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#04071d] to-[#0c0e23]" style={{ zIndex: 0 }} />
            )}

            {/* Main Image */}
            {img && (
                <div className="absolute inset-0" style={{ zIndex: 1 }}>
                    <img
                        src={img}
                        alt="grid"
                        className={cn("w-full h-full object-cover object-center", imgClassName)}
                    />
                </div>
            )}

            {/* Spare Image */}
            {spareImg && (
                <div
                    className={cn("absolute right-0 -bottom-5", id === 5 && "w-full opacity-80")}
                    style={{ zIndex: 1 }}
                >
                    <img
                        src={spareImg}
                        alt="spare"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            )}

            {/* Content */}
            <div
                className={cn(
                    titleClassName,
                    "flex flex-col h-full p-5 lg:p-10 transition duration-300 group-hover/bento:translate-x-2"
                )}
                style={{ position: "relative", zIndex: 2 }}
            >
                {/* Description */}
                <div className="font-sans font-extralight text-sm lg:text-base text-[#C1C2D3]">
                    {description}
                </div>

                {/* Title */}
                <div className="font-sans text-lg lg:text-2xl max-w-96 font-bold text-white mt-2">
                    {title}
                </div>
                {id === 2 && (
                    <div className="absolute inset-0 top-10 overflow-hidden">
                        <GridGlobe />
                    </div>
                )}

                {/* Tech Stack for id=3 */}
                {id === 3 && (
                    <div className="flex gap-2 lg:gap-4 w-fit mt-4">
                        <div className="flex flex-col gap-2 lg:gap-3">
                            {leftLists.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-2 text-xs lg:text-sm rounded-lg bg-[#10132E] text-white text-center"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 lg:gap-3 mt-4">
                            {rightLists.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-2 text-xs lg:text-sm rounded-lg bg-[#10132E] text-white text-center"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Copy Email Button for id=6 */}
                {id === 6 && (
                    <div className="mt-5" style={{ position: "relative", zIndex: 10 }}>
                        <MagicButton
                            title={copied ? "Email Copied!" : "Copy my email address"}
                            icon={<IoCopyOutline />}
                            position="left"
                            handleClick={handleCopy}
                            otherClasses="!bg-[#161A31]"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};