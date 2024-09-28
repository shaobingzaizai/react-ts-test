/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:26:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-28 17:05:09
 * @FilePath: /zhenge-pc-react/src/pages/home/index.tsx
 * @Description:
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

// import { EnvImage } from '@/config';
import * as ImageApi from '@/config/image';
import { store } from '@/store';
import { setUserInfo } from '@/store/features/userInfoSlice';
import './index.less';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const jumpPage = () => {
		//测试
		store.dispatch(
			setUserInfo({
				name: 'wolf.ma',
				phone: '13381765960',
				nickname: 'wolf',
				avatar: 'wolf.png',
			})
		);
		navigate('/user');
	};

	return (
		<div className="home">
			<div className="top-image" onClick={jumpPage}>
				<img className="image" src={ImageApi.HomeBg} />
			</div>
			<div className="top-image" onClick={jumpPage}>
				<img className="image" src={ImageApi.HomeBg} />
			</div>
		</div>
	);
};

export default Home;
