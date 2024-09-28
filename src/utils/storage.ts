/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 18:06:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-08-23 10:22:11
 * @FilePath: /njoy-cli-template/src/utils/storage.ts
 * @Description:
 */
interface storageOptType {
	namespace?: string;
	storage?: string;
	defaultCacheTime?: number;
	isEncrypt?: boolean;
}

const options = Object.assign({
	namespace: '__NETJOY__', // key prefix
	storage: 'localStorage', // storage name session, local, memory
	defaultCacheTime: 60 * 60 * 24 * 7,
	isEncrypt: false,
});

let hasSetStorage = false;

export const storage = {
	getKey: (key: string) => {
		return options.namespace + key;
	},
	setOptions: (opt: storageOptType) => {
		if (hasSetStorage) {
			console.error('Has set storage:', options);
			return;
		}
		Object.assign(options, opt);
		hasSetStorage = true;
	},
	set: (key: string, value: any, expire: number | null = options.defaultCacheTime) => {
		const stringData = JSON.stringify({
			value,
			expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
		});
		(window[options.storage] as any).setItem(storage.getKey(key), stringData);
	},
	setObj: (key: string, newVal: any, expire: number | null = options.defaultCacheTime) => {
		const oldVal = storage.get(key);
		if (!oldVal) {
			storage.set(key, newVal, expire);
		} else {
			Object.assign(oldVal, newVal);
			storage.set(key, oldVal, expire);
		}
	},
	/**
	 * 读取缓存
	 * @param {string} key 缓存键
	 * @param {*=} def 默认值
	 */
	get: (key: string) => {
		const item = (window[options.storage] as any).getItem(storage.getKey(key));
		if (item) {
			try {
				const data = JSON.parse(item);
				const { value, expire } = data;
				// 在有效期内直接返回
				if (expire === null || expire >= Date.now()) {
					return value;
				}
				storage.remove(storage.getKey(key));
			} catch (e) {
				console.error(e);
			}
		}
		return null;
	},
	remove: (key: string) => {
		(window[options.storage] as any).removeItem(storage.getKey(key));
	},
	clear: (): void => {
		(window[options.storage] as any).clear();
	},
};

export default storage;
