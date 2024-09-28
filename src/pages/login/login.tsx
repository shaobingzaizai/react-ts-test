/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:23:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-22 17:54:19
 * @FilePath: /zhenge-pc-react/src/pages/login/login.tsx
 * @Description:
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { store } from '@/store';
import { setUserInfo } from '@/store/features/userInfoSlice';
import { useAppSelector } from '@/store/hooks';
import './login.less';
import { NJOY_TOKEN } from '@/utils/config';
import ls from '@/utils/storage';

const Login: React.FC = () => {
	const navigate = useNavigate();
	const userInfo = useAppSelector((state) => state.userInfo.info);

	const login = () => {
		console.log('userInfo', userInfo);
		store.dispatch(
			setUserInfo({
				name: 'wolf.ma',
				phone: '13381765960',
				nickname: 'wolf',
				avatar: 'wolf.png',
			})
		);
		ls.set(NJOY_TOKEN, 'shaobing');
		navigate('/home');
	};

	return (
		<div className="login">
			<div className="login-content">
				<div onClick={login}></div>
			</div>
		</div>
	);
};

export default Login;
