import { useNavigate } from 'react-router-dom';
import { Button } from 'antd-mobile';
import './index.scss';

const Home = () => {
	const navigate = useNavigate();
	const onButtonClick = () => {
		navigate('/center/detail');
	};
	return (
		<div>
			<Button onClick={onButtonClick}>去详情</Button>
		</div>
	);
};

export default Home;
