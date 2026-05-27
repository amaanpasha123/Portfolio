"use client";

import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const wordsArray = words.split(" ");

    return (
        <div className={cn("font-medium", className)}>
            {wordsArray.map((word, idx) => (
                <span
                    key={idx}
                    className={`inline-block mr-2 opacity-0 ${idx >= wordsArray.length - 2
                            ? "text-purple-400"
                            : "text-white"
                        }`}
                    style={{
                        animationName: "fadeInUp",
                        animationDuration: "0.4s",
                        animationDelay: `${idx * 0.06}s`,
                        animationFillMode: "forwards",
                        animationTimingFunction: "ease-out",
                    }}
                >
                    {word}
                </span>
            ))}

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                        filter: blur(8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                        filter: blur(0px);
                    }
                }
            `}</style>
        </div>
    );
};