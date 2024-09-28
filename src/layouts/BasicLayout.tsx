/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:12:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-28 17:10:59
 * @FilePath: /zhenge-pc-react/src/layouts/BasicLayout.tsx
 * @Description:   基本布局
 */
import { Layout } from 'antd';
import type { FC } from 'react';

import Footer from './footer';
import TapNav from './TapNav';

import './BasicLayout.less';
const { Content } = Layout;
import RouterBeforeEach from '@/config/routes/RouterBeforeEach';

const BasicLayout: FC = () => {
	// const currentYear = new Date().getFullYear();
	return (
		<Layout className="basiclayout">
			<TapNav />
			<Content className="content">
				<RouterBeforeEach />
			</Content>
			<Footer />
		</Layout>
	);
};

export default BasicLayout;
