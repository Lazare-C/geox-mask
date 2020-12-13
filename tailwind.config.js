/*
 * LazareC
 * EDUCATION PROJECT
 * FILE: tailwind.config.js
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
