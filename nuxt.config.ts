// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	// ssr: false,
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: ["~/assets/css/main.css"],
	modules: ["nuxt-swiper", "nuxt-svgo", "@element-plus/nuxt"],
	app: {
		baseURL: "/collection/",
		head: {
			title: "COLLECTION",
			meta: [
				// { name: "description", content: "My amazing site." },
			],
		},
	},
	svgo: {
		componentPrefix: "i",
	},
});
