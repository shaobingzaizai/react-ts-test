/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 16:15:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-22 17:49:54
 * @FilePath: /zhenge-pc-react/src/App.tsx
 * @Description:
 */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import { BrowserRouter } from 'react-router-dom';

import Router from '@/config/routes';
import { themeConfig } from '@/config/style/themeConfig';
import '@/config/style/common.less';

dayjs.locale('zh-cn');

function App() {
	return (
		<ConfigProvider locale={zhCN} theme={themeConfig}>
			<BrowserRouter>
				{/* The rest of your app goes here */}
				<Router />
			</BrowserRouter>
		</ConfigProvider>
	);
}

export default App;
