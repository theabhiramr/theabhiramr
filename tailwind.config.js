/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'media',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#f0f0f0',
                foreground: '#202020',
                'dark-background': '#202020',
                'dark-foreground': '#f0f0f0',
            }
            fontFamily: {
                'geist-mono': ['Geist Mono', 'monospace'],
                'outfit': ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}