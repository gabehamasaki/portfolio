const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(216 34% 17%)',
				input: 'hsl(216 34% 17%)',
				ring: 'hsl(216 34% 17%)',
				background: 'hsl(224 71% 4%)',
				foreground: 'hsl(213 31% 91%)',
				primary: {
					DEFAULT: 'hsl(210 40% 98%)',
					foreground: 'hsl(222.2, 47.4%, 1.2%)',
				},
				secondary: {
					DEFAULT: 'hsl(222.2, 47.4%, 11.2%)',
					foreground: 'hsl(210 40% 98%)',
				},
				rose: '#ff0048',
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
