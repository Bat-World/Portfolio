
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        monument: ['"Monument Extended"', 'sans-serif'],
        general: ['"General Sans"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: 'hsl(0, 0%, 7%)',
        soft: 'hsl(240, 2%, 12%)',
        border: 'hsl(240, 2%, 20%)',
        text: 'hsl(0, 0%, 95%)',
        accent: 'hsl(353, 100%, 65%)',
        primary: '#8c8c8c',
        secondary: '#333',
        tertiary: '#e5e5e5',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0,0,0,0.2)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(to bottom right, hsl(240, 2%, 12%), hsl(0,0%,7%))',
      },
    },
  },
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'move-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'move-rtl': 'move-rtl 40s linear infinite',
      },
    },
  },
};

