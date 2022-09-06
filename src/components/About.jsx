import React, { useEffect } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import './About.scss';

const About = () => {
	const [containerRef, isVisible] = useIntersection({
		root: null,
		rootMargin: '0px',
		threshold: 1.0,
	});

	useEffect(() => {
		if (isVisible) {
			containerRef.current.classList.add('about__container-animation');
		}
	}, [isVisible]);

	return (
		<section className="about" style={{ position: 'relative' }}>
			<div className="about__container" ref={containerRef}>
				<div className="about__info">
					<div className="about__info-skills">
						<h1>Skills</h1>
						<p>Javascript/ES5/ES6</p>
						<p>HTML/CSS3/SCSS</p>
						<p>TypeScript</p>
						<p>React + Redux Toolkit</p>
						<p>Ant Design UI</p>
						<p>Node.JS/Express</p>
					</div>
					<div className="about__info-about">
						<h1>About</h1>
						<p>
							I am a passionate and detail-oriented Front-end software engineer with ability to
							adapt in both self-starting and collaborative environments while staying focused on
							achieving high-quality results. Eager to obtain junior position in the company to use
							my skills in web development, troubleshooting complex problems and assisting in the
							timely completion of projects that will expand my learning and build upon my developer
							skills
						</p>
					</div>
					<div className="about__info-education">
						<h1>Education</h1>
						<p>B.S in Mathematics and CS</p>
						<p>South Ural State University</p>
						<p style={{ fontWeight: 300, fontSize: '1rem' }}>August 2019 - Present</p>
					</div>
					<div className="about__info-experience">
						<h1>Experience</h1>
						<div className="experience-card">
							<div className="experience-card__title">
								<div>
									<h1>Frontend Engineer Intern</h1>
									<p style={{ fontWeight: 300, fontSize: '1rem' }}>August 2022</p>
								</div>
								<h1>NAPOLEON.IT</h1>
							</div>
							<p>
								Wrote reusable components in Vue.js, built graphs and tables with data, supplemented
								the documentation for the new company service
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
