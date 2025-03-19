import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.js"),
			fileName: (format, entryName) => `main.js`,
			formats: ["es"],
		},
	},
})
