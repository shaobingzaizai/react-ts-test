/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 18:37:58
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-13 18:38:03
 * @FilePath: /njoy-default-project/src/utils/index.ts
 * @Description:
 */
import ls from './storage';
// 清空用户信息
export function clearUserInfo() {
	ls.clear();
}
