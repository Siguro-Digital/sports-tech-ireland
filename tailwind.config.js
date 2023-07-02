module.exports = {
	content: [
		'./src/**/*.{ce.vue,vue,js,ts,html,hbs,jsx,tsx}',
	],
	presets: [
		require('./tailwind.preset.sti.js')
	],

	theme: {
		extend: {
			width: {
			'34p': '34%',
			},
		},

	}
}
