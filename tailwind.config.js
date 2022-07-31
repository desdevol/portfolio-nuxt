/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                custom: {
                    primary: '#831843',
                    secondary: '#6366f1',
                    accent: '#3b82f6',
                    neutral: '#242424',
                    'base-100': '#111',
                    info: '#3ABFF8',
                    success: '#36D399',
                    warning: '#f59e0b',
                    error: '#9f1239',
                },
            },
        ],
        darkTheme: 'custom',
    },
}
