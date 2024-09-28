/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:12:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-28 18:16:12
 * @FilePath: /zhenge-pc-react/src/layouts/TapNav.tsx
 * @Description:   基本布局
 */
import classnames from 'classnames';
import { useState, type FC } from 'react';

import './TapNav.less';

const TapNav: FC = () => {
	const [nowTab] = useState('home');
	const [menuList] = useState([
		{ value: 'home', label: '首页' },
		{ value: 'intro', label: '简介' },
		{ value: 'exibition', label: '展览' },
		{ value: 'relic', label: '文物' },
		{ value: 'message', label: '资讯' },
		{ value: 'service', label: '服务' },
	]);

	return (
		<div className="tapnav">
			<div className="nav">
				<div className="nav-left">
					<img className="left-icon" />
				</div>
				<div className="nav-center">
					<view className="menu-list">
						{menuList.map((item: any) => {
							return (
								<view
									key={item.values}
									className={classnames('menu-item', {
										active: item.value === nowTab,
									})}
								>
									{item.label}
								</view>
							);
						})}
					</view>
				</div>
				<div className="nav-right"></div>
			</div>
		</div>
	);
};

export default TapNav;
