import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';
import logo from './logo.svg';
import './App.scss';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes />
			</Router>
		</div>
	);
};

export default App;
