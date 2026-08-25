/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: '4px',
        md: '3px',
        sm: '2px'
      },
      fontFamily: {
        display: ["'Archivo'", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Inter", "-apple-system", "sans-serif"]
      },
      colors: {
        navy: '#1C2431',
        'navy-deep': '#141A24',
        amber: '#F5A623',
        'amber-dark': '#D98910',
        'amber-tint': '#FDF3E1',
        /* Deep steel blue — sits under the amber instead of fighting it */
        brand: '#1B4A7A',
        'brand-dark': '#123356',
        'brand-deep': '#0F2742',
        'brand-light': '#2E6BA8',
        'brand-tint': '#E8EFF6',
        frost: '#FFFFFF',
        cloud: '#F1F4F8',
        mist: '#D5DDE7',
        slate: '#46536A',
        ink: '#141A24',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.9)', opacity: '0' }
        },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(28px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 45s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-dot': 'scroll-dot 1.8s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
