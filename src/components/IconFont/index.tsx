/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-17 11:11:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-20 16:13:21
 * @FilePath: /njoy-cli-template/src/components/IconFont/index.tsx
 * @Description:
 */
import { createFromIconfontCN } from '@ant-design/icons';
import PropTypes from 'prop-types';

const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/c/font_4027800_yvgou79zsnd.js', // 在 iconfont.cn 上生成
});

IconFont.propTypes = {
	//图标
	type: PropTypes.string.isRequired,
	//样式
	style: PropTypes.object,
	//提示
	title: PropTypes.any,
	//样式类名
	className: PropTypes.any,
};

export default IconFont;
