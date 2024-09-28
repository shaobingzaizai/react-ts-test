/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-23 15:32:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-08-22 18:30:45
 * @FilePath: /njoy-cli-template/src/config/routes/RouterBeforeEach.tsx
 * @Description: 路由守卫
 */
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { checkRouterAuth } from './index';

import { NJOY_TOKEN } from '@/utils/config';
import ls from '@/utils/storage';

const RouterBeforeEach = () => {
	const navigate = useNavigate();
	const location: any = useLocation();
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		const obj = checkRouterAuth(location.pathname);
		const blLogin = ls.get(NJOY_TOKEN);
		if (obj && obj.auth && !blLogin) {
			setAuth(false);
			navigate('/login', { replace: true });
		} else {
			setAuth(true);
		}
	}, [location, navigate]);

	return auth ? <Outlet /> : null;
};

export default RouterBeforeEach;
