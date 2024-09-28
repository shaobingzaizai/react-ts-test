module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:react/jsx-runtime',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: ['import', 'react', 'react-hooks', 'prettier', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		//  ----------------------------    代码执行方式 start ↓    -----------------------------
		// // 禁用 'semi' 规则
		// semi: "error",
		// // 使用 '@typescript-eslint/no-extra-semi' 规则 （强制单行结束必须要有分号结尾）
		// "@typescript-eslint/no-extra-semi": "off",
		// 对已声明未使用的变量报错
		'@typescript-eslint/no-unused-vars': 'error',
		'no-unused-vars': 'off',
		//  不允许if 和 else if判断相同
		'no-dupe-else-if': 'error',
		//  强制变量必须小驼峰命名规则
		camelcase: 'off',
		//  强制必须使用完全比较
		eqeqeq: 'error',
		//  禁止else语句中只包含 if语句，应该修改为 else if
		'no-lonely-if': 'error',
		//  允许ts指定类型为any
		'@typescript-eslint/no-explicit-any': 'off',
		//  允许对非null进行断言
		'@typescript-eslint/no-non-null-assertion': 'off',
		//  允许定义空接口
		'@typescript-eslint/no-empty-interface': 'off',
		// 允许使用  // @ts-ignore
		'@typescript-eslint/ban-ts-comment': 'off',
		//  禁止在函数中进行无意义的返回
		'no-useless-return': 'error',
		//  对于字符串拼接，限制只能使用字符串模板的方式 `hello ${name}`
		'prefer-template': 'error',
		//  限制模块导入不可重复
		'no-duplicate-imports': 'error',
		//  允许使用require引入模块
		'@typescript-eslint/no-var-requires': 0,
		//  忽略提示react弃用方法
		'react/no-deprecated': 'off',
		//  暂时先关闭未使用setState更新的错误报警，后面统一处理
		'react/no-direct-mutation-state': 'off',
		// 重新配置 react-hooks 相关内容
		'react-hooks/rules-of-hooks': 'error',
		//  ----------------------------    代码执行方式 end ↑    -----------------------------

		//  ----------------------------    代码外观 start ↓    -----------------------------
		//  配置import模块进行分组
		'import/order': [
			'error',
			{
				groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '../**',
						group: 'parent',
						position: 'after',
					},
					{
						pattern: './*.scss',
						group: 'sibling',
						position: 'after',
					},
				],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				semi: true,
				singleQuote: true,
				tabWidth: 4,
				trailingComma: 'es5',
			},
		],
		//  ----------------------------    代码外观 end ↑    -----------------------------
	},
};
