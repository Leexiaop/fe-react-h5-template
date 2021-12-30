import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { Loading } from 'antd-mobile';

const routers = [
	{
		path: '/',
		component: lazy(() => import('../pages/home'))
	},
	{
		path: 'center',
		component: lazy(() => import('../pages/center')),
		children: [
			{
				path: 'detail',
				component: lazy(() => import('../pages/detail'))
			}
		]
	}
];

const routerChange = (routes) => {
	return routes.map((route) => {
		if (route.children) {
			route.children = routerChange(route.children);
		}
		route.element = (
			<Suspense fallback={<Loading />}>
				<route.component />
			</Suspense>
		);
		return route;
	});
};

const Routes = () => useRoutes(routerChange(routers));

export default Routes;
