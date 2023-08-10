const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'button-red': '#CF483D',
              }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    // plugins: [
    //     require('@tailwindcss/forms'), 
    //     require('@tailwindcss/typography')
    // ],
};
