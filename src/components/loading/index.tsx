/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:09:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-13 19:10:30
 * @FilePath: /njoy-default-project/src/components/loading/index.tsx
 * @Description:
 */
import type { FC } from 'react';
import { Spin } from 'antd';

const Loading: FC = () => {
	return (
		<Spin tip="Loading" size="large">
			<div
				style={{
					padding: '50px',
					background: 'rgba(0, 0, 0, 0.05)',
					borderRadius: ' 4px',
				}}
			/>
		</Spin>
	);
};

export default Loading;
