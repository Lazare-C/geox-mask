/*
 * LazareC
 * EDUCATION PROJECT
 * FILE: tailwind.config.js
 * Humorous site, a real mask really saves lives
 */

module.exports = {
    purge: {
        mode: 'all',
        enabled: false,
        content: [
            '*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
        ]
    },

    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
