/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:39:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-13 20:03:34
 * @FilePath: /njoy-default-project/src/pages/404.tsx
 * @Description:
 */
import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import noPermission from '@/assets/no-permission.jpg';

const NoFoundPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Result
			icon={<img src={noPermission} />}
			title="404"
			subTitle="对不起，您访问的页面不存在或无访问权限"
			extra={
				<Button type="primary" onClick={() => navigate('/home')}>
					返回首页
				</Button>
			}
		/>
	);
};

export default NoFoundPage;
