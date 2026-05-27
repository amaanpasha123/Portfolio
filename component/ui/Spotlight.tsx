"use client";

import { motion } from "framer-motion";

type SpotlightProps = {
    className?: string;
};

export const Spotlight = ({
    className = "",
}: SpotlightProps) => {
    return (
        <motion.div
            className={`pointer-events-none absolute z-10 ${className}`}

            initial={{
                x: "-20%",
                y: "-20%",
                opacity: 0.2,
            }}

            animate={{
                x: ["0%", "60%", "20%", "80%", "0%"],
                y: ["0%", "20%", "60%", "10%", "0%"],

                background: [
                    "radial-gradient(circle, rgba(59,130,246,0.9) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(168,85,247,0.9) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(6,182,212,0.9) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(236,72,153,0.9) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(59,130,246,0.9) 0%, transparent 70%)",
                ],
            }}

            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
            }}

            style={{
                width: "700px",
                height: "700px",
                borderRadius: "9999px",
                filter: "blur(100px)",
            }}
        />
    );
};