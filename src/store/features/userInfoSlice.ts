import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
	token: string;
	info: {
		name?: string;
		phone?: string;
		nickname?: string;
		avatar?: string;
	};
	menus: any;
}

const initialState: userState = {
	token: '',
	info: {},
	menus: {},
};

export const userInfoSlice = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		setUserToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		setUserInfo: (state, action) => {
			state.info = action.payload;
		},
		setMenus: (state, action) => {
			state.menus = action.payload;
		},
	},
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setUserToken, setUserInfo, setMenus } = userInfoSlice.actions;

export default userInfoSlice.reducer;
