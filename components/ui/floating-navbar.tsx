"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = current - (previous !== undefined ? previous : 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        exit={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto z-[5000] items-center justify-center px-4",
          className
        )}
      >
        {/* Main Nav Container */}
        <div className="flex items-center justify-center gap-4 rounded-full border border-white/[0.2] bg-[#0b0d19]/70 backdrop-blur-xl px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5),_0_0_20px_rgba(130,100,255,0.05)] transition-all duration-300 hover:border-purple-500/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6),_0_0_30px_rgba(130,100,255,0.1)]">

          {/* Navigation Links Mapping */}
          <nav className="flex items-center gap-1.5">
            {navItems.map((navItem, idx: number) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                className="relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium text-neutral-400 transition-all duration-200 hover:text-purple-300 hover:bg-white/[0.03] group"
              >
                <span className="block text-neutral-400 group-hover:text-purple-400 transition-colors duration-200">
                  {navItem.icon}
                </span>
                <span className="hidden sm:block">
                  {navItem.name}
                </span>

                {/* Micro hover indicator under the links */}
                <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </nav>

          {/* Minimalist Divider */}
          <div className="h-4 w-px bg-white/[0.08]" />



        </div>
      </motion.div>
    </AnimatePresence>
  );
};