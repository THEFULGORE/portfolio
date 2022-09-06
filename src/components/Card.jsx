import React from 'react';
import { SiGithub, SiAiohttp } from 'react-icons/si';
import { useIntersection } from '../hooks/useIntersection';
import { useEffect } from 'react';
import './Card.scss';

const Card = ({ svg, gradient, stacks, web, github, description }) => {
	const [containerRef, isVisible] = useIntersection({
		root: null,
		rootMargin: '0px',
		threshold: 1.0,
	});

	useEffect(() => {
		if (isVisible) {
			containerRef.current.classList.add('card-animation');
		}
	}, [isVisible]);

	return (
		<div
			className="card"
			style={{
				background: gradient,
			}}
			ref={containerRef}
		>
			{svg}
			<div className="card__info">
				<h1 className="card__tech-title">Tech Stacks</h1>

				<div className="card__tech">
					{stacks.map((el) => (
						<span className="card__tech-item">{el}</span>
					))}
				</div>
				<h1>Links</h1>
				<div className="card__links">
					{web ? (
						<div className="card__web">
							<a target="_blank" rel="noopener noreferrer" href={web}>
								<div>Website</div>
								<SiAiohttp size={30} />
							</a>
						</div>
					) : null}
					<div className="card__github">
						<a target="_blank" rel="noopener noreferrer" href={github}>
							<div>Github</div>
							<SiGithub size={30} />
						</a>
					</div>
				</div>
				<h1>Description</h1>
				<div className="card__descr">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
