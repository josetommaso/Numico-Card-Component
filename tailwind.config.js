/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./*.html'],
	theme: {
		fontFamily: {
			lexendDeca: ['Lexend Deca', 'sans-serif'],
		},
		extend: {
			colors: {
				veryDarkBlue: 'hsl(233, 47%, 7%)',
				darkBlue: 'hsl(244, 38%, 16%)',
				violet: 'hsl(277, 64%, 61%)',
			},
		},
	},
};
