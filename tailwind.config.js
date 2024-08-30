import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Syne', 'sans-serif']
		},
		colors: {
			purple: 'hsl(257, 62%, 71%)',
			darkGrey: 'hsl(0, 0%, 17%)',
			textColor: 'hsl(262, 7%, 76%)',
			hoverColour: 'hsl(257, 62%, 60%)'
		},
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite'
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' }
				}
			}
		}
	},
	plugins: []
};
