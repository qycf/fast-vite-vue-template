/**
 * @name eslintPluginConfig
 * @description eslint配置
 */

import eslintPlugin from 'vite-plugin-eslint';

export const eslintPluginConfig = () => {
	return eslintPlugin({
		include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
	});
};
