const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'class',
	theme: {
		fontFamily: {
			'heading': ['bebas-neue-pro', ...defaultTheme.fontFamily.sans],
			'base': ['nunito', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				purple: '#3E3A86',
				red: '#C62831',
				green: '#62B068',
				dark: '#222222',
				offset: '#EDEDED',
				gray: colors.trueGray,
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	]
}
