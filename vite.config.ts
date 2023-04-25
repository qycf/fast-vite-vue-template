import { defineConfig } from 'vite';
import proxy from './build/vite/proxy';
import { createVitePlugins } from './build/vite/plugins';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: createVitePlugins(true),
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	server: {
		port: 3000,
		open: true, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
		cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
		proxy,
	},
});
