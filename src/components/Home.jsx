import React from 'react';
import BgAnimation from './BgAnimation';
import './Home.scss';

const Home = () => {
	return (
		<section id="home" className="home">
			<div className="home-header">
				<h1 className="home-header__logo">ARTHUR A.</h1>
			</div>
			<div className="home__title" style={{ overflow: 'hidden' }}>
				<div className="text-animation">
					<span className="first">Hello</span>
					<span className="slide">
						<span className="second">, I'm Arthur</span>
					</span>
				</div>
				<div className="third">I'm a front-end web developer.</div>
			</div>
			<div className="scroll-down">scroll down</div>
			<div className="arrow-one"></div>
			<div className="arrow-two"></div>
		</section>
	);
};

export default Home;
