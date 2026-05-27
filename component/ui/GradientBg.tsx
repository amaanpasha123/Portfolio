"use client";

import { cn } from "@/lib/utils";

export const BackgroundGradientAnimation = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div
            className={cn("absolute inset-0 rounded-3xl", containerClassName)}
            style={{ background: "#0c1020", overflow: "hidden" }}
        >
            {/* Blob 1 - Purple */}
            <div style={{
                position: "absolute",
                top: "-10%",
                left: "-10%",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                background: "rgba(168, 85, 247, 0.8)",
                filter: "blur(70px)",
            }} />

            {/* Blob 2 - Blue */}
            <div style={{
                position: "absolute",
                bottom: "-10%",
                right: "-10%",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                background: "rgba(59, 130, 246, 0.8)",
                filter: "blur(70px)",
            }} />

            {/* Blob 3 - Pink */}
            <div style={{
                position: "absolute",
                top: "40%",
                left: "40%",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                background: "rgba(236, 72, 153, 0.7)",
                filter: "blur(70px)",
            }} />

            {/* Content */}
            <div className={cn("relative z-10", className)}>
                {children}
            </div>
        </div>
    );
};