"use client";

import { HiOutlineCodeBracket } from "react-icons/hi2";

import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
    return (
        <section
            style={{ color: "white" }}
            className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black px-6 text-center"
        >
            {/* Grid Background */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:20px_20px]",
                    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />

            {/* Dark Overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-black/40" />

            {/* Spotlights — must be above overlay */}
            <div className="absolute inset-0 z-20">
                <Spotlight
                    className="-top-20 -left-40"
                    fill="#3b82f6"
                />
                <Spotlight
                    className="top-0 left-20"
                    fill="#8b5cf6"
                />
            </div>

            {/* Content */}
            <div className="relative z-40 flex max-w-4xl flex-col items-center">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
                    Full Stack Developer
                </p>

                <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
                    Amaan Pasha
                </h1>

                <div className="mt-8 max-w-3xl">
                    <TextGenerateEffect
                        className="text-center text-lg font-medium leading-relaxed text-white md:text-2xl"
                        words="Passionate about building modern, scalable, and user-friendly web applications with MERN Stack and Next.js."
                    />
                    <p className="mt-4 text-center text-white">
                        hi i am Amaan
                    </p>
                    <a href="#project" className="mt-8">
                        <MagicButton
                            title="Show My Work"
                            icon={<HiOutlineCodeBracket />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;