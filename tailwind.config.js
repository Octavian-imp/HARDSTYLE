/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,module.scss}"],
    darkMode: ["class", 'html[class="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                stalinist: "Stalinist One",
            },
            colors: {
                dark: "#121212",
                "dark-light": "#222226",
                light: "#fafafa",
                "dark-muted": "#cecece",
                muted: "#5a5a5a",
                success: "#5cf625",
                warning: "#f4be56",
            },
            backgroundColor: {
                "dark-form": "#22222645",
                "light-form": "#fafafa1c",
            },
        },
    },
    plugins: [],
}
