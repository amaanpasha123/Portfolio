/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",

    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./component/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            animation: {
                scroll:
                    "scroll var(--animation-duration, 40s) linear infinite",
            },

            keyframes: {
                scroll: {
                    from: {
                        transform: "translateX(0)",
                    },

                    to: {
                        transform: "translateX(-50%)",
                    },
                },
            },

            colors: {
                primary: "#000319",
            },
        },
    },

    plugins: [],
};