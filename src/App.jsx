import React from 'react';
import './App.scss';
import About from './components/About';
import BgAnimation from './components/BgAnimation';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';

const App = () => {
	return (
		<div className="App">
			<div className="bg-animation">
				<BgAnimation />
			</div>
			<div className="container">
				<Home />
				<About />
				<Projects />
				<Contact />
			</div>
		</div>
	);
};

export default App;
