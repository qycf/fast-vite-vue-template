import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ConfigPagesPlugin } from './pages';
import { eslintPluginConfig } from './exlint';

export function createVitePlugins(isBuild: boolean) {
	const vitePlugins: (PluginOption | PluginOption[])[] = [
		// vue支持
		vue(),
	];

	vitePlugins.push(ConfigPagesPlugin());
	vitePlugins.push(eslintPluginConfig());
	return vitePlugins;
}
