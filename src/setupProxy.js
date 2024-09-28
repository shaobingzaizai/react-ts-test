/*
 * @Author: Wolf.Ma
 * @Date: 2023-05-04 17:56:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-08-23 11:05:33
 * @FilePath: /njoy-cli-template/src/setupProxy.js
 * @Description:
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		createProxyMiddleware('/api', {
			target: process.env.BASE_URL,
			changeOrigin: true,
			pathRewrite: {
				'^/api': '/api',
			},
		})
	);
};
