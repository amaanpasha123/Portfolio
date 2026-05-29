"use client";
"use strict";
exports.__esModule = true;
var hi2_1 = require("react-icons/hi2");
var react_1 = require("react");
var Spotlight_1 = require("./ui/Spotlight");
var utils_1 = require("@/lib/utils");
var TextGenerateEffect_1 = require("./ui/TextGenerateEffect");
var MagicButton_1 = require("./ui/MagicButton");
var Hero = function () {
    return (react_1["default"].createElement("section", { style: { color: "white" }, className: "relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black px-6 text-center" },
        react_1["default"].createElement("div", { className: utils_1.cn("absolute inset-0 z-0", "[background-size:20px_20px]", "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]") }),
        react_1["default"].createElement("div", { className: "pointer-events-none absolute inset-0 z-10 bg-black/40" }),
        react_1["default"].createElement("div", { className: "absolute inset-0 z-20" },
            react_1["default"].createElement(Spotlight_1.Spotlight, { className: "-top-20 -left-40", fill: "#3b82f6" }),
            react_1["default"].createElement(Spotlight_1.Spotlight, { className: "top-0 left-20", fill: "#8b5cf6" })),
        react_1["default"].createElement("div", { className: "relative z-40 flex max-w-4xl flex-col items-center" },
            react_1["default"].createElement("p", { className: "mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400" }, "Full Stack Developer"),
            react_1["default"].createElement("h1", { className: "text-5xl font-bold tracking-tight text-white md:text-7xl" }, "Amaan Pasha"),
            react_1["default"].createElement("div", { className: "mt-8 max-w-3xl" },
                react_1["default"].createElement(TextGenerateEffect_1.TextGenerateEffect, { className: "text-center text-lg font-medium leading-relaxed text-white md:text-2xl", words: "Passionate about building modern, scalable, and user-friendly web applications with MERN Stack and Next.js." }),
                react_1["default"].createElement("a", { href: "#project", className: "mt-8" },
                    react_1["default"].createElement(MagicButton_1["default"], { title: "Show My Work", icon: react_1["default"].createElement(hi2_1.HiOutlineCodeBracket, null), position: "right" }))))));
};
exports["default"] = Hero;
