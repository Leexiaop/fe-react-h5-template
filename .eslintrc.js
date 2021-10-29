module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:react/jsx-runtime'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	rules: {
		indent: ['error', 'tab'],
		'import/prefer-default-export': 'off',
		'comma-dangle': ['error', {
			arrays: 'never',
			objects: 'never',
			imports: 'never',
			exports: 'never',
			functions: 'never'
		}],
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'class-methods-use-this': 'off',
		'no-useless-constructor': 'off',
		'no-console': 'off',
		'no-empty-function': 'off',
		'guard-for-in': 'off',
		'no-restricted-syntax': 'off',
		'no-unused-vars': 'off',
		'arrow-body-style': ['error', 'always'],
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }]
	}
};
