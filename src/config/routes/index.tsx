/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:21:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-08-22 18:30:14
 * @FilePath: /njoy-cli-template/src/config/routes/index.tsx
 * @Description:
 */
import { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import IconFont from '@/components/IconFont';
//layout
import Loading from '@/components/loading';
import BasicLayout from '@/layouts/BasicLayout';
import NotFoundPage from '@/pages/404';
import Login from '@/pages/login/login';
const Home = lazy(() => import('@/pages/home'));

// 上层加载
const lazyComponent = (element: JSX.Element) => {
	return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

const baseRoutes: any = [
	{
		path: '/login',
		element: <BasicLayout />,
		auth: false, // 是否需要登录
		children: [
			{
				path: '/login',
				name: '登录',
				auth: false, // 是否需要登录
				element: <>{lazyComponent(<Login />)}</>,
			},
		],
	},
];

const layoutRoutes: any = [
	{ path: '/', element: <Navigate to="/home" /> },
	{
		path: '/',
		element: <BasicLayout />,
		redirect: '/home',
		auth: false, // 是否需要登录
		children: [
			{
				path: '/home',
				name: '首页',
				icon: <IconFont type="icon-zuhu" />,
				auth: false, // 是否需要登录
				isMenu: true, // 是否菜单栏显示
				element: <>{lazyComponent(<Home />)}</>,
			},
			{ path: '*', element: <Navigate to="/404" /> },
			{
				path: '/404',
				element: (
					<>
						<NotFoundPage />
					</>
				),
			},
		],
	},
];

export const routes: any = [
	...baseRoutes,
	...layoutRoutes,
	{ path: '*', element: <Navigate to="/404" /> },
	{
		path: '/404',
		element: (
			<>
				<NotFoundPage />
			</>
		),
	},
];

function Router() {
	return useRoutes(routes);
}

//根据路径获取路由
const checkAuth = (routers: any, path: string) => {
	for (const data of routers) {
		if (data.path === path) return data;
		if (data.children) {
			const res: any = checkAuth(data.children, path);
			if (res) return res;
		}
	}
	return null;
};

const checkRouterAuth = (path: string) => {
	let auth = null;
	auth = checkAuth(routes, path);
	return auth;
};

export default Router;
export { checkRouterAuth };
