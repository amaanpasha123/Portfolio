"use strict";
exports.__esModule = true;
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
    return (React.createElement("main", { className: "relative overflow-hidden" },
        React.createElement("div", { className: "bg-black w-full" },
            React.createElement("div", { className: "max-w-7xl mx-auto sm:px-10 px-5" },
                React.createElement(Floating_nav_1.FloatingNav, { navItems: data_1.navItems }),
                React.createElement(Hero_1["default"], null),
                React.createElement(Grid_1["default"], null),
                React.createElement(RecentProject_1["default"], null),
                React.createElement(Clients_1["default"], null),
                React.createElement(Experience_1["default"], null),
                React.createElement(Approach_1["default"], null),
                React.createElement(Fotter_1["default"], null)))));
}
exports["default"] = Home;
