"use client";

import React from "react";

interface NavItem {
    name: string;
    link: string;
    icon?: React.ReactNode;
}

export const FloatingNav = ({
    navItems,
}: {
    navItems: NavItem[];
}) => {
    return (
        <div className="fixed top-6 inset-x-0 z-50 flex justify-center">
            <div className="flex gap-6 rounded-full border border-neutral-200 bg-white px-6 py-3 shadow-lg dark:border-white/[0.2] dark:bg-black">
                {navItems.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-2 text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};