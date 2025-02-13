const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    ],
    darkMode: "class",
    theme: {
        extend:
            {
                "animation": {
                    shimmer: "shimmer 3s linear infinite"
                },
                "keyframes": {
                    shimmer: {
                        from: {
                            "backgroundPosition": "0 0"
                        },
                        to: {
                            "backgroundPosition": "-200% 0"
                        }
                    }
                },
                boxShadow: {
                    input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
                },
            }
    },
    plugins: [addVariablesForColors],
};

function addVariablesForColors({addBase, theme}: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

