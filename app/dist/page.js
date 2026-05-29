"use strict";
import React from "react";
exports.__esModule = true;
var react_1 = require("react");
var Clients_1 = require("@/component/Clients");
var Experience_1 = require("@/component/Experience");
var Grid_1 = require("@/component/Grid");
var Hero_1 = require("@/component/Hero");
var RecentProject_1 = require("@/component/RecentProject");
var Approach_1 = require("@/component/Approach");
var Floating_nav_1 = require("@/component/ui/Floating-nav");
var data_1 = require("@/data");
var Fotter_1 = require("@/component/Fotter");
function Home() {
    return (react_1["default"].createElement("main", { className: "relative overflow-hidden" },
        react_1["default"].createElement("div", { className: "bg-black w-full" },
            react_1["default"].createElement("div", { className: "max-w-7xl mx-auto sm:px-10 px-5" },
                react_1["default"].createElement(Floating_nav_1.FloatingNav, { navItems: data_1.navItems }),
                react_1["default"].createElement(Hero_1["default"], null),
                react_1["default"].createElement(Grid_1["default"], null),
                react_1["default"].createElement(RecentProject_1["default"], null),
                react_1["default"].createElement(Clients_1["default"], null),
                react_1["default"].createElement(Experience_1["default"], null),
                react_1["default"].createElement(Approach_1["default"], null),
                react_1["default"].createElement(Fotter_1["default"], null)))));
}
exports["default"] = Home;
