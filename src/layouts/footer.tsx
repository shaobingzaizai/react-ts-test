/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:12:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-23 16:53:58
 * @FilePath: /zhenge-pc-react/src/layouts/footer.tsx
 * @Description:   基本布局
 */
import type { FC } from 'react';

import './footer.less';

const Footer: FC = () => {
	// const currentYear = new Date().getFullYear();
	return (
		<div className="footer-content">
			<div className="footer"></div>
		</div>
	);
};

export default Footer;
