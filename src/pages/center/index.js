import './index.scss';
import { Outlet } from 'react-router-dom';

const Center = () => {
	return (
		<div>
			个人中心
			<Outlet />
		</div>
	);
};

export default Center;
