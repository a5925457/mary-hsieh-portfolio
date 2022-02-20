module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'theme-pink': '#FF9292',
                'theme-brown': '#754F44',
                'theme-orange': '#FFD384',
                'theme-yellow': '#FFF9B0',
                'theme-deep-orange': '#FFAB73',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'floating-sm': 'floating-sm 4.5s ease-in-out infinite',
                'floating-lg': 'floating-lg 4.5s ease-in-out infinite',
            },
            transformOrigin: {
                'top-left-0-145': '0 145px',
                'top-left-0-190': '0 190px',
            },
            keyframes: {
                'floating-sm': {
                    '0%, 100%': { transform: 'translateX(0px)' },
                    '50%': { transform: 'translateX(15px)' },
                },
                'floating-lg': {
                    '0%, 100%': { transform: 'translateX(0px)' },
                    '50%': { transform: 'translateX(40px)' },
                },
            },
        },
    },
    plugins: [],
};
